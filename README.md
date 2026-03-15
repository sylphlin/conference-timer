# Conference Timer 🕒

A professional, distraction-free countdown timer designed specifically for conference speakers, presenters, and organizers. 

Built with a focus on high visibility and simplicity, this tool ensures your sessions stay on track without the clutter of ads or complex configurations.

[**🚀 Live Demo**](https://sylphlin.github.io/conference-timer/)

![Conference Timer Preview](assets/screenshots/preview.png)

## Why Conference Timer?

- **Stage-based Settings**: Configure four distinct stages (**Start**, **Yellow**, **Red**, **Timeout**) with custom thresholds.
- **Advanced Alert Sounds**: Choice of synthesized **Call Bell** and **Gong** sounds using the Web Audio API.
- **Customizable Repetitions**: Set alerts to repeat 1, 2, or 3 times for each stage.
- **Visual Confidence**: Each stage in settings features a color-coded swatch matching the progress bar.
- **Validation**: Built-in validation ensures logical timing (Red < Yellow).
- **Zero Distractions**: No ads, no pop-ups, and no secondary functions. Purely focused on time.
- **Privacy First**: Runs entirely in your browser. No data leaves your machine.
- **Portable**: A single `index.html` file. No installation required.

## Key Features

- **Proportional Progress Bar**: A tricolor bar (Green-Yellow-Red) that dynamically scales to your total time.
  - **Green**: Safe zone (> 1 minute by default).
  - **Yellow**: Yellow zone (15s to 1 minute by default).
  - **Red**: Red zone (< 15s by default).
- **Overtime Mode**: Automatically switches to an elapsed time counter (`+MM:SS`) with a prominent flashing effect after reaching zero.
- **Interactive Configuration**: 
  - Click digits to edit the time inline.
  - Professional settings modal for multi-stage alerts.
  - Sound testing buttons to preview configurations.
- **Responsive Design**: Adapts perfectly to projectors, laptops, and mobile screens.

## Quick Start

1. Download the `index.html` file.
2. Open it in any modern web browser.
3. (Optional) Append `?t=20m` to the URL to set a 20-minute countdown.

## Keyboard Shortcuts

- **Space**: Start / Pause
- **Enter**: Confirm time during inline editing
- **Esc**: Cancel inline editing

## Tech Stack

- **Vanilla JavaScript (ES6+)**: High performance, zero dependencies.
- **Vanilla CSS**: Responsive layout with dynamic `clamp()` typography.
- **SVG Icons**: Lightweight and sharp at any scale.

## License

MIT License - feel free to use, modify, and distribute!
