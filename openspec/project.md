# Project: Conference Timer

## Overview
A sleek, high-performance web application designed for conference speakers and organizers to track session timing with precision and clear visual feedback.

## Tech Stack
- **Architecture**: Single-file Web Application (`index.html`).
- **Language**: Vanilla JavaScript (ES6+).
- **Styling**: Vanilla CSS (Global variables, dynamic `clamp()` typography, responsive layout).
- **Icons**: Inline SVG icons (Material/Lucide style).
- **Persistence**: LocalStorage with versioned keys.

## Project Conventions
- **Structure**: Everything contained in `index.html` for zero-dependency portability.
- **State Management**: Class-based component (ConferenceTimer) managing a single reactive state object.
- **Rendering**: `requestAnimationFrame` for smooth clock and progress bar updates.

## Domain Knowledge & Rules
- **Visual Cues (Text)**:
  - **White**: Time remaining is above the user-defined **Yellow** threshold.
  - **Yellow**: Time remaining is between **Yellow** and **Red** thresholds.
  - **Red**: Time remaining is below the user-defined **Red** threshold.
- **Visual Cues (Progress Bar)**:
  - **Thickness**: 4vh (high visibility).
  - **Segments**: Proportional to total duration: Green (Remainder), Yellow (Yellow - Red gap), Red (Red threshold).
  - **Timeout Indicator**: Dark Grey area indicating the zero point.
- **Alert System**:
  - **Stages**: Start, Yellow, Red.
  - **Sound Types**: N/A, Call Bell, Gong.
  - **Repetition**: Alerts can repeat 1, 2, or 3 times.
- **Overtime Behavior**:
  - Displays `+MM:SS` format.
  - Caps at `+99:99`.
  - **Flashing**: High-contrast flashing during active overtime.
- **Persistence**: Settings (thresholds, sounds, repeats) are stored in `localStorage` under `conf-timer-v9`.
- **URL Control**: Initial setup via `?t=XmYs`, which also sets the "Start" stage duration.
