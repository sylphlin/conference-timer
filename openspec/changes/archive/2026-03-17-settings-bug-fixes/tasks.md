# Tasks: Settings Bug Fixes

## [x] Phase 1: CSS Fixes
- [x] Add `.settings-table select:disabled` styling (opacity 0.3, not-allowed cursor).
- [x] Remove `text-transform: uppercase` from `.settings-table th`.

## [x] Phase 2: Split Time Inputs
- [x] Add `.time-input-group` CSS (shared container, transparent inner inputs, colon separator).
- [x] Add `#timer-input-wrapper` CSS (large split inputs matching timer display font).
- [x] Replace Settings HTML: 3 rows × 2 inputs (Start, Yellow, Red MM/SS).
- [x] Replace main timer HTML: `#timer-input` → `#timer-input-wrapper` with MM/SS.
- [x] Update `openSettings()` to populate split fields via `splitMs()`.
- [x] Update `validateSettings()` to read from split fields, apply error to group container.
- [x] Update `saveSettings()` to read from split fields.
- [x] Update `enterEditMode()` to show wrapper, focus MM or SS based on click position.
- [x] Update `exitEditMode()` to read both fields, delayed blur to avoid premature exit.
- [x] Add `autoAdvanceTime()` helper and `onfocus="this.select()"` for auto-select.

## [x] Phase 3: Verification
- [x] Static code review: no stale references to old IDs.
- [x] Confirmed all JS methods updated (`constructor`, `bindEvents`, `openSettings`, `validateSettings`, `saveSettings`, `enterEditMode`, `exitEditMode`).
