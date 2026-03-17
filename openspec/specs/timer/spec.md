# Specification: Professional Conference Timer

## 1. Core Architecture

### Requirement: Single-File Portability
The system MUST be a single `index.html` file containing all HTML, CSS, and JavaScript. It must run in any modern web browser without an external server or dependencies.

### Requirement: URL-Based Initialization
The system MUST parse the `?t=` URL parameter (e.g., `?t=15m30s`) to set the initial countdown duration.

#### Scenario: Deep linking to a specific duration
- **WHEN** a user visits the application with `?t=10m`
- **THEN** the timer initializes and displays `10:00` as the starting duration.

---

## 2. Visual Feedback & Display

### Requirement: Proportional Progress Bar
The application MUST display a tricolor bottom progress bar (Green, Yellow, Red) that segments dynamically based on user-defined thresholds.
- **Green**: Remaining time above the Yellow threshold.
- **Yellow**: Remaining time between the Yellow and Red thresholds.
- **Red**: Remaining time below the Red threshold.
- **Masking**: A dark mask MUST progress from left to right as time elapses, obscuring the color segments.

### Requirement: High-Visibility Timer Text
The timer digits MUST use a massive, high-contrast font that adapts to the screen size. The text color MUST transition in sync with the progress bar segments:
- **White**: During the Green segment.
- **Yellow**: During the Yellow segment.
- **Red**: During the Red segment.

---

## 3. Interaction & Configuration

### Requirement: Inline Time Editing
The user MUST be able to click directly on the timer digits to edit the duration.
- **Interaction**: Clicking triggers an input field.
- **Validation**: Supports `MM:SS` format and caps duration at `99:99`.
- **Visual Feedback (Edit Mode)**:
  - When editing, a neon white breathing glow frame MUST appear around the input area.
  - The frame MUST have a significant border-radius (`2.5rem`) and a subtle pulsing animation (`timer-edit-pulse`).
  - The digits and colon MUST remain centered and aligned with their non-editing positions to prevent layout shifts.
  - The breathing effect MUST be limited to the glow and border-color brightness, keeping the text and frame dimensions static.

### Requirement: Professional Settings Modal
A dedicated settings modal MUST be available via a gear icon to configure advanced behaviors:
- **Thresholds**: Editable fields for "Yellow" and "Red" stage starts (validated such that Red < Yellow).
- **Start Time**: Modifying the "Start" threshold updates the initial timer duration.
- **Audio Profile**: Selectable sound types per stage.

### Requirement: Persistence
All user configurations (thresholds, sounds, repeats) MUST be persisted in `localStorage`.

---

## 4. Audio Alert System

### Requirement: Stage-Based Synthesized Alerts
The system MUST trigger synthesized audio alerts at four specific stages: **Start**, **Yellow**, **Red**, and **Timeout**.

### Requirement: Premium Sound Profiles
Audio MUST be synthesized using the Web Audio API (no external files):
- **Bell**: A crisp Service Desk style sound using additive synthesis (1100Hz base with harmonics).
- **Gong**: A deep Orchestral Strike using a combination of impact noise, FM vibration, and low-frequency wash.

### Requirement: Repetition & Spacing
Alerts MUST support configurable repetition (1, 2, or 3 times) with intelligent spacing:
- **Bell spacing**: 0.8 seconds.
- **Gong spacing**: 4.5 seconds (to prevent chaotic overlap).

---

## 5. Exit Conditions & Limits

### Requirement: Overtime Behavior
When the timer reaches `00:00`, it MUST switch to an overtime mode.
- **Display**: Shows `+MM:SS` count-up.
- **Alert**: Triggers the "Timeout" stage alert.
- **Visuals**: Displays a high-contrast flashing effect while the timer is running in overtime.

### Requirement: Operating Limits
- **Max Duration**: 99:99 (5999 seconds).
- **Reset Logic**: The Reset button is only visible when the timer is "dirty" (time has elapsed or been edited).
- **Fullscreen**: A dedicated toggle for distraction-free presentation.
