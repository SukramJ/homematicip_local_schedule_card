/**
 * Type definitions for Homematic(IP) Local Schedule Card
 * Based on aiohomematic DefaultWeekProfile implementation
 */

export interface HomematicScheduleCardConfig {
  type: string;
  entity?: string;
  entities?: string[];
  name?: string;
  editable?: boolean;
  hour_format?: "12" | "24";
  language?: "en" | "de";
  time_step_minutes?: number;
}

// Alias for backwards compatibility
export type ScheduleCardConfig = HomematicScheduleCardConfig;

/**
 * Datapoint categories for different entity types
 */
export type DatapointCategory = "SWITCH" | "LOCK" | "LIGHT" | "COVER" | "VALVE";

/**
 * Weekday bit values (bitwise flags)
 * SUNDAY=1, MONDAY=2, TUESDAY=4, WEDNESDAY=8, THURSDAY=16, FRIDAY=32, SATURDAY=64
 */
export enum WeekdayBit {
  SUNDAY = 1,
  MONDAY = 2,
  TUESDAY = 4,
  WEDNESDAY = 8,
  THURSDAY = 16,
  FRIDAY = 32,
  SATURDAY = 64,
}

/**
 * Weekday names (for UI)
 */
export const WEEKDAYS = [
  "MONDAY",
  "TUESDAY",
  "WEDNESDAY",
  "THURSDAY",
  "FRIDAY",
  "SATURDAY",
  "SUNDAY",
] as const;

export type Weekday = (typeof WEEKDAYS)[number];

export const WEEKDAY_LABELS: Record<Weekday, string> = {
  MONDAY: "Mo",
  TUESDAY: "Tu",
  WEDNESDAY: "We",
  THURSDAY: "Th",
  FRIDAY: "Fr",
  SATURDAY: "Sa",
  SUNDAY: "Su",
};

export const WEEKDAY_LABELS_DE: Record<Weekday, string> = {
  MONDAY: "Mo",
  TUESDAY: "Di",
  WEDNESDAY: "Mi",
  THURSDAY: "Do",
  FRIDAY: "Fr",
  SATURDAY: "Sa",
  SUNDAY: "So",
};

/**
 * Map weekday names to bit values
 */
export const WEEKDAY_TO_BIT: Record<Weekday, WeekdayBit> = {
  SUNDAY: WeekdayBit.SUNDAY,
  MONDAY: WeekdayBit.MONDAY,
  TUESDAY: WeekdayBit.TUESDAY,
  WEDNESDAY: WeekdayBit.WEDNESDAY,
  THURSDAY: WeekdayBit.THURSDAY,
  FRIDAY: WeekdayBit.FRIDAY,
  SATURDAY: WeekdayBit.SATURDAY,
};

/**
 * Astro event types
 */
export enum AstroType {
  SUNRISE = 0,
  SUNSET = 1,
}

/**
 * Schedule trigger conditions
 */
export enum ScheduleCondition {
  FIXED_TIME = 0,
  ASTRO = 1,
}

/**
 * Time base units for duration/ramp time
 */
export enum TimeBase {
  MS_100 = 0, // 100 milliseconds
  SEC_1 = 1, // 1 second
  SEC_5 = 2, // 5 seconds
  SEC_10 = 3, // 10 seconds
  MIN_1 = 4, // 1 minute
  MIN_5 = 5, // 5 minutes
  MIN_10 = 6, // 10 minutes
  HOUR_1 = 7, // 1 hour
}

/**
 * Time base labels for UI
 */
export const TIME_BASE_LABELS: Record<TimeBase, string> = {
  [TimeBase.MS_100]: "100ms",
  [TimeBase.SEC_1]: "1s",
  [TimeBase.SEC_5]: "5s",
  [TimeBase.SEC_10]: "10s",
  [TimeBase.MIN_1]: "1m",
  [TimeBase.MIN_5]: "5m",
  [TimeBase.MIN_10]: "10m",
  [TimeBase.HOUR_1]: "1h",
};

/**
 * Schedule event definition
 * Each event defines when and how a device should be controlled
 */
export interface ScheduleEvent {
  // Timing (when to execute)
  FIXED_HOUR: number; // 0-23
  FIXED_MINUTE: number; // 0-59
  WEEKDAY: WeekdayBit[]; // List of weekday bits [1, 2, 4, ...]

  // Targets (what to control)
  TARGET_CHANNELS: number[]; // List of channel bits [1, 2, 4, ...]

  // Action (what to do)
  LEVEL: number; // 0/1 for SWITCH/LOCK, 0.0-1.0 for LIGHT/COVER/VALVE
  LEVEL_2?: number; // Optional, only for COVER (slat position)

  // Condition (how to trigger)
  CONDITION: ScheduleCondition; // FIXED_TIME or ASTRO
  ASTRO_TYPE: AstroType; // SUNRISE or SUNSET (if CONDITION=ASTRO)
  ASTRO_OFFSET: number; // Offset in minutes from astro event

  // Duration (for SWITCH/LIGHT)
  DURATION_BASE?: TimeBase;
  DURATION_FACTOR?: number;

  // Ramp time (only for LIGHT)
  RAMP_TIME_BASE?: TimeBase;
  RAMP_TIME_FACTOR?: number;
}

/**
 * Schedule dictionary with event groups
 * Keys are group numbers (1, 2, 3, ...)
 * Frontend uses string keys, backend uses integer keys
 */
export interface ScheduleDict {
  [groupNo: string]: ScheduleEvent;
}

/**
 * Backend representation with integer keys
 */
export type BackendScheduleDict = Record<number, ScheduleEvent>;

/**
 * Entity attributes from Home Assistant
 */
export interface ScheduleEntityAttributes {
  schedule_data: ScheduleDict;
  friendly_name?: string;
  datapoint_category?: DatapointCategory;
}

export interface HassEntity {
  entity_id: string;
  state: string;
  attributes: ScheduleEntityAttributes;
  last_changed: string;
  last_updated: string;
}

export interface HomeAssistant {
  states: { [entity_id: string]: HassEntity };
  callService: (
    domain: string,
    service: string,
    serviceData?: Record<string, unknown>,
  ) => Promise<void>;
  callWS: (message: Record<string, unknown>) => Promise<unknown>;
  language?: string;
  locale?: { language: string };
}

/**
 * Helper type for UI representation of an event
 */
export interface ScheduleEventUI extends ScheduleEvent {
  groupNo: number;
  weekdayNames: Weekday[]; // Decoded from WEEKDAY bits
  timeString: string; // Formatted time (HH:MM)
  isActive: boolean; // Has weekdays and channels
}
