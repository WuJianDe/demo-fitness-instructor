# Frontend

健身教練形象網站的前端，單頁 landing page，支援靜態網站生成（SSG）。

## 技術棧

- Vue 3（`<script setup lang="ts">`）
- Vite + `vite-ssg`
- TypeScript（strict）
- Vue Router、Pinia
- `@vueuse/head`（SEO 與 `<head>`）
- GSAP + ScrollTrigger（捲動顯示動畫）
- Axios（已封裝於 `src/services/http.ts`，目前尚未串接 API）
- SCSS

## 環境需求

- Node.js 20.x LTS
- npm

## 指令

所有指令都在 `frontend/` 目錄下執行。

```bash
npm install          # 安裝套件
npm run dev          # 開發伺服器 http://localhost:5173
npm run build        # 型別檢查 + SSG 建置，輸出到 dist/
npm run build:demo   # 建置給子路徑 /demo/fitness-1/ 使用
npm run preview      # 預覽建置結果
npm run type-check   # TypeScript 檢查
npm run lint         # ESLint 檢查
npm run lint:fix     # ESLint 自動修正
npm run format       # Prettier 格式化
npm run format:check # Prettier 檢查
```

提交前請確認 `npm run type-check`、`npm run lint`、`npm run build` 都通過。

## 部署

- 網站放在網域根目錄：用 `npm run build`，上傳 `dist/` 的內容
- 網站放在子路徑（例如 `https://demo.adevic.dev/demo/fitness-1/`）：用 `npm run build:demo`，上傳 `dist/` 的內容到該路徑
- 換成其他子路徑時，把 `package.json` 中 `build:demo` 的 `--base=` 改成新路徑（前後都要有 `/`）
- 不能直接雙擊 `dist/index.html` 開啟，必須透過網頁伺服器

## 環境變數

複製 `.env.example` 為 `.env.local` 後修改。`VITE_` 開頭的變數會暴露在瀏覽器端，不要放機密資料。

| 變數 | 說明 |
| --- | --- |
| `VITE_API_BASE_URL` | API 位址（目前網站未使用） |

## 目錄結構

```text
src/
├── assets/       # 圖片等靜態資源（hero.png 為首屏照片）
├── components/   # 共用元件：SiteHeader、SiteFooter
├── composables/  # 共用 composables
├── features/     # 依功能分組的模組
├── layouts/      # DefaultLayout（含跳到主內容連結、頁首、頁尾）
├── pages/        # HomePage、NotFoundPage
├── router/       # 路由設定
├── services/     # axios 實例與 API 函式
├── stores/       # Pinia stores（網站名稱、教練名稱等）
├── styles/       # 全域 SCSS 與設計變數
└── types/        # 共用型別
```

## 首頁區塊

1. 首屏：標題、一個主要行動、教練照片
2. 數據條：一對一、60 分鐘、免費諮詢
3. 教學立場
4. 三種課程
5. 第一次怎麼開始（三個步驟）
6. 關於教練
7. 常見問題（原生 `<details>`）
8. 預約諮詢

## 設計與修改

- **顏色、字體、圓角**：全部定義在 `src/styles/_variables.scss` 的 CSS 變數，改這裡就能全站換色
- **版面樣式**：`src/styles/main.scss`
- **文案與區塊內容**：`src/pages/HomePage.vue`，課程、步驟、常見問題都是檔案頂部的陣列，直接改內容即可
- **網站名稱與導覽**：`src/components/SiteHeader.vue`、`SiteFooter.vue`、`src/stores/app.ts`
- **SEO 資訊**：`HomePage.vue` 的 `useHead`；每個新頁面都要呼叫 `useHead`
- **動畫**：區塊使用 `.reveal` class 觸發 GSAP 顯示動畫，並尊重 `prefers-reduced-motion`

### 照片

`hero.png` 是暫用圖片。換成真實照片時請注意：

- 目前在 `main.scss` 的 `.portrait__img` 用 CSS 把照片轉成黑白高對比，`.portrait__mask` 用來遮蓋原圖背景的招牌。換照片後請移除 `HomePage.vue` 中的 `portrait__mask` 與對應樣式
- 照片請改為適合網頁的大小與格式（建議 WebP 或壓縮過的 JPG）

## SSG 注意事項

- 不要在 `setup()` 最上層使用 `window`、`document`、`localStorage`，請放進 `onMounted`
- GSAP 動畫都放在 `onMounted`，並在 `onUnmounted` 清理
- 新頁面請在 `src/router/` 加入路由
