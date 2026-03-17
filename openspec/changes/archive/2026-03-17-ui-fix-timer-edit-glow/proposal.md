# Proposal: UI Optimization - Timer Edit Focus Frame

## 1. Context
目前主畫面的計時器在點擊進入編輯模式時，僅隱藏原本的數字並顯示分開的輸入框，視覺上缺乏明確的「狀態切換」反饋。使用者可能不清楚目前正處於「編輯狀態」中。

## 2. Goal
為計時器編輯區域增加一個「亮起」的視覺反饋效果，讓編輯狀態在深色背景下更加突出、專業且具備動態感。

## 3. High-Level Idea
- **Neon Glow**: 在輸入區域周圍增加純白色的發光邊框。
- **Breathing Effect**: 讓光暈隨時間緩慢呼吸，營造「等待輸入」的動態氛圍。
- **Consistent Design Language**: 延續 Settings 頁面的輸入框風格，但採用更大的圓角與發光層次，符合儀表板的高級感。

## 4. Expected Outcome
- 使用者點擊計時器後，數字周圍會亮起一個白色發光的圓角矩形框。
- 該框線具備緩慢的呼吸動畫。
- 退出編輯模式（失去焦點或按下 Enter）後，該效果立即消失。
