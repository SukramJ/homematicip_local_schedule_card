import {
  WEEKDAYS,
  Weekday,
  ScheduleDomain,
  DOMAIN_FIELD_CONFIG,
  CONDITION_TYPES,
  DURATION_UNITS,
} from "./types";

describe("Types", () => {
  describe("WEEKDAYS", () => {
    it("should contain all 7 weekdays", () => {
      expect(WEEKDAYS).toHaveLength(7);
      expect(WEEKDAYS).toEqual([
        "MONDAY",
        "TUESDAY",
        "WEDNESDAY",
        "THURSDAY",
        "FRIDAY",
        "SATURDAY",
        "SUNDAY",
      ]);
    });
  });

  describe("Weekday type", () => {
    it("should accept valid weekday values", () => {
      const monday: Weekday = "MONDAY";
      const tuesday: Weekday = "TUESDAY";

      expect(monday).toBe("MONDAY");
      expect(tuesday).toBe("TUESDAY");
    });
  });

  describe("ScheduleDomain type", () => {
    it("should accept valid domain values", () => {
      const switchDomain: ScheduleDomain = "switch";
      const lightDomain: ScheduleDomain = "light";
      const coverDomain: ScheduleDomain = "cover";
      const valveDomain: ScheduleDomain = "valve";

      expect(switchDomain).toBe("switch");
      expect(lightDomain).toBe("light");
      expect(coverDomain).toBe("cover");
      expect(valveDomain).toBe("valve");
    });
  });

  describe("DOMAIN_FIELD_CONFIG", () => {
    it("should have config for all 4 domains", () => {
      expect(Object.keys(DOMAIN_FIELD_CONFIG)).toHaveLength(4);
      expect(DOMAIN_FIELD_CONFIG).toHaveProperty("switch");
      expect(DOMAIN_FIELD_CONFIG).toHaveProperty("light");
      expect(DOMAIN_FIELD_CONFIG).toHaveProperty("cover");
      expect(DOMAIN_FIELD_CONFIG).toHaveProperty("valve");
    });

    it("should have correct switch config", () => {
      expect(DOMAIN_FIELD_CONFIG.switch).toEqual({
        levelType: "binary",
        hasLevel2: false,
        hasDuration: true,
        hasRampTime: false,
      });
    });

    it("should have correct light config", () => {
      expect(DOMAIN_FIELD_CONFIG.light).toEqual({
        levelType: "percentage",
        hasLevel2: false,
        hasDuration: true,
        hasRampTime: true,
      });
    });

    it("should have correct cover config", () => {
      expect(DOMAIN_FIELD_CONFIG.cover).toEqual({
        levelType: "percentage",
        hasLevel2: true,
        hasDuration: false,
        hasRampTime: false,
      });
    });

    it("should have correct valve config", () => {
      expect(DOMAIN_FIELD_CONFIG.valve).toEqual({
        levelType: "percentage",
        hasLevel2: false,
        hasDuration: true,
        hasRampTime: false,
      });
    });
  });

  describe("CONDITION_TYPES", () => {
    it("should contain all 8 condition types", () => {
      expect(CONDITION_TYPES).toHaveLength(8);
      expect(CONDITION_TYPES).toContain("fixed_time");
      expect(CONDITION_TYPES).toContain("astro");
      expect(CONDITION_TYPES).toContain("fixed_if_before_astro");
      expect(CONDITION_TYPES).toContain("astro_if_before_fixed");
      expect(CONDITION_TYPES).toContain("fixed_if_after_astro");
      expect(CONDITION_TYPES).toContain("astro_if_after_fixed");
      expect(CONDITION_TYPES).toContain("earliest");
      expect(CONDITION_TYPES).toContain("latest");
    });
  });

  describe("DURATION_UNITS", () => {
    it("should contain all 4 duration units", () => {
      expect(DURATION_UNITS).toHaveLength(4);
      expect(DURATION_UNITS).toContain("ms");
      expect(DURATION_UNITS).toContain("s");
      expect(DURATION_UNITS).toContain("min");
      expect(DURATION_UNITS).toContain("h");
    });
  });
});
