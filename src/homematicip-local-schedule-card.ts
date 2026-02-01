import { LitElement, html, css, PropertyValues } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { repeat } from "lit/directives/repeat.js";
import {
  ScheduleCardConfig,
  HomeAssistant,
  ScheduleEntityAttributes,
  ScheduleDict,
  ScheduleEventUI,
  ScheduleEvent,
  DatapointCategory,
  WEEKDAYS,
  Weekday,
  WeekdayBit,
  TimeBase,
} from "./types";
import {
  scheduleToUIEvents,
  formatLevel,
  formatDuration,
  createEmptyEvent,
  validateEvent,
  parseTime,
  convertToBackendFormat,
  isLevelBoolean,
} from "./utils";
import { getTranslations, formatString, Translations } from "./localization";

// HomematicIP Logo in Base64 format
const HOMEMATIC_LOGO =
  "data:image/png;base64,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";

@customElement("homematicip-local-schedule-card")
export class HomematicScheduleCard extends LitElement {
  @property({ attribute: false }) public hass!: HomeAssistant;
  @state() private _config?: ScheduleCardConfig;
  @state() private _scheduleData?: ScheduleDict;
  @state() private _activeEntityId?: string;
  @state() private _category?: DatapointCategory;
  @state() private _isLoading: boolean = false;
  private _loadingTimeoutId?: number;
  @state() private _translations: Translations = getTranslations("en");
  @state() private _editingEvent?: ScheduleEvent;
  @state() private _editingGroupNo?: number;
  @state() private _showEditor: boolean = false;

  public setConfig(config: ScheduleCardConfig): void {
    const entityIds: string[] = [];
    const addEntity = (entityId?: string) => {
      if (!entityId) return;
      const trimmed = entityId.trim();
      if (!trimmed) return;
      if (!entityIds.includes(trimmed)) {
        entityIds.push(trimmed);
      }
    };

    addEntity(config.entity);
    if (Array.isArray(config.entities)) {
      config.entities.forEach((entityId) => addEntity(entityId));
    }

    if (entityIds.length === 0) {
      throw new Error("You need to define at least one entity");
    }

    entityIds.sort((a, b) => a.localeCompare(b));

    const previousEntity = this._activeEntityId;
    const fallbackEntity = entityIds[0];
    const nextActiveEntity =
      previousEntity && entityIds.includes(previousEntity) ? previousEntity : fallbackEntity;

    this._config = {
      editable: true,
      hour_format: "24",
      time_step_minutes: 15,
      ...config,
      entity: fallbackEntity,
      entities: [...entityIds],
    };

    this._activeEntityId = nextActiveEntity;
    this._editingEvent = undefined;
    this._editingGroupNo = undefined;
    this._showEditor = false;

    // Set language from config or detect from Home Assistant
    this._updateLanguage();
  }

  private _updateLanguage(): void {
    let language = "en"; // Default to English

    // Priority 1: Explicit language setting in card config
    if (this._config?.language) {
      language = this._config.language;
    }
    // Priority 2: Home Assistant language
    else if (this.hass?.language) {
      language = this.hass.language;
    }
    // Priority 3: Home Assistant locale
    else if (this.hass?.locale?.language) {
      language = this.hass.locale.language;
    }

    this._translations = getTranslations(language);
  }

  protected shouldUpdate(changedProps: PropertyValues): boolean {
    if (changedProps.has("hass")) {
      const oldHass = changedProps.get("hass") as HomeAssistant | undefined;
      if (this.hass && oldHass) {
        // Check if language changed
        if (
          this.hass.language !== oldHass.language ||
          this.hass.locale?.language !== oldHass.locale?.language
        ) {
          this._updateLanguage();
        }

        // Check if entity state changed
        if (this._activeEntityId) {
          const oldState = oldHass.states?.[this._activeEntityId];
          const newState = this.hass.states?.[this._activeEntityId];
          if (oldState !== newState) {
            this._updateScheduleData();
          }
        }
      } else if (this.hass && !oldHass) {
        this._updateScheduleData();
      }
    }

    if (changedProps.has("_activeEntityId")) {
      this._updateScheduleData();
    }

    return true;
  }

  private _updateScheduleData(): void {
    if (!this._activeEntityId || !this.hass?.states) {
      this._scheduleData = undefined;
      this._category = undefined;
      return;
    }

    const entity = this.hass.states[this._activeEntityId];
    if (!entity) {
      this._scheduleData = undefined;
      this._category = undefined;
      return;
    }

    const attributes = entity.attributes as unknown as ScheduleEntityAttributes;
    this._scheduleData = attributes.schedule_data;
    this._category = attributes.datapoint_category;
  }

  private _getEntityName(entityId: string): string {
    const entity = this.hass?.states?.[entityId];
    return entity?.attributes?.friendly_name || entityId;
  }

  private _handleEntityChange(e: Event): void {
    const select = e.target as HTMLSelectElement;
    this._activeEntityId = select.value;
    this._closeEditor();
  }

  private _handleAddEvent(): void {
    const newEvent = createEmptyEvent(this._category);
    // Find next available group number
    const existingGroupNos = this._scheduleData
      ? Object.keys(this._scheduleData).map((k) => parseInt(k, 10))
      : [];
    const maxGroupNo = existingGroupNos.length > 0 ? Math.max(...existingGroupNos) : 0;
    this._editingGroupNo = maxGroupNo + 1;
    this._editingEvent = { ...newEvent };
    this._showEditor = true;
  }

  private _handleEditEvent(event: ScheduleEventUI): void {
    this._editingGroupNo = event.groupNo;
    this._editingEvent = { ...event };
    this._showEditor = true;
  }

  private _handleDeleteEvent(event: ScheduleEventUI): void {
    if (!confirm(this._translations.ui.confirmDelete || "Delete this event?")) {
      return;
    }

    const updatedSchedule = { ...this._scheduleData };
    delete updatedSchedule[event.groupNo.toString()];
    this._saveSchedule(updatedSchedule);
  }

  private _closeEditor(): void {
    this._showEditor = false;
    this._editingEvent = undefined;
    this._editingGroupNo = undefined;
  }

  private _handleSaveEvent(): void {
    if (!this._editingEvent || this._editingGroupNo === undefined) {
      return;
    }

    const errors = validateEvent(this._editingEvent, this._category);
    if (errors.length > 0) {
      alert(`Validation errors:\n${errors.map((e) => `- ${e.field}: ${e.message}`).join("\n")}`);
      return;
    }

    const updatedSchedule = {
      ...this._scheduleData,
      [this._editingGroupNo.toString()]: this._editingEvent,
    };

    this._saveSchedule(updatedSchedule);
    this._closeEditor();
  }

  private async _saveSchedule(scheduleDict: ScheduleDict): Promise<void> {
    if (!this._activeEntityId || !this.hass) {
      return;
    }

    const entityId = this._activeEntityId;
    this._startLoading();

    try {
      const backendFormat = convertToBackendFormat(scheduleDict);

      await this.hass.callService("homematicip_local", "set_schedule", {
        entity_id: entityId,
        schedule: backendFormat,
      });

      // Update local state optimistically
      this._scheduleData = scheduleDict;

      // For BidCos-RF/Wired devices, schedule reload after delay (CONFIG_PENDING doesn't work)
      if (this._needsManualReload(entityId)) {
        this._scheduleReloadDeviceConfig(entityId);
      }
    } catch (error) {
      alert(
        formatString(this._translations.errors.failedToSaveSchedule, {
          error: String(error),
        }),
      );
    } finally {
      this._stopLoading();
    }
  }

  private _startLoading(): void {
    this._isLoading = true;
    // Safety timeout to prevent infinite loading state
    this._loadingTimeoutId = window.setTimeout(() => {
      this._isLoading = false;
    }, 10000);
  }

  private _stopLoading(): void {
    this._isLoading = false;
    if (this._loadingTimeoutId !== undefined) {
      clearTimeout(this._loadingTimeoutId);
      this._loadingTimeoutId = undefined;
    }
  }

  private _exportSchedule(): void {
    if (!this._scheduleData || !this._activeEntityId) {
      return;
    }

    try {
      const entityName = this._getEntityName(this._activeEntityId);
      const exportData = {
        version: "1.0",
        entity: this._activeEntityId,
        category: this._category,
        exportDate: new Date().toISOString(),
        schedule: this._scheduleData,
      };

      const blob = new Blob([JSON.stringify(exportData, null, 2)], {
        type: "application/json",
      });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      const date = new Date().toISOString().split("T")[0];
      a.download = `schedule-${entityName.replace(/[^a-zA-Z0-9]/g, "_")}-${date}.json`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (error) {
      alert(
        formatString(this._translations.errors.failedToExport, {
          error: String(error),
        }),
      );
    }
  }

  private _importSchedule(): void {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = ".json";
    input.onchange = async (e: Event) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (!file) return;

      try {
        const text = await file.text();
        const data = JSON.parse(text);

        // Validate imported data
        if (!data.schedule || typeof data.schedule !== "object") {
          throw new Error(this._translations.errors.invalidImportData);
        }

        // Check if category matches (optional warning)
        if (data.category && data.category !== this._category) {
          const proceed = confirm(
            `Warning: The imported schedule is for a ${data.category} device, but the current entity is a ${this._category} device. Continue anyway?`,
          );
          if (!proceed) return;
        }

        await this._saveSchedule(data.schedule as ScheduleDict);
      } catch (error) {
        if (error instanceof SyntaxError) {
          alert(this._translations.errors.invalidImportFormat);
        } else {
          alert(
            formatString(this._translations.errors.failedToImport, {
              error: String(error),
            }),
          );
        }
      }
    };
    input.click();
  }

  /**
   * Check if the device needs manual reload after schedule changes.
   * BidCos-RF, BidCos-Wired, and VirtualDevices don't support CONFIG_PENDING
   * and need manual reload to apply schedule changes.
   */
  private _needsManualReload(entityId?: string): boolean {
    if (!entityId || !this.hass) return false;
    const entity = this.hass.states[entityId];
    if (!entity?.attributes?.interface_id) return false;
    const interfaceId = entity.attributes.interface_id as string;
    return (
      interfaceId.endsWith("BidCos-RF") ||
      interfaceId.endsWith("BidCos-Wired") ||
      interfaceId.endsWith("VirtualDevices")
    );
  }

  /**
   * Schedule a device config reload after 5 seconds delay.
   * This is needed for BidCos-RF devices where CONFIG_PENDING doesn't work reliably.
   */
  private _scheduleReloadDeviceConfig(entityId: string): void {
    if (!this.hass) return;
    const entity = this.hass.states[entityId];
    const address = entity?.attributes?.address as string | undefined;
    if (!address) {
      console.warn("Cannot reload device config: address attribute missing");
      return;
    }

    // Parse address format: "device_address:channel_no" (e.g., "000C9709AEF157:1")
    const parts = address.split(":");
    if (parts.length !== 2) {
      console.warn("Cannot reload device config: invalid address format", address);
      return;
    }

    const [deviceAddress] = parts;

    // Schedule reload after 5 seconds delay
    setTimeout(async () => {
      try {
        await this.hass.callService("homematicip_local", "reload_device_config", {
          device_address: deviceAddress,
        });
        console.info("Reloaded device config for BidCos device:", deviceAddress);
      } catch (err) {
        console.error("Failed to reload device config:", err);
      }
    }, 5000);
  }

  private _updateEditingEvent(updates: Partial<ScheduleEvent>): void {
    if (!this._editingEvent) return;
    this._editingEvent = { ...this._editingEvent, ...updates };
    this.requestUpdate();
  }

  private _groupEventsByWeekday(): Map<Weekday, ScheduleEventUI[]> {
    const grouped = new Map<Weekday, ScheduleEventUI[]>();

    if (!this._scheduleData) {
      return grouped;
    }

    const uiEvents = scheduleToUIEvents(this._scheduleData);

    for (const event of uiEvents) {
      for (const weekday of event.weekdayNames) {
        if (!grouped.has(weekday)) {
          grouped.set(weekday, []);
        }
        grouped.get(weekday)!.push(event);
      }
    }

    return grouped;
  }

  private _renderEntitySelector() {
    if (!this._config?.entities || this._config.entities.length <= 1) {
      return html``;
    }

    return html`
      <select
        class="entity-selector-dropdown"
        @change=${this._handleEntityChange}
        .value=${this._activeEntityId || ""}
      >
        ${this._config.entities.map(
          (entityId) => html`
            <option value=${entityId} ?selected=${entityId === this._activeEntityId}>
              ${this._getEntityName(entityId)}
            </option>
          `,
        )}
      </select>
    `;
  }

  private _renderHeaderControls() {
    const hasMultipleEntities = this._config?.entities && this._config.entities.length > 1;

    return html`
      <div class="header-controls">
        ${hasMultipleEntities ? this._renderEntitySelector() : ""}
        <button
          class="export-btn"
          @click=${this._exportSchedule}
          title="${this._translations.ui.exportTooltip}"
          ?disabled=${!this._scheduleData}
        >
          ⬇️
        </button>
        <button
          class="import-btn"
          @click=${this._importSchedule}
          title="${this._translations.ui.importTooltip}"
        >
          ⬆️
        </button>
      </div>
    `;
  }

  private _renderScheduleList() {
    if (!this._scheduleData) {
      return html`<div class="no-data">${this._translations.ui.loading}</div>`;
    }

    const groupedEvents = this._groupEventsByWeekday();

    if (groupedEvents.size === 0) {
      return html`
        <div class="no-data">
          <p>No schedule events configured</p>
          ${this._config?.editable
            ? html`<button @click=${this._handleAddEvent} class="add-button">
                ${this._translations.ui.addEvent || "Add Event"}
              </button>`
            : ""}
        </div>
      `;
    }

    return html`
      <div class="schedule-list">
        ${this._config?.editable
          ? html`<div class="toolbar">
              <button @click=${this._handleAddEvent} class="add-button">
                ${this._translations.ui.addEvent || "Add Event"}
              </button>
            </div>`
          : ""}
        ${WEEKDAYS.map((weekday) => {
          const events = groupedEvents.get(weekday) || [];
          if (events.length === 0) return html``;

          return html`
            <div class="weekday-section">
              <div class="weekday-header">
                ${this._translations.weekdays.long[
                  weekday.toLowerCase() as keyof typeof this._translations.weekdays.long
                ]}
              </div>
              <div class="events-table">
                <div class="events-header">
                  <div class="col-time">${this._translations.ui.time || "Time"}</div>
                  <div class="col-duration">${this._translations.ui.duration || "Duration"}</div>
                  <div class="col-level">${this._translations.ui.state || "State"}</div>
                  ${this._config?.editable ? html`<div class="col-actions"></div>` : ""}
                </div>
                ${repeat(
                  events,
                  (event) => event.groupNo,
                  (event) => this._renderEvent(event),
                )}
              </div>
            </div>
          `;
        })}
      </div>
    `;
  }

  private _renderEvent(event: ScheduleEventUI) {
    const levelText = formatLevel(event.LEVEL, this._category);
    const durationText =
      event.DURATION_BASE !== undefined && event.DURATION_FACTOR !== undefined
        ? formatDuration(event.DURATION_BASE, event.DURATION_FACTOR)
        : "-";

    return html`
      <div class="event-row ${event.isActive ? "active" : "inactive"}">
        <div class="col-time">${event.timeString}</div>
        <div class="col-duration">${durationText}</div>
        <div class="col-level">
          ${levelText}
          ${event.LEVEL_2 !== undefined
            ? html`<span class="level-2"
                >, ${this._translations.ui.slat}: ${Math.round(event.LEVEL_2 * 100)}%</span
              >`
            : ""}
        </div>
        ${this._config?.editable
          ? html`<div class="col-actions">
              <button @click=${() => this._handleEditEvent(event)} class="icon-button" title="Edit">
                ✏️
              </button>
              <button
                @click=${() => this._handleDeleteEvent(event)}
                class="icon-button"
                title="Delete"
              >
                🗑️
              </button>
            </div>`
          : ""}
      </div>
    `;
  }

  private _renderEditor() {
    if (!this._showEditor || !this._editingEvent) {
      return html``;
    }

    const isNewEvent = !this._scheduleData?.[this._editingGroupNo?.toString() || ""];

    return html`
      <div class="editor-overlay" @click=${this._closeEditor}>
        <div class="editor-dialog" @click=${(e: Event) => e.stopPropagation()}>
          <div class="editor-header">
            <h3>
              ${isNewEvent ? this._translations.ui.addEvent : this._translations.ui.editEvent}
            </h3>
            <button @click=${this._closeEditor} class="close-button">✕</button>
          </div>
          <div class="editor-content">
            ${this._renderTimeFields()} ${this._renderWeekdayFields()} ${this._renderLevelFields()}
            ${this._renderDurationFields()} ${this._renderChannelFields()}
          </div>
          <div class="editor-footer">
            <button @click=${this._closeEditor} class="button-secondary">
              ${this._translations.ui.cancel || "Cancel"}
            </button>
            <button @click=${this._handleSaveEvent} class="button-primary">
              ${this._translations.ui.save || "Save"}
            </button>
          </div>
        </div>
      </div>
    `;
  }

  private _renderTimeFields() {
    if (!this._editingEvent) return html``;

    const timeString = `${String(this._editingEvent.FIXED_HOUR).padStart(2, "0")}:${String(this._editingEvent.FIXED_MINUTE).padStart(2, "0")}`;

    return html`
      <div class="form-group">
        <label>${this._translations.ui.time || "Time"}</label>
        <input
          type="time"
          .value=${timeString}
          @change=${(e: Event) => {
            const target = e.target as HTMLInputElement;
            const parsed = parseTime(target.value);
            this._updateEditingEvent({
              FIXED_HOUR: parsed.hour,
              FIXED_MINUTE: parsed.minute,
            });
          }}
        />
      </div>
    `;
  }

  private _renderWeekdayFields() {
    if (!this._editingEvent) return html``;

    return html`
      <div class="form-group">
        <label>${this._translations.ui.weekdays || "Weekdays"}</label>
        <div class="weekday-checkboxes">
          ${WEEKDAYS.map((weekday) => {
            const bit = WeekdayBit[weekday];
            const isChecked = this._editingEvent!.WEEKDAY.includes(bit);
            return html`
              <label class="checkbox-label">
                <input
                  type="checkbox"
                  .checked=${isChecked}
                  @change=${(e: Event) => {
                    const checked = (e.target as HTMLInputElement).checked;
                    const currentWeekdays = [...this._editingEvent!.WEEKDAY];
                    if (checked && !currentWeekdays.includes(bit)) {
                      currentWeekdays.push(bit);
                    } else if (!checked) {
                      const index = currentWeekdays.indexOf(bit);
                      if (index > -1) currentWeekdays.splice(index, 1);
                    }
                    this._updateEditingEvent({ WEEKDAY: currentWeekdays });
                  }}
                />
                ${this._translations.weekdays.short[
                  weekday.toLowerCase() as keyof typeof this._translations.weekdays.short
                ]}
              </label>
            `;
          })}
        </div>
      </div>
    `;
  }

  private _renderLevelFields() {
    if (!this._editingEvent) return html``;

    const isBooleanLevel = isLevelBoolean(this._editingEvent.LEVEL, this._category);

    return html`
      <div class="form-group">
        <label>${this._translations.ui.state || "State"}</label>
        ${isBooleanLevel
          ? html`
              <select
                .value=${String(this._editingEvent.LEVEL)}
                @change=${(e: Event) => {
                  const value = parseInt((e.target as HTMLSelectElement).value, 10);
                  this._updateEditingEvent({ LEVEL: value });
                }}
              >
                <option value="0">Off</option>
                <option value="1">On</option>
              </select>
            `
          : html`
              <input
                type="range"
                min="0"
                max="100"
                .value=${String(Math.round(this._editingEvent.LEVEL * 100))}
                @input=${(e: Event) => {
                  const value = parseInt((e.target as HTMLInputElement).value, 10) / 100;
                  this._updateEditingEvent({ LEVEL: value });
                }}
              />
              <span>${Math.round(this._editingEvent.LEVEL * 100)}%</span>
            `}
      </div>
      ${this._category === "COVER"
        ? html`
            <div class="form-group">
              <label>${this._translations.ui.slat || "Slat Position"}</label>
              <input
                type="range"
                min="0"
                max="100"
                .value=${String(Math.round((this._editingEvent.LEVEL_2 || 0) * 100))}
                @input=${(e: Event) => {
                  const value = parseInt((e.target as HTMLInputElement).value, 10) / 100;
                  this._updateEditingEvent({ LEVEL_2: value });
                }}
              />
              <span>${Math.round((this._editingEvent.LEVEL_2 || 0) * 100)}%</span>
            </div>
          `
        : ""}
    `;
  }

  private _renderDurationFields() {
    if (!this._editingEvent) return html``;
    if (this._category !== "SWITCH" && this._category !== "LIGHT") return html``;

    return html`
      <div class="form-group">
        <label>${this._translations.ui.duration || "Duration"}</label>
        <input
          type="number"
          min="0"
          .value=${String(this._editingEvent.DURATION_FACTOR || 0)}
          @input=${(e: Event) => {
            const value = parseInt((e.target as HTMLInputElement).value, 10);
            this._updateEditingEvent({ DURATION_FACTOR: value });
          }}
        />
        <select
          .value=${String(this._editingEvent.DURATION_BASE || TimeBase.MS_100)}
          @change=${(e: Event) => {
            const value = parseInt((e.target as HTMLSelectElement).value, 10);
            this._updateEditingEvent({ DURATION_BASE: value as TimeBase });
          }}
        >
          <option value=${TimeBase.MS_100}>× 100ms</option>
          <option value=${TimeBase.SEC_1}>× 1s</option>
          <option value=${TimeBase.SEC_5}>× 5s</option>
          <option value=${TimeBase.SEC_10}>× 10s</option>
          <option value=${TimeBase.MIN_1}>× 1m</option>
          <option value=${TimeBase.MIN_5}>× 5m</option>
          <option value=${TimeBase.MIN_10}>× 10m</option>
          <option value=${TimeBase.HOUR_1}>× 1h</option>
        </select>
      </div>
    `;
  }

  private _renderChannelFields() {
    if (!this._editingEvent) return html``;

    return html`
      <div class="form-group">
        <label>${this._translations.ui.channels || "Target Channels"}</label>
        <input
          type="text"
          .value=${this._editingEvent.TARGET_CHANNELS.join(", ")}
          @input=${(e: Event) => {
            const value = (e.target as HTMLInputElement).value;
            const channels = value
              .split(",")
              .map((s) => parseInt(s.trim(), 10))
              .filter((n) => !isNaN(n));
            this._updateEditingEvent({ TARGET_CHANNELS: channels });
          }}
          placeholder="1, 2, 4, 8"
        />
      </div>
    `;
  }

  protected render() {
    if (!this._config || !this.hass) {
      return html``;
    }

    const entityState = this._activeEntityId ? this.hass.states?.[this._activeEntityId] : undefined;

    // Header shows: configured name > friendly_name > default
    const cardTitle =
      this._config.name || entityState?.attributes?.friendly_name || this._translations.ui.schedule;

    if (!entityState) {
      return html`
        <ha-card>
          <div class="card-header">
            <div class="header-left">
              <img src="${HOMEMATIC_LOGO}" alt="HomematicIP" class="card-logo" />
              <div class="card-title">${cardTitle}</div>
            </div>
          </div>
          <div class="card-content">
            <div class="error">
              ${formatString(this._translations.ui.entityNotFound, {
                entity: this._activeEntityId || this._translations.ui.schedule,
              })}
            </div>
          </div>
        </ha-card>
      `;
    }

    return html`
      <ha-card>
        <div class="card-header">
          <div class="header-left">
            <img src="${HOMEMATIC_LOGO}" alt="HomematicIP" class="card-logo" />
            <div class="card-title">${cardTitle}</div>
          </div>
        </div>
        ${this._renderHeaderControls()}
        <div class="card-content">
          ${this._scheduleData
            ? this._renderScheduleList()
            : html`<div class="loading">${this._translations.ui.loading}</div>`}
          ${this._config?.editable
            ? html`<div class="hint">${this._translations.ui.clickToEdit}</div>`
            : ""}
        </div>
        ${this._isLoading
          ? html`
              <div class="loading-overlay">
                <div class="loading-spinner"></div>
              </div>
            `
          : ""}
      </ha-card>
      ${this._renderEditor()}
    `;
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }

      ha-card {
        padding: 16px;
        position: relative;
      }

      .card-header {
        display: block;
        margin-bottom: 8px;
      }

      .header-left {
        display: flex;
        align-items: center;
        gap: 12px;
      }

      .card-title {
        font-size: 24px;
        font-weight: 400;
        color: var(--primary-text-color);
      }

      .header-controls {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        margin-bottom: 16px;
      }

      .entity-selector-dropdown {
        flex: 1;
        max-width: 300px;
        padding: 8px 12px;
        font-size: 14px;
        border: 1px solid var(--divider-color);
        border-radius: 4px;
        background-color: var(--card-background-color);
        color: var(--primary-text-color);
        cursor: pointer;
      }

      .export-btn,
      .import-btn {
        padding: 8px 12px;
        border: 1px solid var(--divider-color);
        border-radius: 4px;
        background-color: var(--card-background-color);
        color: var(--primary-text-color);
        font-size: 18px;
        cursor: pointer;
        transition: background-color 0.2s;
        line-height: 1;
      }

      .export-btn:hover,
      .import-btn:hover {
        background-color: var(--divider-color);
      }

      .export-btn:disabled {
        opacity: 0.3;
        cursor: not-allowed;
      }

      .export-btn:disabled:hover {
        background-color: var(--card-background-color);
      }

      .card-content {
        position: relative;
      }

      .loading {
        padding: 20px;
        text-align: center;
        color: var(--secondary-text-color);
      }

      .hint {
        margin-top: 12px;
        text-align: center;
        font-size: 12px;
        color: var(--secondary-text-color);
      }

      .no-data {
        text-align: center;
        padding: 32px;
        color: var(--secondary-text-color);
      }

      .toolbar {
        margin-bottom: 16px;
        display: flex;
        justify-content: flex-end;
      }

      .add-button {
        padding: 10px 16px;
        background-color: var(--primary-color);
        color: var(--text-primary-color);
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-size: 14px;
        font-weight: 500;
        transition: opacity 0.2s;
      }

      .add-button:hover {
        opacity: 0.9;
      }

      .schedule-list {
        display: flex;
        flex-direction: column;
        gap: 16px;
      }

      .weekday-section {
        border: 1px solid var(--divider-color);
        border-radius: 8px;
        overflow: hidden;
      }

      .weekday-header {
        background-color: var(--primary-color);
        color: var(--text-primary-color);
        padding: 8px 16px;
        font-weight: 500;
      }

      .events-table {
        display: flex;
        flex-direction: column;
      }

      .events-header {
        display: grid;
        grid-template-columns: 80px 100px 1fr 80px;
        gap: 12px;
        padding: 8px 16px;
        background-color: var(--secondary-background-color);
        font-weight: 500;
        font-size: 13px;
        color: var(--secondary-text-color);
        text-transform: uppercase;
      }

      .events-header.no-actions {
        grid-template-columns: 80px 100px 1fr;
      }

      .event-row {
        display: grid;
        grid-template-columns: 80px 100px 1fr 80px;
        gap: 12px;
        align-items: center;
        padding: 12px 16px;
        border-bottom: 1px solid var(--divider-color);
        transition: background-color 0.2s;
      }

      .event-row.no-actions {
        grid-template-columns: 80px 100px 1fr;
      }

      .event-row:last-child {
        border-bottom: none;
      }

      .event-row.inactive {
        opacity: 0.5;
      }

      .event-row:hover {
        background-color: rgba(var(--rgb-primary-color, 3, 169, 244), 0.05);
      }

      .col-time {
        font-weight: 500;
        font-family: monospace;
        color: var(--primary-text-color);
      }

      .col-duration {
        color: var(--secondary-text-color);
      }

      .col-level {
        color: var(--primary-text-color);
      }

      .col-level .level-2 {
        color: var(--secondary-text-color);
        font-size: 0.9em;
      }

      .col-actions {
        display: flex;
        gap: 8px;
        justify-content: flex-end;
      }

      .icon-button {
        background: none;
        border: none;
        cursor: pointer;
        padding: 4px;
        font-size: 16px;
        opacity: 0.7;
        transition: opacity 0.2s;
      }

      .icon-button:hover {
        opacity: 1;
      }

      /* Editor Overlay */
      .editor-overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000;
      }

      .editor-dialog {
        background-color: var(--card-background-color);
        border-radius: 8px;
        max-width: 500px;
        width: 90%;
        max-height: 80vh;
        overflow: auto;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
      }

      .editor-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 16px;
        border-bottom: 1px solid var(--divider-color);
      }

      .editor-header h3 {
        margin: 0;
        font-size: 20px;
        font-weight: 500;
        color: var(--primary-text-color);
      }

      .close-button {
        background: none;
        border: none;
        font-size: 24px;
        cursor: pointer;
        color: var(--secondary-text-color);
        padding: 0;
        width: 32px;
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        transition:
          background-color 0.2s,
          color 0.2s;
      }

      .close-button:hover {
        background-color: var(--divider-color);
        color: var(--primary-text-color);
      }

      .editor-content {
        padding: 16px;
        display: flex;
        flex-direction: column;
        gap: 16px;
      }

      .form-group {
        display: flex;
        flex-direction: column;
        gap: 8px;
      }

      .form-group label {
        font-weight: 500;
        font-size: 14px;
        color: var(--primary-text-color);
      }

      .form-group input[type="time"],
      .form-group input[type="text"],
      .form-group input[type="number"],
      .form-group select {
        padding: 8px;
        border: 1px solid var(--divider-color);
        border-radius: 4px;
        background-color: var(--card-background-color);
        color: var(--primary-text-color);
        font-size: 14px;
      }

      .form-group input[type="range"] {
        width: 100%;
      }

      .weekday-checkboxes {
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
      }

      .checkbox-label {
        display: flex;
        align-items: center;
        gap: 6px;
        cursor: pointer;
        font-size: 14px;
      }

      .checkbox-label input[type="checkbox"] {
        cursor: pointer;
      }

      .editor-footer {
        display: flex;
        justify-content: flex-end;
        gap: 12px;
        padding: 16px;
        border-top: 1px solid var(--divider-color);
      }

      .button-primary,
      .button-secondary {
        padding: 10px 24px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-size: 14px;
        font-weight: 500;
        transition: opacity 0.2s;
      }

      .button-primary {
        background-color: var(--primary-color);
        color: var(--text-primary-color);
      }

      .button-primary:hover {
        opacity: 0.9;
      }

      .button-secondary {
        background-color: var(--divider-color);
        color: var(--primary-text-color);
        border: none;
      }

      .button-secondary:hover {
        opacity: 0.9;
      }

      .button-danger {
        background-color: var(--error-color, #e74c3c);
        color: white;
        border: none;
      }

      .button-danger:hover {
        opacity: 0.9;
      }

      /* Validation Warnings */
      .validation-warnings {
        background-color: rgba(255, 152, 0, 0.1);
        border: 1px solid rgba(255, 152, 0, 0.3);
        border-radius: 4px;
        padding: 12px;
        margin: 12px 0;
      }

      .warnings-header {
        display: flex;
        align-items: center;
        gap: 8px;
        margin-bottom: 8px;
        font-weight: 500;
        color: var(--primary-text-color);
      }

      .warning-icon {
        font-size: 18px;
      }

      .warnings-title {
        font-size: 14px;
      }

      .warnings-list {
        margin: 0;
        padding-left: 28px;
        list-style-type: disc;
      }

      .warning-item {
        color: var(--secondary-text-color);
        font-size: 13px;
        line-height: 1.6;
        margin: 4px 0;
      }

      /* Loading Overlay */
      .loading-overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
        border-radius: 4px;
      }

      .loading-spinner {
        width: 50px;
        height: 50px;
        border: 5px solid rgba(255, 255, 255, 0.3);
        border-top-color: var(--primary-color);
        border-radius: 50%;
        animation: spin 1s linear infinite;
      }

      @keyframes spin {
        to {
          transform: rotate(360deg);
        }
      }

      .card-logo {
        height: 40px;
        width: auto;
        margin-right: 12px;
        object-fit: contain;
      }

      .error {
        padding: 20px;
        text-align: center;
        color: var(--error-color, #e74c3c);
      }

      /* Mobile Optimization */
      @media (max-width: 768px) {
        ha-card {
          padding: 12px;
        }

        .card-header {
          margin-bottom: 12px;
        }

        .header-left {
          justify-content: center;
        }

        .card-title {
          font-size: 20px;
        }

        .header-controls {
          flex-wrap: wrap;
          justify-content: center;
        }

        .entity-selector-dropdown {
          min-height: 44px;
          padding: 10px 16px;
          font-size: 16px;
          max-width: none;
          flex: 1 1 100%;
        }

        .export-btn,
        .import-btn {
          min-height: 44px;
          padding: 10px 16px;
          font-size: 16px;
        }

        .add-button {
          min-height: 44px;
          padding: 10px 16px;
          font-size: 16px;
          width: 100%;
        }

        .events-header {
          grid-template-columns: 60px 80px 1fr 60px;
          gap: 8px;
          padding: 8px 12px;
          font-size: 11px;
        }

        .event-row {
          grid-template-columns: 60px 80px 1fr 60px;
          gap: 8px;
          padding: 10px 12px;
        }

        .button-primary,
        .button-secondary {
          min-height: 44px;
          padding: 10px 16px;
        }
      }

      @media (max-width: 480px) {
        .events-header {
          grid-template-columns: 50px 60px 1fr 50px;
          gap: 6px;
          padding: 6px 8px;
          font-size: 10px;
        }

        .event-row {
          grid-template-columns: 50px 60px 1fr 50px;
          gap: 6px;
          padding: 8px;
        }

        .col-time {
          font-size: 12px;
        }

        .col-duration,
        .col-level {
          font-size: 12px;
        }
      }

      /* Touch device optimizations */
      @media (hover: none) and (pointer: coarse) {
        .icon-button {
          padding: 8px;
          font-size: 20px;
        }

        .event-row:hover {
          background-color: transparent;
        }

        .event-row:active {
          background-color: rgba(var(--rgb-primary-color, 3, 169, 244), 0.1);
        }
      }
    `;
  }

  public getCardSize(): number {
    return 4;
  }

  static getConfigElement() {
    return document.createElement("homematicip-local-schedule-card-editor");
  }

  static getStubConfig() {
    return {
      entity: "",
      editable: true,
      hour_format: "24",
    };
  }
}

// Extend window object for custom card registration
declare global {
  interface Window {
    customCards?: Array<{
      type: string;
      name: string;
      description: string;
    }>;
  }
}

// Register custom card
window.customCards = window.customCards || [];
window.customCards.push({
  type: "homematicip-local-schedule-card",
  name: "HomematicIP Local Scheduler Card",
  description:
    "A custom card for Homematic(IP) Local schedules (switch, valve, cover, light, lock)",
});
