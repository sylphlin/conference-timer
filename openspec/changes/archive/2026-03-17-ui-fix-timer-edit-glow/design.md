# Design: Timer Edit Focus Frame

## 1. CSS 變更 (Visuals & Animations)

### 1.1 邊框樣式 (The Frame)
在 `#timer-input-wrapper` 處增加樣式類別（例如 `.timer-edit-glow`）。
- **Border**: `2px solid rgba(255, 255, 255, 0.4)`。
- **Border Radius**: `2.5rem` (約 40px)，配合巨大數字的大包覆感。
- **Padding**: 增加適當內距，例如 `clamp(1rem, 2vh, 2rem) clamp(2rem, 4vw, 4rem)`。
- **Background**: `rgba(255, 255, 255, 0.03)`，提供淺色的半透明遮罩背景。

### 1.2 呼吸動畫 (The Breathing)
定義一個名為 `timer-edit-pulse` 的關鍵影格動畫：
- **0%, 100%**:
  - `box-shadow`: `0 0 15px rgba(255, 255, 255, 0.2), 0 0 30px rgba(255, 255, 255, 0.1)`
  - `border-color`: `rgba(255, 255, 255, 0.3)`
  - `transform`: `scale(1)`
- **50%**:
  - `box-shadow`: `0 0 30px rgba(255, 255, 255, 0.5), 0 0 60px rgba(255, 255, 255, 0.2)`
  - `border-color`: `rgba(255, 255, 255, 0.7)`
  - `transform`: `scale(1.01)`

- **動畫屬性**: `2.5s ease-in-out infinite`。

## 2. JavaScript 變更 (Interaction Logic)

### 2.1 進入編輯模式
在 `enterEditMode` 函式中：
- 當切換到 `inputWrapper` 顯示時，將 `inputWrapper` 的 `className` 設為 `timer-edit-glow`（或者使用 `classList.add`）。

### 2.2 退出編輯模式
在 `exitEditMode` 函式中：
- 恢復 `inputWrapper.style.display = 'none'`。
- 清除 `inputWrapper` 的樣式類別。

## 3. 回溯相容性 (Backward Compatibility)
- 不影響計時功能。
- 樣式僅在編輯模式下生效，不影響正常顯示畫面。
