import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const html = readFileSync(new URL('../index.html', import.meta.url), 'utf8');

const requiredSnippets = [
  "title: ''",
  'id="timer-title"',
  'id="setting-title"',
  'class="settings-title-row"',
  "document.getElementById('setting-title').value = this.state.title",
  "this.state.title = document.getElementById('setting-title').value.trim()",
  "this.titleDisplay.innerText = this.state.title",
  "if (e.key === 'Enter' && this.isOverlayActive())",
  "this.saveSettings()",
  "settingsOverlay.addEventListener('mousedown', () => this.closeSettings())",
  "settingsModal.addEventListener('mousedown', (e) => e.stopPropagation())",
  '<div id="timer-title"></div>',
  "safeGetLocalStorage(key)",
  "safeSetLocalStorage(key, value)",
  "const saved = this.safeGetLocalStorage('conf-timer-v9')",
  "this.safeSetLocalStorage('conf-timer-v9', JSON.stringify(this.state))",
  "yellowSound: 'bell'",
  'yellowRepeat: 1',
  "redSound: 'bell'",
  'redRepeat: 2',
  "timeoutSound: 'gong'",
  'timeoutRepeat: 1',
  'id="setting-timeout-sound"',
  'id="setting-timeout-repeat"',
  "timer.testAlert('timeout')",
  "document.getElementById('setting-timeout-sound').value = this.state.timeoutSound",
  "document.getElementById('setting-timeout-repeat').value = this.state.timeoutRepeat",
  "this.state.timeoutSound = document.getElementById('setting-timeout-sound').value",
  "this.state.timeoutRepeat = parseInt(document.getElementById('setting-timeout-repeat').value)",
  "this.playAlert(this.state.timeoutSound, this.state.timeoutRepeat)"
];

for (const snippet of requiredSnippets) {
  assert.ok(
    html.includes(snippet),
    `Expected index.html to include: ${snippet}`
  );
}

assert.ok(
  html.includes("['start', 'yellow', 'red', 'timeout']"),
  'Expected Timeout to participate in settings enable/disable UI updates'
);

const settingsTitleStyle = html.match(/\.settings-title-row \{(?<body>[\s\S]*?)\}/);
assert.ok(settingsTitleStyle, 'Expected settings title row styles to exist');
assert.ok(
  !settingsTitleStyle.groups.body.includes('display: none'),
  'Expected Settings Title row to remain visible'
);

const timerTitleStyle = html.match(/#timer-title \{(?<body>[\s\S]*?)\}/);
assert.ok(timerTitleStyle, 'Expected timer title styles to exist');
assert.ok(
  timerTitleStyle.groups.body.includes('position: absolute') &&
  timerTitleStyle.groups.body.includes('top: 2rem') &&
  timerTitleStyle.groups.body.includes('left: 2rem') &&
  timerTitleStyle.groups.body.includes('height: clamp(28px, 4.5vh, 44px)'),
  'Expected clock Title to sit at the top-left with the same height as top-right buttons'
);

assert.ok(
  !html.includes("settingsOverlay.addEventListener('mouseup'") &&
  !html.includes("settingsOverlay.addEventListener('click'") &&
  !html.includes("document.getElementById('settings-overlay').onclick = () => this.closeSettings()"),
  'Expected Settings overlay close to use mousedown, not click'
);
