import {
  WEEKDAYS,
  WEEKDAY_LABELS,
  WEEKDAY_LABELS_DE,
  WEEKDAY_TO_BIT,
  Weekday,
  WeekdayBit,
  DatapointCategory,
  AstroType,
  ScheduleCondition,
  TimeBase,
  TIME_BASE_LABELS,
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

  describe("WEEKDAY_LABELS", () => {
    it("should have labels for all weekdays", () => {
      expect(Object.keys(WEEKDAY_LABELS)).toHaveLength(7);
      expect(WEEKDAY_LABELS.MONDAY).toBe("Mo");
      expect(WEEKDAY_LABELS.TUESDAY).toBe("Tu");
      expect(WEEKDAY_LABELS.WEDNESDAY).toBe("We");
      expect(WEEKDAY_LABELS.THURSDAY).toBe("Th");
      expect(WEEKDAY_LABELS.FRIDAY).toBe("Fr");
      expect(WEEKDAY_LABELS.SATURDAY).toBe("Sa");
      expect(WEEKDAY_LABELS.SUNDAY).toBe("Su");
    });
  });

  describe("WEEKDAY_LABELS_DE", () => {
    it("should have German labels for all weekdays", () => {
      expect(Object.keys(WEEKDAY_LABELS_DE)).toHaveLength(7);
      expect(WEEKDAY_LABELS_DE.MONDAY).toBe("Mo");
      expect(WEEKDAY_LABELS_DE.TUESDAY).toBe("Di");
      expect(WEEKDAY_LABELS_DE.WEDNESDAY).toBe("Mi");
      expect(WEEKDAY_LABELS_DE.THURSDAY).toBe("Do");
      expect(WEEKDAY_LABELS_DE.FRIDAY).toBe("Fr");
      expect(WEEKDAY_LABELS_DE.SATURDAY).toBe("Sa");
      expect(WEEKDAY_LABELS_DE.SUNDAY).toBe("So");
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

  describe("DatapointCategory type", () => {
    it("should accept valid category values", () => {
      const switchCat: DatapointCategory = "SWITCH";
      const lockCat: DatapointCategory = "LOCK";
      const lightCat: DatapointCategory = "LIGHT";
      const coverCat: DatapointCategory = "COVER";
      const valveCat: DatapointCategory = "VALVE";

      expect(switchCat).toBe("SWITCH");
      expect(lockCat).toBe("LOCK");
      expect(lightCat).toBe("LIGHT");
      expect(coverCat).toBe("COVER");
      expect(valveCat).toBe("VALVE");
    });
  });

  describe("WeekdayBit enum", () => {
    it("should have correct bit values", () => {
      expect(WeekdayBit.SUNDAY).toBe(1);
      expect(WeekdayBit.MONDAY).toBe(2);
      expect(WeekdayBit.TUESDAY).toBe(4);
      expect(WeekdayBit.WEDNESDAY).toBe(8);
      expect(WeekdayBit.THURSDAY).toBe(16);
      expect(WeekdayBit.FRIDAY).toBe(32);
      expect(WeekdayBit.SATURDAY).toBe(64);
    });

    it("should allow bitwise operations", () => {
      // All weekdays: 1 + 2 + 4 + 8 + 16 + 32 + 64 = 127
      const allWeekdays =
        WeekdayBit.SUNDAY |
        WeekdayBit.MONDAY |
        WeekdayBit.TUESDAY |
        WeekdayBit.WEDNESDAY |
        WeekdayBit.THURSDAY |
        WeekdayBit.FRIDAY |
        WeekdayBit.SATURDAY;
      expect(allWeekdays).toBe(127);

      // Monday + Wednesday + Friday: 2 + 8 + 32 = 42
      const mwf = WeekdayBit.MONDAY | WeekdayBit.WEDNESDAY | WeekdayBit.FRIDAY;
      expect(mwf).toBe(42);
    });
  });

  describe("WEEKDAY_TO_BIT", () => {
    it("should map weekday names to bit values", () => {
      expect(WEEKDAY_TO_BIT.SUNDAY).toBe(WeekdayBit.SUNDAY);
      expect(WEEKDAY_TO_BIT.MONDAY).toBe(WeekdayBit.MONDAY);
      expect(WEEKDAY_TO_BIT.TUESDAY).toBe(WeekdayBit.TUESDAY);
      expect(WEEKDAY_TO_BIT.WEDNESDAY).toBe(WeekdayBit.WEDNESDAY);
      expect(WEEKDAY_TO_BIT.THURSDAY).toBe(WeekdayBit.THURSDAY);
      expect(WEEKDAY_TO_BIT.FRIDAY).toBe(WeekdayBit.FRIDAY);
      expect(WEEKDAY_TO_BIT.SATURDAY).toBe(WeekdayBit.SATURDAY);
    });
  });

  describe("AstroType enum", () => {
    it("should have correct values", () => {
      expect(AstroType.SUNRISE).toBe(0);
      expect(AstroType.SUNSET).toBe(1);
    });
  });

  describe("ScheduleCondition enum", () => {
    it("should have correct values", () => {
      expect(ScheduleCondition.FIXED_TIME).toBe(0);
      expect(ScheduleCondition.ASTRO).toBe(1);
    });
  });

  describe("TimeBase enum", () => {
    it("should have correct values", () => {
      expect(TimeBase.MS_100).toBe(0);
      expect(TimeBase.SEC_1).toBe(1);
      expect(TimeBase.SEC_5).toBe(2);
      expect(TimeBase.SEC_10).toBe(3);
      expect(TimeBase.MIN_1).toBe(4);
      expect(TimeBase.MIN_5).toBe(5);
      expect(TimeBase.MIN_10).toBe(6);
      expect(TimeBase.HOUR_1).toBe(7);
    });
  });

  describe("TIME_BASE_LABELS", () => {
    it("should have labels for all time bases", () => {
      expect(TIME_BASE_LABELS[TimeBase.MS_100]).toBe("100ms");
      expect(TIME_BASE_LABELS[TimeBase.SEC_1]).toBe("1s");
      expect(TIME_BASE_LABELS[TimeBase.SEC_5]).toBe("5s");
      expect(TIME_BASE_LABELS[TimeBase.SEC_10]).toBe("10s");
      expect(TIME_BASE_LABELS[TimeBase.MIN_1]).toBe("1m");
      expect(TIME_BASE_LABELS[TimeBase.MIN_5]).toBe("5m");
      expect(TIME_BASE_LABELS[TimeBase.MIN_10]).toBe("10m");
      expect(TIME_BASE_LABELS[TimeBase.HOUR_1]).toBe("1h");
    });

    it("should have all 8 time base labels", () => {
      expect(Object.keys(TIME_BASE_LABELS)).toHaveLength(8);
    });
  });
});
