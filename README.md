# HomematicIP Local Schedule Card

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A custom Lovelace card for Home Assistant to display and edit Homematic(IP) Local schedules for switches, lights, covers, and valves.

## Features

- 📅 **Event-Based Scheduling**: Manage individual schedule events with precise control
- 🎯 **Multi-Device Support**: Works with switches, lights, covers, and valves
- ⏰ **Flexible Timing**: Fixed time or astronomical events (sunrise/sunset) with 8 condition types
- 🎨 **Category-Specific UI**: Adapted interface for different device types
- 🌍 **Integration Ready**: Seamlessly works with HomematicIP Local integration v2.0.0+
- 🌐 **Bilingual**: English and German translations
- ✏️ **Visual Configuration**: No YAML editing required

## Supported Device Types

| Domain   | Description                                    |
| -------- | ---------------------------------------------- |
| `switch` | On/Off devices                                 |
| `light`  | Lights with dimming and ramp time support      |
| `cover`  | Blinds/shutters with position and slat control |
| `valve`  | Heating valves                                 |

## Installation

### HACS (Recommended)

1. Make sure [HACS](https://hacs.xyz/) is installed
2. In HACS, go to "Frontend"
3. Click the three-dot menu and select "Custom repositories"
4. Add this repository URL: `https://github.com/SukramJ/homematicip_local_schedule_card`
5. Select category "Lovelace"
6. Click "Install"
7. Restart Home Assistant

### Manual Installation

1. Download the `homematicip-local-schedule-card.js` file from the latest release
2. Copy it to your `config/www` folder
3. Add the resource to your Lovelace dashboard:
   - Go to Settings → Dashboards → Resources
   - Click "Add Resource"
   - URL: `/local/homematicip-local-schedule-card.js`
   - Resource type: JavaScript Module

## Configuration

Add the card to your dashboard:

```yaml
type: custom:homematicip-local-schedule-card
entity: switch.your_device
name: Living Room Schedule
editable: true
```

### Multiple Entities

```yaml
type: custom:homematicip-local-schedule-card
entities:
  - switch.living_room
  - switch.bedroom
  - switch.office
```

### Configuration Options

| Option              | Type     | Default     | Description                            |
| ------------------- | -------- | ----------- | -------------------------------------- |
| `entity`            | string   | —           | Single entity ID                       |
| `entities`          | string[] | —           | List of entity IDs shown in a dropdown |
| `name`              | string   | Entity name | Custom name for the card               |
| `editable`          | boolean  | `true`      | Enable/disable schedule editing        |
| `hour_format`       | string   | `24`        | Time format: `12` or `24` hour         |
| `language`          | string   | Auto        | Language: `en` or `de`                 |
| `time_step_minutes` | number   | `15`        | Time picker step size in minutes       |

## Requirements

- Home Assistant 2023.1 or newer
- [HomematicIP Local](https://github.com/SukramJ/homematicip_local) integration installed and configured
- Homematic device with schedule support

## Development

Development happens in the [HomematicIP Local Frontend](https://github.com/SukramJ/homematicip-local-frontend) monorepo. This repository is a distribution-only HACS channel.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Related Projects

- [HomematicIP Local Integration](https://github.com/SukramJ/homematicip_local) - Home Assistant custom integration
- [HomematicIP Local Climate Schedule Card](https://github.com/SukramJ/homematicip_local_climate_schedule_card) - For thermostat schedules
- [HomematicIP Local Frontend](https://github.com/SukramJ/homematicip-local-frontend) - Development monorepo

## Support

For issues and questions, please use the [GitHub Issues](https://github.com/SukramJ/homematicip_local_schedule_card/issues) page.
