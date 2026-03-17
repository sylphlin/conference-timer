# Design: Settings Bug Fixes

## Bug 1: Disabled Repeat Dropdown Styling

### CSS Addition
```css
.settings-table select:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}
```
The existing `updateSettingsUI()` JS method already sets `disabled = true` on the Repeat `<select>` and Test `<button>` when sound is `none`. This CSS makes the disabled state visually obvious.

## Bug 2: Title Case Headers

### CSS Removal
Removed `text-transform: uppercase` from `.settings-table th`. HTML labels already use title case.

## Bugs 3 & 4: Split MM/SS Time Inputs

### HTML Structure
Each time input (Settings + main timer) is now two `<input maxlength="2">` wrapped in a container:

```html
<!-- Settings modal pattern -->
<div class="time-input-group">
  <input type="text" id="setting-{stage}-mm" maxlength="2" onfocus="this.select()">
  <span class="time-colon">:</span>
  <input type="text" id="setting-{stage}-ss" maxlength="2" onfocus="this.select()">
</div>

<!-- Main timer pattern -->
<div id="timer-input-wrapper">
  <input class="timer-split-input" id="timer-input-mm" maxlength="2" onfocus="this.select()">
  <span class="timer-split-colon">:</span>
  <input class="timer-split-input" id="timer-input-ss" maxlength="2" onfocus="this.select()">
</div>
```

### JS Helpers
- `splitMs(ms)` → `{ mm: '05', ss: '30' }` — replaces `formatInputTime` for populating split fields.
- `autoAdvanceTime(input, nextId)` — auto-focuses SS after 2-digit MM entry.
- `handleTimerBlur` — delayed blur check prevents `exitEditMode()` when tabbing between MM/SS.

### Validation
Error styling applied to `.time-input-group` container (not individual inputs) via `setting-{stage}-time-group` IDs.
