# Tasks: Settings Functionality

## [x] Phase 1: UI Foundation
- [x] Add settings button to `index.html` (top-right circular button with gear icon).
- [x] Implement settings overlay (modal) with glassmorphism styling.
- [x] Build the settings form:
  - [x] Input fields for Yellow and Red thresholds.
  - [x] Switch/Checkbox for sound notifications.
  - [x] Close button.

## [x] Phase 2: Implementation of Logic
- [x] Extend `ConferenceTimer` constructor and state to handle custom thresholds and sound preference.
- [x] Update `loadLocalStorage` and `saveLocalStorage` to persist these new settings.
- [x] Implement Web Audio API synthesis for the "crisp metallic bell" sound.
- [x] Add logic to `updateUI()` to trigger 1 chime for Yellow and 3 chimes for Red when crossed.
- [x] Ensure progress bar segment widths are calculated based on these dynamic thresholds.

## [x] Phase 3: Polish and Validation
- [x] Add validation to prevent invalid threshold values (e.g., non-numeric or Red >= Yellow).
- [x] Test persistence by refreshing the page.
- [x] Manually verify sound triggers and visual transitions at the configured times.
