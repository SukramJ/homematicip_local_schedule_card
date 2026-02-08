/**
 * Utility functions for Homematic(IP) Local Schedule Card
 * v1.0 Simple Schedule Format
 */

import {
  SimpleScheduleEntry,
  SimpleSchedule,
  SimpleScheduleEntryUI,
  ScheduleDomain,
  ScheduleEntityAttributes,
  ConditionType,
  AstroType,
  DOMAIN_FIELD_CONFIG,
  DurationUnit,
} from "./types";

/**
 * Check if a schedule entry is active (has weekdays and target channels)
 */
export function isEntryActive(entry: SimpleScheduleEntry): boolean {
  return Boolean(
    Array.isArray(entry.weekdays) &&
    entry.weekdays.length > 0 &&
    Array.isArray(entry.target_channels) &&
    entry.target_channels.length > 0,
  );
}

/**
 * Convert SimpleSchedule to sorted list of UI entries
 */
export function scheduleToUIEntries(schedule: SimpleSchedule): SimpleScheduleEntryUI[] {
  const entries: SimpleScheduleEntryUI[] = [];

  for (const [groupNo, entry] of Object.entries(schedule)) {
    entries.push({
      ...entry,
      groupNo,
      isActive: isEntryActive(entry),
    });
  }

  // Sort by time string
  entries.sort((a, b) => a.time.localeCompare(b.time));

  return entries;
}

/**
 * Create an empty/default schedule entry
 */
export function createEmptyEntry(domain?: ScheduleDomain): SimpleScheduleEntry {
  const base: SimpleScheduleEntry = {
    weekdays: [],
    time: "00:00",
    condition: "fixed_time",
    astro_type: null,
    astro_offset_minutes: 0,
    target_channels: [],
    level: 0,
    level_2: null,
    duration: null,
    ramp_time: null,
  };

  if (domain === "cover") {
    base.level_2 = 0;
  }

  return base;
}

// --- Duration String Handling ---

const DURATION_REGEX = /^(\d+(?:\.\d+)?)\s*(ms|s|min|h)$/;

/**
 * Parse a duration string like "4h", "10s", "5min", "500ms"
 */
export function parseDuration(duration: string): { value: number; unit: DurationUnit } | null {
  const match = duration.trim().match(DURATION_REGEX);
  if (!match) return null;
  return { value: parseFloat(match[1]), unit: match[2] as DurationUnit };
}

/**
 * Build a duration string from value and unit
 */
export function buildDuration(value: number, unit: DurationUnit): string {
  return `${value}${unit}`;
}

/**
 * Format duration for display
 */
export function formatDurationDisplay(duration: string | null): string {
  if (!duration) return "-";
  const parsed = parseDuration(duration);
  if (!parsed) return duration;

  const unitLabels: Record<DurationUnit, string> = {
    ms: "ms",
    s: "s",
    min: "min",
    h: "h",
  };

  return `${parsed.value}${unitLabels[parsed.unit]}`;
}

/**
 * Validate a duration string
 */
export function isValidDuration(duration: string): boolean {
  return DURATION_REGEX.test(duration.trim());
}

// --- Time Helpers ---

/**
 * Format time from hour/minute to string (HH:MM)
 */
export function formatTime(hour: number, minute: number): string {
  return `${hour.toString().padStart(2, "0")}:${minute.toString().padStart(2, "0")}`;
}

/**
 * Parse time string (HH:MM) to hour and minute
 */
export function parseTime(timeStr: string): { hour: number; minute: number } {
  const parts = timeStr.split(":");
  if (parts.length !== 2) {
    throw new Error(`Invalid time format: ${timeStr}`);
  }
  const hour = parseInt(parts[0], 10);
  const minute = parseInt(parts[1], 10);

  if (isNaN(hour) || isNaN(minute) || hour < 0 || hour > 23 || minute < 0 || minute > 59) {
    throw new Error(`Invalid time values: ${timeStr}`);
  }

  return { hour, minute };
}

/**
 * Validate a time string (HH:MM)
 */
export function isValidTime(time: string): boolean {
  try {
    parseTime(time);
    return true;
  } catch {
    return false;
  }
}

// --- Condition Helpers ---

/**
 * Check if a condition type involves astro settings
 */
export function isAstroCondition(condition: ConditionType): boolean {
  return condition !== "fixed_time";
}

// --- Validation ---

export interface ValidationError {
  field: string;
  message: string;
}

/**
 * Validate a schedule entry
 */
export function validateEntry(
  entry: SimpleScheduleEntry,
  domain?: ScheduleDomain,
): ValidationError[] {
  const errors: ValidationError[] = [];

  // Validate time
  if (!isValidTime(entry.time)) {
    errors.push({ field: "time", message: "Time must be in HH:MM format (00:00-23:59)" });
  }

  // Validate weekdays
  if (!entry.weekdays || entry.weekdays.length === 0) {
    errors.push({ field: "weekdays", message: "At least one weekday must be selected" });
  }

  // Validate target channels
  if (!entry.target_channels || entry.target_channels.length === 0) {
    errors.push({
      field: "target_channels",
      message: "At least one target channel must be selected",
    });
  }

  // Validate level
  const config = domain ? DOMAIN_FIELD_CONFIG[domain] : undefined;
  if (config?.levelType === "binary") {
    if (entry.level !== 0 && entry.level !== 1) {
      errors.push({ field: "level", message: "Level must be 0 or 1 for switch" });
    }
  } else {
    if (entry.level < 0 || entry.level > 1) {
      errors.push({ field: "level", message: "Level must be between 0.0 and 1.0" });
    }
  }

  // Validate level_2 for cover
  if (domain === "cover" && entry.level_2 !== null) {
    if (entry.level_2 < 0 || entry.level_2 > 1) {
      errors.push({ field: "level_2", message: "Slat position must be between 0.0 and 1.0" });
    }
  }

  // Validate astro offset
  if (isAstroCondition(entry.condition)) {
    if (entry.astro_offset_minutes < -720 || entry.astro_offset_minutes > 720) {
      errors.push({
        field: "astro_offset_minutes",
        message: "Astro offset must be between -720 and 720 minutes",
      });
    }
  }

  // Validate duration
  if (entry.duration !== null && !isValidDuration(entry.duration)) {
    errors.push({ field: "duration", message: "Invalid duration format" });
  }

  // Validate ramp_time
  if (entry.ramp_time !== null && !isValidDuration(entry.ramp_time)) {
    errors.push({ field: "ramp_time", message: "Invalid ramp time format" });
  }

  return errors;
}

// --- Device Address ---

/**
 * Extract device address from entity address attribute.
 * Address format: "device_address:channel_no" (e.g., "000C9709AEF157:1")
 * Returns just the device_address part.
 */
export function getDeviceAddress(address?: string): string | undefined {
  if (!address) return undefined;
  const parts = address.split(":");
  if (parts.length !== 2) return undefined;
  return parts[0];
}

// --- Level Formatting ---

/**
 * Format level for display based on domain
 */
export function formatLevel(level: number, domain?: ScheduleDomain): string {
  const config = domain ? DOMAIN_FIELD_CONFIG[domain] : undefined;
  if (config?.levelType === "binary") {
    return level === 0 ? "Off" : "On";
  }
  const percentage = level * 100;
  return `${Math.round(percentage)}%`;
}

/**
 * Format astro time for display
 */
export function formatAstroTime(astroType: AstroType, offsetMinutes: number): string {
  const baseLabel = astroType === "sunrise" ? "Sunrise" : "Sunset";

  if (offsetMinutes === 0) {
    return baseLabel;
  } else if (offsetMinutes > 0) {
    return `${baseLabel} +${offsetMinutes}m`;
  } else {
    return `${baseLabel} ${offsetMinutes}m`;
  }
}

// --- Backend Serialization ---

/**
 * Strip null values and default optional fields from a schedule entry
 * for the backend Pydantic model (extra="forbid").
 */
export function entryToBackend(entry: SimpleScheduleEntry): Record<string, unknown> {
  const result: Record<string, unknown> = {
    weekdays: entry.weekdays,
    time: entry.time,
    target_channels: entry.target_channels,
    level: entry.level,
  };

  // Only include optional fields when they have non-default values
  if (entry.condition !== "fixed_time") {
    result.condition = entry.condition;
  }
  if (entry.astro_type !== null) {
    result.astro_type = entry.astro_type;
  }
  if (entry.astro_offset_minutes !== 0) {
    result.astro_offset_minutes = entry.astro_offset_minutes;
  }
  if (entry.level_2 !== null) {
    result.level_2 = entry.level_2;
  }
  if (entry.duration !== null) {
    result.duration = entry.duration;
  }
  if (entry.ramp_time !== null) {
    result.ramp_time = entry.ramp_time;
  }

  return result;
}

/**
 * Convert a full SimpleSchedule to the backend format,
 * stripping null/default values from each entry.
 */
export function scheduleToBackend(
  schedule: SimpleSchedule,
): Record<string, Record<string, unknown>> {
  const result: Record<string, Record<string, unknown>> = {};
  for (const [key, entry] of Object.entries(schedule)) {
    result[key] = entryToBackend(entry);
  }
  return result;
}

// --- Entity Validation ---

/**
 * Check if entity attributes indicate a valid v1.0 non-climate schedule entity.
 * Requires schedule_type === "default" and schedule_api_version present.
 */
export function isValidScheduleEntity(attributes: ScheduleEntityAttributes): boolean {
  return attributes.schedule_type === "default" && attributes.schedule_api_version === "v1.0";
}
