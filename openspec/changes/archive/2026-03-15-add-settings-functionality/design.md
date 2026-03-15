# Design: Settings Functionality

## UI Component: Settings Button
- **HTML**: A `<button>` with an SVG gear icon, placed in the top-right corner of the body.
- **CSS**: 
  - `position: absolute; top: 2rem; right: 2rem;`
  - Circular shape, consistent with existing side controls.
  - `z-index: 100` to ensure it stays above other elements.
  - `opacity: 0.15` by default, `1.0` on hover.

## UI Component: Settings Overlay
- **HTML**: A `<div>` with `id="settings-overlay"`, hidden by default.
- **Content**:
  - Heading: "Settings"
  - Input Group: "Yellow (mm:ss)"
  - Input Group: "Red (mm:ss)"
  - Toggle: "Chime Notifications"
  - Action Button: "Close" (auto-saves on change).
- **CSS**:
  - `display: none; position: fixed; inset: 0; background: rgba(0,0,0,0.85); backdrop-filter: blur(10px);`
  - Flexbox centering for the settings modal.
  - Stylized inputs matching the dark theme.

## State Management
Extend the `state` object in `ConferenceTimer` class:
```javascript
this.state = {
  // ... existing fields
  yellowMs: 60000,
  redMs: 15000,
  soundEnabled: false
};
```

## Sound Implementation: Metallic Bell
- **Dynamic Synthesis**: Use the Web Audio API to generate a "crisp metallic bell" sound. This maintains the zero-dependency, single-file requirement.
- **Oscillator Configuration**:
  - Fundamental frequency around 880Hz or 1760Hz.
  - Multiple overtones at non-integer multiples for that "metallic" inharmonicity.
  - Exponential decay envelope for the "chime" effect.
- **Trigger Logic**:
  - Store `lastPlayedThreshold` (null, 'yellow', or 'red').
  - In `updateUI()`, check if current `rem` crosses a threshold.
  - If crossing into Yellow: play 1 chime.
  - If crossing into Red: play 3 chimes (spaced by ~200ms).

## Persistence
- Ensure `yellowMs`, `redMs`, and `soundEnabled` are saved to and loaded from `localStorage`.
- Provide default values if not found.
