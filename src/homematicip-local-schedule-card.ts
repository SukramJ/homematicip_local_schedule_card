import { LitElement, html, css, PropertyValues } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { repeat } from "lit/directives/repeat.js";
import {
  ScheduleCardConfig,
  HomeAssistant,
  ScheduleEntityAttributes,
  ScheduleDict,
  ScheduleEventUI,
  DatapointCategory,
  WEEKDAYS,
  Weekday,
} from "./types";
import { scheduleToUIEvents, formatLevel } from "./utils";
import { getTranslations, Translations } from "./localization";

@customElement("homematicip-local-schedule-card")
export class HomematicScheduleCard extends LitElement {
  @property({ attribute: false }) public hass!: HomeAssistant;
  @state() private _config?: ScheduleCardConfig;
  @state() private _scheduleData?: ScheduleDict;
  @state() private _activeEntityId?: string;
  @state() private _category?: DatapointCategory;
  @state() private _isLoading: boolean = false;
  @state() private _translations: Translations = getTranslations("en");
  @state() private _editingEventId?: string;

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
    this._editingEventId = undefined;

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
      <div class="entity-selector">
        <select @change=${this._handleEntityChange} .value=${this._activeEntityId || ""}>
          ${this._config.entities.map(
            (entityId) => html`
              <option value=${entityId} ?selected=${entityId === this._activeEntityId}>
                ${this._getEntityName(entityId)}
              </option>
            `,
          )}
        </select>
      </div>
    `;
  }

  private _renderScheduleList() {
    if (!this._scheduleData) {
      return html`<div class="no-data">${this._translations.ui.loading}</div>`;
    }

    const groupedEvents = this._groupEventsByWeekday();

    if (groupedEvents.size === 0) {
      return html`<div class="no-data">No schedule events configured</div>`;
    }

    return html`
      <div class="schedule-list">
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
              <div class="events">
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

    return html`
      <div class="event-item ${event.isActive ? "active" : "inactive"}">
        <div class="event-time">${event.timeString}</div>
        <div class="event-level">${levelText}</div>
        ${event.LEVEL_2 !== undefined
          ? html`<div class="event-level-2">
              ${this._translations.ui.slat}: ${Math.round(event.LEVEL_2 * 100)}%
            </div>`
          : ""}
      </div>
    `;
  }

  protected render() {
    if (!this._config) {
      return html``;
    }

    const cardTitle = this._config.name || this._getEntityName(this._activeEntityId || "");

    return html`
      <ha-card>
        <div class="card-header">
          <div class="card-title">${cardTitle}</div>
        </div>
        <div class="card-content">
          ${this._renderEntitySelector()} ${this._renderScheduleList()}
        </div>
      </ha-card>
    `;
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }

      ha-card {
        padding: 16px;
      }

      .card-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 16px;
      }

      .card-title {
        font-size: 24px;
        font-weight: 500;
      }

      .entity-selector {
        margin-bottom: 16px;
      }

      .entity-selector select {
        width: 100%;
        padding: 8px;
        font-size: 14px;
        border: 1px solid var(--divider-color);
        border-radius: 4px;
        background: var(--card-background-color);
        color: var(--primary-text-color);
      }

      .no-data {
        text-align: center;
        padding: 32px;
        color: var(--secondary-text-color);
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
        background: var(--primary-color);
        color: var(--text-primary-color);
        padding: 8px 16px;
        font-weight: 500;
      }

      .events {
        display: flex;
        flex-direction: column;
      }

      .event-item {
        display: flex;
        align-items: center;
        padding: 12px 16px;
        border-bottom: 1px solid var(--divider-color);
        gap: 16px;
      }

      .event-item:last-child {
        border-bottom: none;
      }

      .event-item.inactive {
        opacity: 0.5;
      }

      .event-time {
        font-weight: 500;
        min-width: 60px;
      }

      .event-level {
        flex: 1;
      }

      .event-level-2 {
        color: var(--secondary-text-color);
        font-size: 0.9em;
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
  name: "HomematicIP Local Schedule Card",
  description:
    "A custom card for Homematic(IP) Local schedules (switch, valve, cover, light, lock)",
});
