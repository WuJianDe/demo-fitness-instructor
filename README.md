# Demo Fitness Instructor

健身教練個人品牌形象網站（Monorepo）。目前網站以「Jade 的訓練室」為範例：台北一對一重量訓練教練。

## 專案結構

| 目錄 | 說明 |
| --- | --- |
| `frontend/` | 對外公開的網站，使用 Vue 3、Vite、TypeScript 與 `vite-ssg` |

目前沒有後端，諮詢預約透過 Email 與 Instagram 私訊進行。

## 快速開始

```bash
cd frontend
npm install
npm run dev
```

開發伺服器預設在 <http://localhost:5173>。完整指令與開發規範請見 [`frontend/README.md`](frontend/README.md)。

## 設計方向

首頁走運動感、有力量的深色風格，同時避免常見的 AI 健身站套版（螢光色、漸層、空洞形容詞）。

- **視覺**：炭黑底、單一橘紅重點色、超大粗體標題、黑白高對比照片
- **文案**：口語、具體、有立場，直接寫出上課方式、時長與適合對象，不用「極致」「突破極限」這類套話
- **結構**：首屏、數據條、教學立場、三種課程、第一次怎麼開始、關於教練、常見問題、預約

設計與文案原則參考 [elayadesign/ai-design-skills](https://github.com/elayadesign/ai-design-skills) 的 landing page 設計 skill。

## 上線前需要替換的內容

目前部分內容是示範用，正式上線前請換成真實資料：

- 教練照片：`frontend/src/assets/hero.png` 是暫用圖片，請換成教練本人的照片
- 聯絡方式：Email 與 Instagram 連結（`HomePage.vue`、`SiteFooter.vue`）
- 課程資訊：上課次數、每堂時長、回覆時間、教練經歷等描述
- 網址與社群預覽圖：`HomePage.vue` 中 `useHead` 的 `og:image`
- 學員見證與價格：目前沒有放，有真實資料再補
- 法律頁面：隱私權政策等連結尚未建立

## Git 流程

規則記錄在 `AGENTS.md`。

- 開發分支：`develop`
- 發佈分支：`main`
- 功能分支：`feat/<scope>/<name>`
- 修復分支：`fix/<scope>/<name>`
- Commit 訊息使用中英雙語（`[EN]` / `[ZH]`）
