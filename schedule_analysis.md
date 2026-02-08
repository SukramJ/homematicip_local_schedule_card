# Tiefgreifende Analyse: Homematic Schedule-System

## Übersicht

Diese Analyse untersucht die Unterschiede zwischen den Schedule-Implementierungen für verschiedene Gerätetypen in der Homematic-Integration und dokumentiert die aktuelle Architektur.

---

## 1. Gerätetypen mit Schedule-Unterstützung

### 1.1 CCU-Kanaltypen (aus pydevccu)

In der pydevccu-Datenbank wurden **43 Geräte** mit Schedule-Unterstützung identifiziert:

| Kanaltyp                               | Anzahl | Beschreibung               |
| -------------------------------------- | ------ | -------------------------- |
| `SWITCH_WEEK_PROFILE`                  | 24     | Schalter (Ein/Aus)         |
| `DIMMER_WEEK_PROFILE`                  | 5      | Dimmbare Lichter           |
| `BLIND_WEEK_PROFILE`                   | 5      | Rollläden/Jalousien        |
| `UNIVERSAL_LIGHT_WEEK_PROFILE`         | 3      | Universelle Lichtsteuerung |
| `DIMMER_OUTPUT_BEHAVIOUR_WEEK_PROFILE` | 3      | Dimmer-Ausgangsverhalten   |
| `SHADING_WEEK_PROFILE`                 | 2      | Beschattung                |
| `WATER_SWITCH_WEEK_PROFILE`            | 1      | Wasser-Ventil              |

### 1.2 Mapping zu Home Assistant Domains

| CCU-Kanaltyp                   | HA Domain | Beispielgeräte                   |
| ------------------------------ | --------- | -------------------------------- |
| `SWITCH_WEEK_PROFILE`          | `switch`  | HmIP-PS, HmIP-PSM, HmIP-BSM      |
| `DIMMER_WEEK_PROFILE`          | `light`   | HmIP-BDT, HmIP-DRSI1, HmIP-DRSI4 |
| `BLIND_WEEK_PROFILE`           | `cover`   | HmIP-BROLL, HmIP-FROLL, HmIP-FBL |
| `SHADING_WEEK_PROFILE`         | `cover`   | HmIP-HDM1, HmIP-HDM2             |
| `UNIVERSAL_LIGHT_WEEK_PROFILE` | `light`   | HmIP-LSC                         |
| `WATER_SWITCH_WEEK_PROFILE`    | `valve`   | ELV-SH-WSM                       |

---

## 2. Schedule-Parameter pro Gerätetyp

### 2.1 Gemeinsame Basis-Parameter (alle Typen)

Aus `create_empty_schedule_group()` in `week_profile.py`:

```python
{
    ScheduleField.ASTRO_OFFSET: 0,           # int: -720 bis 720 Minuten
    ScheduleField.ASTRO_TYPE: AstroType.SUNRISE,  # sunrise/sunset
    ScheduleField.CONDITION: ScheduleCondition.FIXED_TIME,  # Auslösebedingung
    ScheduleField.FIXED_HOUR: 0,             # int: 0-23
    ScheduleField.FIXED_MINUTE: 0,           # int: 0-59
    ScheduleField.TARGET_CHANNELS: [],       # Liste von Zielkanälen
    ScheduleField.WEEKDAY: [],               # Liste von Wochentagen
}
```

### 2.2 Typ-spezifische Parameter

| Parameter          | SWITCH  |    LIGHT    |        COVER         |    VALVE    |
| ------------------ | :-----: | :---------: | :------------------: | :---------: |
| `LEVEL`            | ✓ (0/1) | ✓ (0.0-1.0) |     ✓ (0.0-1.0)      | ✓ (0.0-1.0) |
| `LEVEL_2`          |    -    |      -      | ✓ (Lamellenposition) |      -      |
| `DURATION_BASE`    |    ✓    |      ✓      |          -           |      -      |
| `DURATION_FACTOR`  |    ✓    |      ✓      |          -           |      -      |
| `RAMP_TIME_BASE`   |    -    |      ✓      |          -           |      -      |
| `RAMP_TIME_FACTOR` |    -    |      ✓      |          -           |      -      |

### 2.3 Semantische Unterschiede bei `LEVEL`

| Gerätetyp          | Level 0.0   | Level 0.5      | Level 1.0            |
| ------------------ | ----------- | -------------- | -------------------- |
| **Switch**         | Aus         | -              | Ein                  |
| **Light (Dimmer)** | Aus         | 50% Helligkeit | 100% Helligkeit      |
| **Cover**          | Geschlossen | 50% geöffnet   | Vollständig geöffnet |
| **Valve**          | Geschlossen | 50% geöffnet   | Vollständig geöffnet |

---

## 3. Validierung in aiohomematic

### 3.1 Pydantic-Validierung (`schedule_models.py`)

Die `SimpleScheduleEntry` Klasse validiert:

```python
class SimpleScheduleEntry(BaseModel):
    # Pflichtfelder
    weekdays: list[WeekdayLiteral]  # min_length=1
    time: str                        # HH:MM Format, Regex-validiert
    target_channels: list[str]       # min_length=1, Format X_Y
    level: float                     # ge=0.0, le=1.0

    # Optionale Felder
    condition: ConditionLiteral = "fixed_time"
    astro_type: AstroTypeLiteral | None = None
    astro_offset_minutes: int        # ge=-720, le=720
    level_2: float | None           # ge=0.0, le=1.0
    duration: str | None            # Regex: \d+(ms|s|min|h)
    ramp_time: str | None           # Regex: \d+(ms|s|min|h)
```

### 3.2 Domain-spezifische Validierung (`model_validator`)

Die domain-spezifische Validierung greift, wenn ein `schedule_domain` Kontext übergeben wird (z.B. beim Aufruf über `DefaultWeekProfile.set_schedule()`):

| Domain     | level        | level_2     | ramp_time   | duration    |
| ---------- | ------------ | ----------- | ----------- | ----------- |
| **SWITCH** | 0.0 oder 1.0 | ❌ verboten | ❌ verboten | ✅ erlaubt  |
| **LIGHT**  | 0.0-1.0      | ❌ verboten | ✅ erlaubt  | ✅ erlaubt  |
| **COVER**  | 0.0-1.0      | ✅ erlaubt  | ❌ verboten | ❌ verboten |
| **VALVE**  | 0.0-1.0      | ❌ verboten | ❌ verboten | ✅ erlaubt  |

Ohne Kontextinformation werden alle Felder akzeptiert (Abwärtskompatibilität).

---

## 4. Service-Architektur in homematicip_local

### 4.1 Geräte-basierte Services (aktuell)

_Stand: 2026-02-06_

Alle Schedule-Services verwenden **`device_id` oder `device_address`** zur Geräteidentifikation. Es gibt keine domain-spezifischen Services mehr.

| Service                       | Gerätetyp | Beschreibung                                                      |
| ----------------------------- | --------- | ----------------------------------------------------------------- |
| `get_schedule`                | Alle      | Kompletten Schedule lesen                                         |
| `set_schedule`                | Alle      | Kompletten Schedule schreiben (non-climate: `schedule_data` dict) |
| `get_schedule_profile`        | Climate   | Einzelnes Profil lesen (P1-P6)                                    |
| `set_schedule_profile`        | Climate   | Einzelnes Profil schreiben (Simple-Format)                        |
| `get_schedule_weekday`        | Climate   | Einzelnen Wochentag lesen                                         |
| `set_schedule_weekday`        | Climate   | Einzelnen Wochentag schreiben (Simple-Format)                     |
| `copy_schedule`               | Climate   | Kompletten Schedule zwischen Geräten kopieren                     |
| `copy_schedule_profile`       | Climate   | Einzelnes Profil kopieren (auch zwischen Geräten)                 |
| `set_schedule_active_profile` | Climate   | Aktives Profil umschalten                                         |

### 4.2 Frühere Architektur (entfernt)

Die folgenden domain-spezifischen, entity-basierten Services wurden durch die geräte-basierten Services ersetzt:

| Entfernt                                       | Ersetzt durch                                  |
| ---------------------------------------------- | ---------------------------------------------- |
| `switch_set_schedule` / `switch_get_schedule`  | `set_schedule` / `get_schedule`                |
| `light_set_schedule` / `light_get_schedule`    | `set_schedule` / `get_schedule`                |
| `cover_set_schedule` / `cover_get_schedule`    | `set_schedule` / `get_schedule`                |
| `valve_set_schedule` / `valve_get_schedule`    | `set_schedule` / `get_schedule`                |
| `set_schedule_simple_profile`                  | `set_schedule_profile`                         |
| `set_schedule_simple_weekday`                  | `set_schedule_weekday`                         |
| `get_schedule_simple_profile`                  | `get_schedule_profile`                         |
| `get_schedule_simple_weekday`                  | `get_schedule_weekday`                         |
| `set_schedule_active_profile` (entity-basiert) | `set_schedule_active_profile` (geräte-basiert) |

### 4.3 Vorteile der geräte-basierten Architektur

1. **Einheitliche API** — Ein Service pro Operation statt 8+ domain-spezifische Varianten
2. **Device-Level statt Entity-Level** — Schedule ist eine Geräteeigenschaft, keine Entity-Eigenschaft
3. **WeekProfileDataPoint** — Zentraler Datenpunkt pro Gerät für Schedule-Zugriff
4. **Keine Voluptuous-Duplikation** — Domain-Validierung erfolgt in aiohomematic (Pydantic), nicht in HA-Schemas
5. **Erweiterbarkeit** — Neue Gerätetypen benötigen keine neuen Services

### 4.4 Voluptuous-Schemas (aktuell)

Die Schemas validieren nur die Service-Struktur (Pflichtfelder, Geräteidentifikation). Die semantische Domain-Validierung erfolgt in aiohomematic:

```python
# Beispiel: SCHEMA_SET_SCHEDULE
SCHEMA_SET_SCHEDULE = vol.All(
    cv.has_at_least_one_key(CONF_DEVICE_ID, CONF_DEVICE_ADDRESS),
    cv.has_at_most_one_key(CONF_DEVICE_ID, CONF_DEVICE_ADDRESS),
    BASE_SCHEMA_DEVICE.extend({
        vol.Required(ATTR_SCHEDULE_DATA): dict,
    }),
)
```

### 4.5 Exception-Handling

Die Service-Handler fangen Exceptions von aiohomematic ab und wandeln sie in `HomeAssistantError` um:

```python
async def _async_service_set_schedule(*, hass, service):
    hm_device = _async_get_hm_device_by_service_data(hass=hass, service=service)
    wp_dp = hm_device.week_profile_data_point
    if wp_dp is None:
        raise HomeAssistantError(f"Device {hm_device.name} does not support schedules")
    try:
        await wp_dp.set_schedule(schedule_data=service.data[ATTR_SCHEDULE_DATA])
    except BaseHomematicException as bhexc:
        raise HomeAssistantError(bhexc) from bhexc
    except ValidationError as vexc:
        errors = "; ".join(e["msg"] for e in vexc.errors())
        raise HomeAssistantError(f"Invalid schedule data: {errors}") from vexc
```

---

## 5. WeekProfileDataPoint und Sensor-Entity

### 5.1 WeekProfileDataPoint

Jedes Gerät mit Schedule-Unterstützung erhält einen `WeekProfileDataPoint` (bzw. `ClimateWeekProfileDataPoint` für Thermostate). Dieser Datenpunkt:

- Exponiert Schedule-Daten und Metadaten
- Delegiert Lese-/Schreiboperationen an das `WeekProfile`
- Wird als Sensor-Entity in Home Assistant dargestellt

### 5.2 Sensor-Entity (`AioHomematicWeekProfileSensor`)

| Attribut                      | Beschreibung                           |
| ----------------------------- | -------------------------------------- |
| `native_value`                | Anzahl aktiver Schedule-Einträge       |
| `schedule_type`               | `climate` oder `default`               |
| `max_entries`                 | Maximale Anzahl Einträge               |
| `schedule_channel_address`    | CCU-Kanaladresse des Schedules         |
| `schedule_data`               | Vollständige Schedule-Daten (als JSON) |
| `min_temp` / `max_temp`       | Temperaturbereich (nur Climate)        |
| `available_schedule_profiles` | P1-P6 (nur Climate)                    |

### 5.3 Namensgebung

Die Sensor-Entity verwendet `translation_key = "week_profile"` für die Namensgebung:

- Deutsch: `{Gerätename} Wochenprofil`
- Englisch: `{Device Name} Week profile`

---

## 6. Implementierung in aiohomematic (umgesetzt)

### 6.1 Domain-spezifische Validierung

Die domain-spezifische Validierung wurde als `@model_validator(mode="wrap")` in `SimpleScheduleEntry` implementiert:

```python
@model_validator(mode="wrap")
@classmethod
def validate_domain_constraints(
    cls, values: Any, handler: Any, info: ValidationInfo
) -> SimpleScheduleEntry:
    result = cast(SimpleScheduleEntry, handler(values))
    domain = _get_schedule_domain_from_context(info)
    if domain is None:
        return result  # Abwärtskompatibilität

    if domain == DataPointCategory.SWITCH:
        if result.level not in (0.0, 1.0):
            raise ValueError("Switch level must be 0.0 or 1.0")
        if result.level_2 is not None:
            raise ValueError("level_2 not supported for switch")
        if result.ramp_time is not None:
            raise ValueError("ramp_time not supported for switch")
    # ... weitere Domains analog
    return result
```

### 6.2 Integration in DefaultWeekProfile

```python
async def set_schedule(self, *, schedule_data: SimpleSchedule) -> None:
    # Re-validierung mit Domain-Kontext
    SimpleSchedule.model_validate(
        schedule_data.model_dump(),
        context={SCHEDULE_DOMAIN_CONTEXT_KEY: self._data_point.category},
    )
    # An CCU senden...
    await self._client.put_paramset(...)
```

### 6.3 Tests

13 Tests in `TestDomainSpecificScheduleValidation`:

- `test_switch_schedule_binary_level_valid`
- `test_switch_schedule_non_binary_level_rejected`
- `test_switch_schedule_level_2_rejected`
- `test_switch_schedule_ramp_time_rejected`
- `test_light_schedule_level_2_rejected`
- `test_light_schedule_ramp_time_allowed`
- `test_cover_schedule_ramp_time_rejected`
- `test_cover_schedule_duration_rejected`
- `test_cover_schedule_level_2_allowed`
- `test_valve_schedule_level_2_rejected`
- `test_valve_schedule_ramp_time_rejected`
- `test_no_context_skips_domain_validation`
- `test_direct_entry_validation_with_context`

---

## 7. Zusammenfassung

_Stand: 2026-02-06_

### Validierungsschichten

| Schicht                 | Ort                               | Verantwortung                         |
| ----------------------- | --------------------------------- | ------------------------------------- |
| **YAML-Struktur**       | homematicip_local (Voluptuous)    | Pflichtfelder, Geräteidentifikation   |
| **Datenformat**         | aiohomematic (Pydantic)           | Wertebereiche, Formate, Pflichtfelder |
| **Domain-Semantik**     | aiohomematic (Pydantic + Context) | Typ-spezifische Feldeinschränkungen   |
| **Fehlerweiterleitung** | homematicip_local                 | Exception → HomeAssistantError        |

### Architektur

| Komponente                      | Beschreibung                                                  |
| ------------------------------- | ------------------------------------------------------------- |
| `WeekProfileDataPoint`          | Zentraler Datenpunkt pro Gerät für Schedule-Zugriff           |
| `AioHomematicWeekProfileSensor` | Sensor-Entity mit Schedule-Metadaten als Attribute            |
| Geräte-basierte Services        | Einheitliche API via `device_id` / `device_address`           |
| Pydantic-Validierung            | Strukturelle + domain-spezifische Validierung in aiohomematic |

---

## Anhang: Geräteinventar aus pydevccu

### Switch-Geräte (SWITCH_WEEK_PROFILE)

- ELV-SH-BS2, ELV-SH-SW1-BAT
- HMIP-PS, HMIP-PSM
- HmIP-BSL, HmIP-BSM
- HmIP-DLD (Türschloss-Treiber)
- HmIP-DRBLI4
- HmIP-FSI16, HmIP-FSM16
- HmIP-MOD-OC8
- HmIP-PCBS, HmIP-PCBS2, HmIP-PCBS-BAT
- HmIP-PS, HmIP-PSM, HmIP-PSM-2, HmIP-USBSM
- HmIP-SWDM, HmIP-SWDM-2
- HmIP-WHS2

### Dimmer-Geräte (DIMMER_WEEK_PROFILE)

- HmIP-BDT (Dimmer für Phasenabschnitt)
- HmIP-DRDI3 (Dimmer-Empfänger 3-fach)
- HmIP-DRG-DALI (DALI Dimmer)
- HmIP-DRSI1, HmIP-DRSI4 (Dimmer-Empfänger)

### Blind-Geräte (BLIND_WEEK_PROFILE)

- HmIP-BROLL (Rollladenaktor)
- HmIP-FBL (Jalousieaktor unterputz)
- HmIP-FDT (Dimmertaster)
- HmIP-FROLL (Rollladenaktor unterputz)

### Shading-Geräte (SHADING_WEEK_PROFILE)

- HmIP-HDM1, HmIP-HDM2 (Beschattungsmodule)

### Universal Light-Geräte (UNIVERSAL_LIGHT_WEEK_PROFILE)

- HmIP-LSC (Lichtsteuerung)

### Water Switch-Geräte (WATER_SWITCH_WEEK_PROFILE)

- ELV-SH-WSM (Wasser-Schaltmodul)
