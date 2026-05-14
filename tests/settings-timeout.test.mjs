import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const html = readFileSync(new URL('../index.html', import.meta.url), 'utf8');

const requiredSnippets = [
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
