## ADDED Requirements

### Requirement: Single HTML Timer with URL Parsing
The system MUST be a single `index.html` file that parses the `?t=` URL parameter.

#### Scenario: User visits timer with URL parameter
- **WHEN** the user visits `/?t=1m10s`
- **THEN** the timer initializes to 1 minute and 10 seconds.

### Requirement: User-Defined Stages and Color Transitions
The timer text color and the proportional bottom progress bar MUST update based on user-defined thresholds for three stages: **Start**, **Yellow**, and **Red**.

#### Scenario: Normal countdown (White)
- **WHEN** time remaining is above the user-defined **Yellow** threshold
- **THEN** timer text is White.

#### Scenario: Warning countdown (Yellow)
- **WHEN** time remaining is between the **Yellow** and **Red** thresholds
- **THEN** timer text is Yellow.

#### Scenario: Critical countdown (Red)
- **WHEN** time remaining is below the **Red** threshold
- **THEN** timer text is Red.

### Requirement: Max Time Limit
The timer MUST NOT exceed 99:99 (5999 seconds).

#### Scenario: Adding time beyond limit
- **WHEN** the user adds time causing the total to exceed 5999 seconds
- **THEN** the time is capped at 99:99.

### Requirement: End of Timer Effects
When the timer hits zero, it MUST alert the user visually.

#### Scenario: Timer reaches zero
- **WHEN** the countdown reaches `00:00`
- **THEN** it switches to a `+MM:SS` format and the display flashes red (once per second).

### Requirement: Inline Editing
The user MUST be able to click the timer digits to edit the time directly.

#### Scenario: Editing timer inline
- **WHEN** the user clicks the timer text
- **THEN** an input field appears allowing them to directly type a new time (e.g., `10:00`).

### Requirement: Side Controls & Icons
Buttons MUST be circular graphic icons with clear `alt` labels.
- **Left Side**: `+` and `-`.
- **Right Side**: `Start/Pause` and `Reset`.

### Requirement: Reset Visibility
The Reset button MUST be hidden (`display: none`) when the timer is in its initial state (at the start duration and not running).

### Requirement: Stage-based Multi-Alert Settings
The system MUST provide a settings interface to configure thresholds and audio alerts for multiple stages.
- **Stages**: Start, Yellow, Red, Timeout.
- **Configurable Thresholds**: Yellow and Red thresholds must be editable and validated (Red < Yellow).
- **Audio Alerts**: Users can select from "Call Bell" or "Gong" synthesized sounds or "N/A" (mute).
- **Repetition**: Alerts can be configured to repeat 1, 2, or 3 times.
- **Testing**: A "Test" button MUST allow the user to preview the sound/repeat configuration for each stage.

#### Scenario: Configuring alerts
- **WHEN** the user selects "Gong" and "Repeat 2" for the Red stage and clicks "Test"
- **THEN** the system synthesizes and plays two gong sounds in sequence.

### Requirement: Persistence
The user's settings and current timer state MUST persist across browser sessions.

#### Scenario: Reloading the page
- **WHEN** the user reloads the page
- **THEN** the custom thresholds and alert choices are restored from `localStorage`.
