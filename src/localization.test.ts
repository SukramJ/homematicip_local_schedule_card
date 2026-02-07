import { getTranslations, formatString, getDomainLabel } from "./localization";

describe("localization", () => {
  describe("getTranslations", () => {
    it("should return English translations for 'en' language code", () => {
      const translations = getTranslations("en");
      expect(translations.weekdays.short.monday).toBe("Mo");
      expect(translations.weekdays.long.monday).toBe("Monday");
      expect(translations.ui.schedule).toBe("Schedule");
      expect(translations.errors.failedToChangeProfile).toBe("Failed to change profile: {error}");
    });

    it("should return German translations for 'de' language code", () => {
      const translations = getTranslations("de");
      expect(translations.weekdays.short.monday).toBe("Mo");
      expect(translations.weekdays.short.tuesday).toBe("Di");
      expect(translations.weekdays.long.monday).toBe("Montag");
      expect(translations.weekdays.long.tuesday).toBe("Dienstag");
      expect(translations.ui.schedule).toBe("Zeitplan");
      expect(translations.errors.failedToChangeProfile).toBe(
        "Fehler beim Wechseln des Profils: {error}",
      );
    });

    it("should have domain labels in English", () => {
      const translations = getTranslations("en");
      expect(translations.domains.switch).toBe("Switch");
      expect(translations.domains.light).toBe("Light");
      expect(translations.domains.cover).toBe("Cover");
      expect(translations.domains.valve).toBe("Valve");
    });

    it("should have domain labels in German", () => {
      const translations = getTranslations("de");
      expect(translations.domains.switch).toBe("Schalter");
      expect(translations.domains.light).toBe("Licht");
      expect(translations.domains.cover).toBe("Rollladen");
      expect(translations.domains.valve).toBe("Ventil");
    });

    it("should have condition labels in English", () => {
      const translations = getTranslations("en");
      expect(translations.conditions.fixed_time).toBe("Fixed Time");
      expect(translations.conditions.astro).toBe("Astro");
      expect(translations.conditions.fixed_if_before_astro).toBe("Fixed if before Astro");
      expect(translations.conditions.astro_if_before_fixed).toBe("Astro if before Fixed");
      expect(translations.conditions.fixed_if_after_astro).toBe("Fixed if after Astro");
      expect(translations.conditions.astro_if_after_fixed).toBe("Astro if after Fixed");
      expect(translations.conditions.earliest).toBe("Earliest");
      expect(translations.conditions.latest).toBe("Latest");
    });

    it("should have condition labels in German", () => {
      const translations = getTranslations("de");
      expect(translations.conditions.fixed_time).toBe("Feste Zeit");
      expect(translations.conditions.astro).toBe("Astro");
      expect(translations.conditions.earliest).toBe("Frühester");
      expect(translations.conditions.latest).toBe("Spätester");
    });

    it("should have new UI labels in English", () => {
      const translations = getTranslations("en");
      expect(translations.ui.levelOn).toBe("On");
      expect(translations.ui.levelOff).toBe("Off");
      expect(translations.ui.rampTime).toBe("Ramp Time");
      expect(translations.ui.condition).toBe("Condition");
      expect(translations.ui.astroSunrise).toBe("Sunrise");
      expect(translations.ui.astroSunset).toBe("Sunset");
      expect(translations.ui.astroOffset).toBe("Astro Offset (min)");
      expect(translations.ui.maxEntriesReached).toBe("Maximum number of entries reached ({max})");
    });

    it("should have new UI labels in German", () => {
      const translations = getTranslations("de");
      expect(translations.ui.levelOn).toBe("Ein");
      expect(translations.ui.levelOff).toBe("Aus");
      expect(translations.ui.rampTime).toBe("Rampenzeit");
      expect(translations.ui.condition).toBe("Bedingung");
      expect(translations.ui.astroSunrise).toBe("Sonnenaufgang");
      expect(translations.ui.astroSunset).toBe("Sonnenuntergang");
    });

    it("should have incompatibleEntity error in English", () => {
      const translations = getTranslations("en");
      expect(translations.errors.incompatibleEntity).toContain("schedule_type");
      expect(translations.errors.incompatibleEntity).toContain("schedule_api_version");
    });

    it("should have incompatibleEntity error in German", () => {
      const translations = getTranslations("de");
      expect(translations.errors.incompatibleEntity).toContain("schedule_type");
      expect(translations.errors.incompatibleEntity).toContain("schedule_api_version");
    });

    it("should normalize language codes with region (e.g., 'en-US' -> 'en')", () => {
      const translations = getTranslations("en-US");
      expect(translations.ui.schedule).toBe("Schedule");
    });

    it("should normalize language codes with region (e.g., 'de-DE' -> 'de')", () => {
      const translations = getTranslations("de-DE");
      expect(translations.ui.schedule).toBe("Zeitplan");
    });

    it("should handle uppercase language codes", () => {
      const translations = getTranslations("EN");
      expect(translations.ui.schedule).toBe("Schedule");
    });

    it("should handle mixed case language codes", () => {
      const translations = getTranslations("De");
      expect(translations.ui.schedule).toBe("Zeitplan");
    });

    it("should fallback to English for unsupported language codes", () => {
      const translations = getTranslations("fr");
      expect(translations.ui.schedule).toBe("Schedule");
    });

    it("should have level-related UI labels", () => {
      const translations = getTranslations("en");
      expect(translations.ui.level).toBe("Level");
      expect(translations.ui.slat).toBe("Slat Position");
    });
  });

  describe("formatString", () => {
    it("should replace single placeholder", () => {
      const result = formatString("Hello {name}", { name: "World" });
      expect(result).toBe("Hello World");
    });

    it("should replace multiple placeholders", () => {
      const result = formatString("Failed to change profile: {error}", { error: "Timeout" });
      expect(result).toBe("Failed to change profile: Timeout");
    });

    it("should replace multiple different placeholders", () => {
      const result = formatString("Block {block}: Level out of range ({min}-{max})", {
        block: "1",
        min: "0",
        max: "1",
      });
      expect(result).toBe("Block 1: Level out of range (0-1)");
    });

    it("should handle template without placeholders", () => {
      const result = formatString("No placeholders here", {});
      expect(result).toBe("No placeholders here");
    });

    it("should handle empty params", () => {
      const result = formatString("Hello {name}", {});
      expect(result).toBe("Hello {name}");
    });
  });

  describe("getDomainLabel", () => {
    it("should return English domain labels", () => {
      expect(getDomainLabel("switch", "en")).toBe("Switch");
      expect(getDomainLabel("light", "en")).toBe("Light");
      expect(getDomainLabel("cover", "en")).toBe("Cover");
      expect(getDomainLabel("valve", "en")).toBe("Valve");
    });

    it("should return German domain labels", () => {
      expect(getDomainLabel("switch", "de")).toBe("Schalter");
      expect(getDomainLabel("light", "de")).toBe("Licht");
      expect(getDomainLabel("cover", "de")).toBe("Rollladen");
      expect(getDomainLabel("valve", "de")).toBe("Ventil");
    });

    it("should return empty string for undefined domain", () => {
      expect(getDomainLabel(undefined, "en")).toBe("");
    });
  });
});
