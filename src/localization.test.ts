import { getTranslations, formatString, getCategoryLabel } from "./localization";

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

    it("should have category labels in English", () => {
      const translations = getTranslations("en");
      expect(translations.categories.SWITCH).toBe("Switch");
      expect(translations.categories.LOCK).toBe("Lock");
      expect(translations.categories.LIGHT).toBe("Light");
      expect(translations.categories.COVER).toBe("Cover");
      expect(translations.categories.VALVE).toBe("Valve");
    });

    it("should have category labels in German", () => {
      const translations = getTranslations("de");
      expect(translations.categories.SWITCH).toBe("Schalter");
      expect(translations.categories.LOCK).toBe("Schloss");
      expect(translations.categories.LIGHT).toBe("Licht");
      expect(translations.categories.COVER).toBe("Rollladen");
      expect(translations.categories.VALVE).toBe("Ventil");
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

  describe("getCategoryLabel", () => {
    it("should return English category labels", () => {
      expect(getCategoryLabel("SWITCH", "en")).toBe("Switch");
      expect(getCategoryLabel("LOCK", "en")).toBe("Lock");
      expect(getCategoryLabel("LIGHT", "en")).toBe("Light");
      expect(getCategoryLabel("COVER", "en")).toBe("Cover");
      expect(getCategoryLabel("VALVE", "en")).toBe("Valve");
    });

    it("should return German category labels", () => {
      expect(getCategoryLabel("SWITCH", "de")).toBe("Schalter");
      expect(getCategoryLabel("LOCK", "de")).toBe("Schloss");
      expect(getCategoryLabel("LIGHT", "de")).toBe("Licht");
      expect(getCategoryLabel("COVER", "de")).toBe("Rollladen");
      expect(getCategoryLabel("VALVE", "de")).toBe("Ventil");
    });

    it("should return empty string for undefined category", () => {
      expect(getCategoryLabel(undefined, "en")).toBe("");
    });
  });
});
