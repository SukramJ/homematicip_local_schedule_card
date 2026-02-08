/**
 * Type definitions for Homematic(IP) Local Schedule Card
 * v1.0 Simple Schedule Format
 */

export interface HomematicScheduleCardConfig {
  type: string;
  entity?: string;
  entities?: string[];
  name?: string;
  editable?: boolean;
  hour_format?: "12" | "24";
  language?: "en" | "de";
  schedule_domain?: ScheduleDomain;
}

// Alias for backwards compatibility
export type ScheduleCardConfig = HomematicScheduleCardConfig;

/**
 * Schedule domains (lowercase, matching Pydantic context)
 */
export type ScheduleDomain = "switch" | "light" | "cover" | "valve";

/**
 * Weekday names
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

/**
 * Condition types (from Pydantic model)
 */
export type ConditionType =
  | "fixed_time"
  | "astro"
  | "fixed_if_before_astro"
  | "astro_if_before_fixed"
  | "fixed_if_after_astro"
  | "astro_if_after_fixed"
  | "earliest"
  | "latest";

export const CONDITION_TYPES: ConditionType[] = [
  "fixed_time",
  "astro",
  "fixed_if_before_astro",
  "astro_if_before_fixed",
  "fixed_if_after_astro",
  "astro_if_after_fixed",
  "earliest",
  "latest",
];

/**
 * Astro event types
 */
export type AstroType = "sunrise" | "sunset";

/**
 * SimpleScheduleEntry - central data type (Pydantic model)
 */
export interface SimpleScheduleEntry {
  weekdays: Weekday[];
  time: string; // "HH:MM"
  condition: ConditionType;
  astro_type: AstroType | null;
  astro_offset_minutes: number; // -720 to 720
  target_channels: string[]; // ["1_1", "2_1"]
  level: number; // 0.0-1.0
  level_2: number | null; // only COVER
  duration: string | null; // "4h", "10s", "5min", "500ms"
  ramp_time: string | null; // only LIGHT
}

/**
 * Schedule = Dict with string keys "1"-"24"
 */
export type SimpleSchedule = Record<string, SimpleScheduleEntry>;

/**
 * Schedule data wrapper as returned by entity attribute
 */
export interface ScheduleData {
  entries: SimpleSchedule;
}

/**
 * UI extension for schedule entries
 */
export interface SimpleScheduleEntryUI extends SimpleScheduleEntry {
  groupNo: string;
  isActive: boolean;
}

/**
 * Target channel metadata (from WeekProfileSensor)
 */
export interface TargetChannelInfo {
  channel_no: number;
  channel_address: string;
  name: string;
  channel_type: string;
}

/**
 * Domain-specific field configuration
 */
export interface DomainFieldConfig {
  levelType: "binary" | "percentage";
  hasLevel2: boolean;
  hasDuration: boolean;
  hasRampTime: boolean;
}

export const DOMAIN_FIELD_CONFIG: Record<ScheduleDomain, DomainFieldConfig> = {
  switch: {
    levelType: "binary",
    hasLevel2: false,
    hasDuration: true,
    hasRampTime: false,
  },
  light: {
    levelType: "percentage",
    hasLevel2: false,
    hasDuration: true,
    hasRampTime: true,
  },
  cover: {
    levelType: "percentage",
    hasLevel2: true,
    hasDuration: false,
    hasRampTime: false,
  },
  valve: {
    levelType: "percentage",
    hasLevel2: false,
    hasDuration: true,
    hasRampTime: false,
  },
};

/**
 * Duration units
 */
export const DURATION_UNITS = ["ms", "s", "min", "h"] as const;
export type DurationUnit = (typeof DURATION_UNITS)[number];

/**
 * Entity attributes (WeekProfileSensor)
 */
export interface ScheduleEntityAttributes {
  schedule_data?: ScheduleData;
  schedule_api_version?: string; // "v1.0"
  schedule_domain?: ScheduleDomain; // "switch", "light", "cover", "valve"
  max_entries?: number; // e.g., 24
  available_target_channels?: Record<string, TargetChannelInfo>;
  schedule_type?: string; // "default" for non-climate schedules
  schedule_channel_address?: string;
  friendly_name?: string;
  address?: string; // "HED56782988:3"
  interface_id?: string;
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
