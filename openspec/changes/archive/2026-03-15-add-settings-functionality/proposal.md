# Proposal: Add Settings Functionality

## Goal
Enhance the conference timer with a settings feature to allow users to customize Yellow/Red thresholds and toggle notification sounds.

## Why
Different users may have different requirements for when they want to be warned about time. Notification sounds provide additional feedback for speakers who might not be looking directly at the screen.

### Problem
Currently, the timer has hardcoded thresholds (1 minute for Yellow, 15 seconds for Red). Users cannot adjust these to fit different session lengths (e.g., a 5-minute lightning talk needs different warning times than a 60-minute keynote).

### Proposed Solution
Add a settings modal that persists in local storage:
1. **Dynamic Thresholds**:
   - Custom field for the Yellow zone threshold.
   - Custom field for the Red zone threshold.
   - Thresholds should be validated to ensure Red < Yellow < Total Duration.
2. **Audio Notifications**:
   - Toggle to enable/disable metallic chime alerts.
   - A "crisp metallic bell" sound effect.
   - **Yellow Alert**: 1 chime when the timer enters the Yellow zone.
   - **Red Alert**: 3 chimes when the timer enters the Red zone.
5. **Persistence**: Settings must be saved to `localStorage` and persist across sessions.

## Non-goals
- Adding custom sound file uploads.
- Volume control (defaults to system volume).
- Changing the core countdown or overtime logic.
