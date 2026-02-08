# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Breaking Changes

- Migrated to v1.0 Simple Schedule Format (requires homematicip_local with schedule API v1.0)
- Removed LOCK device support (now handled differently)
- Service calls use `device_address` instead of `entity_id`
- Export format version bumped to `2.0` with `schedule_domain` field

### Added

- Support for 8 condition types: fixed_time, astro, fixed_if_before_astro, astro_if_before_fixed, fixed_if_after_astro, astro_if_after_fixed, earliest, latest
- Condition editor with astro type (sunrise/sunset) and offset (-720 to 720 min)
- Duration string format editor (value + unit: ms/s/min/h)
- Ramp time editor for light devices
- Target channel checkboxes with names from `available_target_channels` entity attribute
- Entity compatibility validation (`schedule_type: "default"` and `schedule_api_version: "v1.0"`)
- Entity dropdown filters to only show compatible schedule entities
- Error message for incompatible entities (EN + DE)
- `max_entries` limit enforcement when adding events
- `schedule_domain` config option for manual domain override
- Domain labels in localization (EN + DE)
- Condition labels in localization (EN + DE)continue

### Changed

- Data format: bitwise flags replaced with string arrays (weekdays, target_channels)
- Duration: base+factor system replaced with duration strings ("4h", "10s", "5min", "500ms")
- Domain inference from `schedule_domain` entity attribute instead of `datapoint_category`
- Simplified validation (backend handles Pydantic validation)
- Updated dependencies:
  - `lit` 3.0.0 → 3.3.2
  - `tslib` 2.6.0 → 2.8.1
  - `typescript` 5.3.3 → 5.9.3
  - `eslint` 9.39.1 → 9.39.2
  - `typescript-eslint` 8.16.0 → 8.54.0
  - `prettier` 3.1.0 → 3.8.1
  - `rollup` 4.9.0 → 4.57.1
  - `husky` 9.0.0 → 9.1.7
  - `ts-jest` 29.1.1 → 29.4.6
- Improved release workflow with changelog extraction
- Aligned project setup with homematicip_local_climate_schedule_card

### Removed

- Bitwise weekday/channel operations (`WeekdayBit`, `WEEKDAY_TO_BIT`, `weekdayBitsToBitwise`, etc.)
- Numeric enums (`AstroType`, `ScheduleCondition`, `TimeBase`)
- `DatapointCategory` type (replaced by `ScheduleDomain`)
- `BackendScheduleDict` and format conversion functions
- Base+factor duration system (`calculateDuration`, `formatDuration`)
- LOCK device category

## [0.1.0] - 2025-11-13

### Added

- Initial release
- Visual schedule display for Homematic devices (switch, valve, cover, light, lock)
- Interactive schedule editor with time and action controls
- Support for multiple datapoint categories:
  - **SWITCH**: On/Off with optional duration
  - **LOCK**: Locked/Unlocked states
  - **LIGHT**: Dimming (0-100%) with duration and ramp time
  - **COVER**: Position and slat angle control
  - **VALVE**: Valve position (0-100%)
- Event-based scheduling with weekday selection
- Astronomical trigger support (sunrise/sunset with offset)
- Multiple entity support with dropdown selection
- Internationalization (i18n) with English and German translations
- Automatic language detection from Home Assistant settings
- Bitwise operations for weekday and channel handling
- Unit tests with Jest
- CI/CD pipeline with GitHub Actions
- HACS support
- Comprehensive documentation

### Features

- Display schedule events in a table view
- Edit schedule by clicking on events
- Add/remove schedule events
- Adjust timing, actions, and conditions
- Switch between different entities
- Integration with HomematicIP Local integration

### Technical

- Built with Lit 3.0 web components
- TypeScript 5.3+ for type safety
- Rollup for bundling
- ESLint 9 for code quality
- Jest for testing
- GitHub Actions for CI/CD

[Unreleased]: https://github.com/SukramJ/homematicip_local_schedule_card/compare/0.1.0...HEAD
[0.1.0]: https://github.com/SukramJ/homematicip_local_schedule_card/releases/tag/0.1.0
