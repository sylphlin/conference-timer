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
  - **White**: > 1 minute remaining.
  - **Yellow**: 15 seconds - 1 minute remaining.
  - **Red**: < 15 seconds remaining.
- **Visual Cues (Progress Bar)**:
  - **Thickness**: 4vh (high visibility).
  - **Segments**: Proportional to total duration: Green (Remainder), Yellow (45s), Red (15s).
- **Overtime Behavior**:
  - Displays `+MM:SS` format.
  - Caps at `+99:99`.
  - **Flashing**: 1Hz (once per second) red/black flash during active overtime.
- **Persistence**: Remembers length and state, defaults to 10m on cold start (no URL params).
- **URL Control**: Supports `?t=XmYs` for quick setup.
