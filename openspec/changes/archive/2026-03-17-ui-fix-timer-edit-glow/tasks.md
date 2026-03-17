# Tasks: Timer Edit Focus Frame Implementation

## Phase 1: Style Setup (CSS)
- [ ] 1.1 在 `index.html` 的 `<style>` 區塊中，定義 `timer-edit-glow` CSS 類別。
- [ ] 1.2 在 `index.html` 的 `<style>` 區塊中，定義 `timer-edit-pulse` 關鍵影格動畫。
- [ ] 1.3 調整 `#timer-input-wrapper` 的預設樣式，確保其能正確撐開邊框且不影響原本的佈局。

## Phase 2: Logic Integration (JS)
- [ ] 2.1 修改 `ConferenceTimer.enterEditMode` 函式，增加顯示發光框類別的邏輯。
- [ ] 2.2 修改 `ConferenceTimer.exitEditMode` 函式，增加移除發光框類別的邏輯。
- [ ] 2.3 修改 `ConferenceTimer.bindEvents` 函式，確保在 Escape 鍵盤操作下也會正確移除發光框。

## Phase 3: Validation (UI Check)
- [ ] 3.1 驗證點擊時鐘後，是否顯示發光框與呼吸動畫。
- [ ] 3.2 驗證按下 Enter 或點擊外部後，發光框是否正常消失。
- [ ] 3.3 驗證調整時間大小後，發光框的佈局是否依然穩定（`clamp` 的響應式效果）。
