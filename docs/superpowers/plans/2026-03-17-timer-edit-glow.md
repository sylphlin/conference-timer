# UI Optimization: Timer Edit Focus Frame Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 為計時器編輯狀態增加「霓虹呼吸光暈」視覺反饋。

**Architecture:** 透過 CSS Animation (`@keyframes`) 實作呼吸效果，並在 JavaScript 的 `enterEditMode` 與 `exitEditMode` 中切換 CSS Class。

**Tech Stack:** Vanilla HTML, CSS, JavaScript (Browser Environment).

---

### Chunk 1: Style Implementation

**Files:**
- Modify: `index.html`

- [ ] **Step 1: Define CSS for `timer-edit-glow` and `timer-edit-pulse`**

在 `<style>` 標籤內加入以下樣式：

```css
    /* Timer Edit Mode Glow & Pulse */
    .timer-edit-glow {
      border: 2px solid rgba(255, 255, 255, 0.4) !important;
      border-radius: 2.5rem;
      padding: clamp(1rem, 2vh, 2rem) clamp(2rem, 4vw, 4rem);
      background: rgba(255, 255, 255, 0.03);
      box-shadow: 0 0 15px rgba(255, 255, 255, 0.3);
      animation: timer-edit-pulse 2.5s ease-in-out infinite;
      transition: all 0.3s ease;
    }

    @keyframes timer-edit-pulse {
      0%, 100% {
        box-shadow: 0 0 15px rgba(255, 255, 255, 0.2), 0 0 30px rgba(255, 255, 255, 0.1);
        border-color: rgba(255, 255, 255, 0.3);
        transform: scale(1);
      }
      50% {
        box-shadow: 0 0 30px rgba(255, 255, 255, 0.5), 0 0 60px rgba(255, 255, 255, 0.2);
        border-color: rgba(255, 255, 255, 0.7);
        transform: scale(1.01);
      }
    }
```

- [ ] **Step 2: Commit CSS changes**

```bash
git add index.html
git commit -m "style: add timer edit glow and pulse animation"
```

---

### Chunk 2: JavaScript Logic Integration

**Files:**
- Modify: `index.html`

- [ ] **Step 1: Update `enterEditMode` to add `timer-edit-glow` class**

```javascript
      enterEditMode(e) {
        if (!this.state.isPaused) this.togglePlayPause();
        
        const rect = this.display.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const width = rect.width;
        
        const remaining = this.getRemaining();
        const { mm, ss } = this.splitMs(remaining);
        
        this.display.style.display = 'none';
        this.inputWrapper.style.display = 'flex';
        this.inputWrapper.classList.add('timer-edit-glow'); // Add this line
        this.inputMm.value = mm;
        this.inputSs.value = ss;

        setTimeout(() => {
          if (clickX < width * 0.45) {
            this.inputMm.focus();
          } else {
            this.inputSs.focus();
          }
        }, 0);
      }
```

- [ ] **Step 2: Update `exitEditMode` to remove `timer-edit-glow` class**

```javascript
      exitEditMode() {
        const m = parseInt(this.inputMm.value) || 0;
        const s = parseInt(this.inputSs.value) || 0;
        this.state.durationMs = Math.min(this.limitMs, (m * 60 + s) * 1000);
        this.state.pausedRemainingMs = this.state.durationMs;
        this.state.targetTimeMs = null;
        this.state.isDirty = true;
        this.display.style.display = 'block';
        this.inputWrapper.style.display = 'none';
        this.inputWrapper.classList.remove('timer-edit-glow'); // Add this line
        this.updateUI();
      }
```

- [ ] **Step 3: Update `bindEvents` for Escape key handling**

```javascript
        const handleTimerKeydown = (e) => {
          if (e.key === 'Enter') this.exitEditMode();
          if (e.key === 'Escape') {
            const remaining = this.getRemaining();
            const { mm, ss } = this.splitMs(remaining);
            this.inputMm.value = mm;
            this.inputSs.value = ss;
            this.inputWrapper.classList.remove('timer-edit-glow'); // Add this line
            this.inputMm.blur();
            this.inputSs.blur();
          }
        };
```

- [ ] **Step 4: Commit JS changes**

```bash
git add index.html
git commit -m "feat: integrate timer edit glow logic in enter/exitEditMode"
```

---

### Chunk 3: Final Verification

**Files:**
- Manual Verification: `index.html`

- [ ] **Step 1: Open `index.html` and click the timer to verify the glow**
- [ ] **Step 2: Press Enter to verify the glow disappears**
- [ ] **Step 3: Press Escape to verify the glow disappears**
- [ ] **Step 4: Verify the breathing animation works correctly**
