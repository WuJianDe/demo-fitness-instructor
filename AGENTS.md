# AGENTS.md — Root

> This is the root-level AGENTS.md for the entire monorepo.
> It covers project structure, Git workflow, and commit conventions shared across all sub-projects.
> Each sub-project has its own AGENTS.md with technology-specific rules.

---

## 📦 Monorepo Structure

```
/
├── AGENTS.md          # ← You are here — shared rules for all sub-projects
├── frontend/          # Public-facing website (Vue 3 + Vite + TypeScript + vite-ssg)
│   └── AGENTS.md      # Frontend-specific conventions
├── admin/             # Back-office management UI (Vue 3 + Vite + TypeScript)(TBD)
│   └── AGENTS.md      # Admin-specific conventions(TBD)
└── api/               # Backend API server (TBD)
    └── AGENTS.md      # API-specific conventions (to be added)
```

**Each sub-project is independent** — run its commands from within its own directory.
Never run `frontend` commands from the `api/` directory, or vice versa.

---

## 🌿 Git Workflow

### Branching strategy

| Branch                 | Purpose                                              |
| ---------------------- | ---------------------------------------------------- |
| `main`                 | Production-ready — never push directly               |
| `develop`              | Integration branch — all PRs target here             |
| `feat/<scope>/<name>`  | New feature, e.g. `feat/frontend/hero-animation`     |
| `fix/<scope>/<name>`   | Bug fix, e.g. `fix/admin/login-redirect`             |
| `chore/<scope>/<name>` | Tooling, deps, config, e.g. `chore/api/upgrade-deps` |
| `docs/<name>`          | Documentation only                                   |

> `<scope>` is the sub-project name: `frontend`, `admin`, or `api`.
> For changes that span multiple sub-projects, omit the scope: `feat/auth-integration`.

### PR rules

- PR title must follow Conventional Commits format (see below)
- All CI checks for the affected sub-project(s) must pass before merge
- Squash merge into `develop`; merge commit into `main`
- One concern per PR — do not mix frontend and api changes in the same PR unless they are tightly coupled

---

## 📝 Commit Message Format (Conventional Commits — Bilingual)

Every commit must be written in **both English and Traditional Chinese**.

### Structure

```
<type>(<scope>): <English summary>

[EN] <Detailed explanation in English>
  - What was changed and why
  - Any side effects or caveats

[ZH] <繁體中文詳細說明>
  - 修改了什麼、為什麼這樣改
  - 任何副作用或注意事項

Refs: #<issue-number>
```

### Types

| Type       | Use when                                             |
| ---------- | ---------------------------------------------------- |
| `feat`     | Adding a new feature or user-facing functionality    |
| `fix`      | Fixing a bug or incorrect behavior                   |
| `chore`    | Maintenance — deps update, config change, tooling    |
| `docs`     | Documentation changes only                           |
| `style`    | Code formatting only — no logic change               |
| `refactor` | Restructuring without adding features or fixing bugs |
| `test`     | Adding or updating tests                             |
| `perf`     | Performance improvement                              |

### Scopes

Use the sub-project name as scope: `frontend`, `admin`, `api`.
For shared/root-level changes use `root` or omit the scope.

### Full examples

```
feat(frontend): add GSAP scroll-triggered hero animation

[EN] Implemented a scroll-triggered entrance animation for the hero section
  using GSAP ScrollTrigger. Headline and CTA button fade in sequentially.
  All GSAP code placed inside onMounted for vite-ssg SSG compatibility.

[ZH] 在前台首頁 hero 區塊加入 GSAP ScrollTrigger 捲動觸發動畫
  - 標題與 CTA 按鈕依序淡入出現
  - 動畫放在 onMounted 內，確保 vite-ssg 靜態建構不會報錯

Refs: #42
```

```
fix(admin): correct pagination offset calculation

[EN] The page offset was calculated using 1-based index instead of 0-based,
  causing the first page to skip the first item. Fixed the formula in
  usePagination composable.

[ZH] 分頁的 offset 計算錯誤，原本用 1-based index 導致第一頁跳過第一筆資料
  - 修正 usePagination composable 中的計算公式
  - 影響所有使用此 composable 的列表頁面

Refs: #78
```

```
chore(root): add shared eslint config for monorepo

[EN] Extracted common ESLint rules into a root-level eslint.base.config.ts.
  Both frontend and admin extend this base config to avoid duplication.

[ZH] 將前台與後台共用的 ESLint 規則抽出至根目錄的 eslint.base.config.ts
  - frontend 與 admin 的 eslint.config.ts 改為繼承此 base config
  - 減少重複設定，後續只需修改根目錄即可同步更新

Refs: #12
```

---

## 🔒 Shared Security Rules

- Never commit `.env`, `.env.local`, or any file containing secrets
- All sub-projects must have a `.env.example` documenting required variables
- Secrets must never be logged or exposed in error messages
