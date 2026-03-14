## ADDED Requirements

### Requirement: Single HTML Timer with URL Parsing
The system MUST be a single `index.html` file that parses the `?t=` URL parameter.

#### Scenario: User visits timer with URL parameter
- **WHEN** the user visits `/?t=1m10s`
- **THEN** the timer initializes to 1 minute and 10 seconds.

### Requirement: Progressive Masking and Color Transitions
The timer text color and a static tricolor bottom progress bar MUST update based on remaining time.

#### Scenario: Normal countdown
- **WHEN** time remaining is > 1 minute
- **THEN** timer text is White.

#### Scenario: Warning Phase
- **WHEN** time remaining is between 15 seconds and 1 minute
- **THEN** timer text is Yellow.

#### Scenario: Critical Phase
- **WHEN** time remaining is < 15 seconds
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
