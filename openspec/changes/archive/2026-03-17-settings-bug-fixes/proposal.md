# Proposal: Settings Page Bug Fixes

## Goal
Fix four UX issues in the Settings page and inline timer editing to improve usability and visual consistency.

## Why
The current Settings interface has several rough edges that hurt the user experience — disabled states aren't enforced, header casing is inconsistent, time editing is cumbersome because MM and SS are combined in a single input field, and auto-select on focus is missing for the inline timer editor.

### Problems

1. **Repeat dropdown stays enabled when Alert Sound is N/A** — Users can pointlessly change the repeat count even though no sound will play. The Repeat dropdown and Test button should be disabled when the sound is set to N/A.

2. **Table headers are fully uppercased** — Column headers like `STAGE`, `TIME`, `ALERT SOUND` etc. use `text-transform: uppercase`, which doesn't match the desired title-casing style (e.g. "Stage", "Time").

3. **Time input is a single `MM:SS` field** — Editing requires the user to type both minutes and seconds (including the colon) in one field. Splitting MM and SS into two separate inputs (styled to look like one) makes it more natural — similar to how system clock inputs work.

4. **No auto-select on timer digit click in edit mode** — When the user enters edit mode (main timer or settings), clicking into the MM or SS portion should auto-select the text for quick overwrite. This should apply consistently to both the main timer inline editor and the settings modal time fields.

### Proposed Solution

1. **Disable Repeat when sound is N/A**: The existing `updateSettingsUI()` method already disables the Repeat dropdown and Test button when the sound is `none`. **Confirmed: this is already implemented correctly at line 846–854 in `index.html`.** Need to re-verify whether the bug actually exists or investigate further.

2. **Remove `text-transform: uppercase`** from `.settings-table th`, replace with capitalized labels in the HTML.

3. **Split time inputs into paired MM / SS fields**: Replace each `<input type="text" maxlength="5">` with two `<input type="text" maxlength="2">` separated by a colon divider, wrapped in a container styled to look like a single input.

4. **Auto-select on focus for split time inputs**: Add `onfocus="this.select()"` to each mini-input in the settings modal. For the main timer, the existing `enterEditMode` already does `setSelectionRange` — verify it actually triggers on click/tab.

## Non-goals
- Changing any timer logic, alert system, or persistence format.
- Redesigning the Settings modal layout.
