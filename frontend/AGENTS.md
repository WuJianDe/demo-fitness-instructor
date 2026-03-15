# AGENTS.md — frontend/

> Frontend sub-project: public-facing website. For Git workflow and commit conventions, refer to the root AGENTS.md.

---

## 📦 Sub-project Overview

- **Framework**: Vue 3 (Composition API + `<script setup lang="ts">`)
- **Build Tool**: Vite + `vite-ssg` (static site generation)
- **Language**: TypeScript (strict mode)
- **Package Manager**: `npm` (run all commands from within `frontend/`)
- **Node Version**: 20.x LTS

---

## 📚 Key Dependencies

### Production

| Package        | Role                   | Usage notes                                                          |
| -------------- | ---------------------- | -------------------------------------------------------------------- |
| `vue-router`   | Client-side routing    | Routes in `src/router/`; use `<RouterLink>`, never `<a>`             |
| `pinia`        | Global state           | One store per domain in `src/stores/`                                |
| `@vueuse/core` | Composable utilities   | Prefer over custom implementations                                   |
| `axios`        | HTTP client            | All calls through `src/services/`; never import axios in components  |
| `gsap`         | Animation              | Complex timelines only; simple transitions use CSS or `<Transition>` |
| `@vueuse/head` | SEO / `<head>`         | Call `useHead()` in every page component                             |
| `vite-ssg`     | Static site generation | SSG-safe rule: no `window`/`document` at `setup()` top level         |

### Development

| Package                                    | Role              |
| ------------------------------------------ | ----------------- |
| `sass`                                     | SCSS preprocessor |
| `prettier`                                 | Code formatter    |
| `eslint` + `@vue/eslint-config-typescript` | Linting           |

---

## 🔨 Commands

> Run all commands from the `frontend/` directory.

```bash
npm install          # Install dependencies
npm run dev          # Dev server → http://localhost:5173
npm run build        # SSG build → outputs to dist/
npm run preview      # Preview SSG output locally
npm run type-check   # TypeScript check (no emit)
npm run lint         # ESLint check
npm run lint:fix     # ESLint auto-fix
npm run format       # Prettier auto-format
npm run format:check # Prettier check (no write)
```

> ⚠️ Run `npm run type-check && npm run lint` before every commit. Run `npm run build` to verify SSG output is error-free before marking any task complete.

---

## 🏗️ Architecture

```
src/
├── assets/       # Static assets (images, fonts, SVGs)
├── components/   # Reusable presentational components — no store access, no API calls
├── composables/  # Shared composables (useXxx); check @vueuse/core before writing custom ones
├── features/     # Feature modules — co-locate components, composables, types per feature
├── layouts/      # Layout wrappers (DefaultLayout.vue, etc.)
├── pages/        # Route-level views; must be SSG-safe
├── router/       # Vue Router config and navigation guards
├── services/     # Axios-based API functions — HTTP + response mapping only
├── stores/       # Pinia stores — one file per domain
├── styles/       # Global SCSS, design tokens (_variables.scss, _reset.scss)
└── types/        # Shared TypeScript interfaces and types
```

**Key rules:**

- `components/` — no axios, no pinia, no `window`
- `services/` — wrap every axios call; export typed async functions
- `pages/` — guard any `window`/`document` with `onMounted` or `if (!import.meta.env.SSR)`
- `stores/` — Composition API style: `defineStore('id', () => {})`
- GSAP — always inside `onMounted`; clean up with `tl.kill()` in `onUnmounted`

---

## 📐 Code Conventions

### TypeScript

- `"strict": true` — no `any`; use `unknown` + type guards
- `interface` for object shapes; `type` for unions/intersections
- Annotate all public function return types explicitly

### Vue Components

- `<script setup lang="ts">` for all components
- Props: `withDefaults(defineProps<Props>(), {})`
- Emits: `defineEmits<{ eventName: [payload: Type] }>()`
- One component per file, PascalCase filename

```vue
<!-- ✅ Good -->
<script setup lang="ts">
interface CardProps {
  title: string;
  imageUrl?: string;
}
const props = withDefaults(defineProps<CardProps>(), { imageUrl: "" });
</script>
```

### Styling (SCSS)

- Global variables/mixins → `src/styles/_variables.scss`
- Component styles → `<style scoped lang="scss">`
- No inline `:style` for static values — use SCSS classes
- Custom class naming: BEM (`.block__element--modifier`)

### HTTP / Axios

- Shared axios instance in `src/services/http.ts`
- Each service exports typed async functions: `fetchArticle(id: string): Promise<Article>`
- Error handling at the service layer; throw typed errors upward

### GSAP

- All GSAP code inside `onMounted` — never at `setup()` top level
- Clean up in `onUnmounted`: `tl.kill()`
- Scope animations with `gsap.context(container)` to avoid leaking into other components

### SEO (VueUse Head)

- Every page must call `useHead({ title, meta })` at the top of `<script setup>`
- All public pages require OG tags: `og:title`, `og:description`, `og:image`

---

## 🔒 Environment Variables

- Secrets in `.env.local` — never commit this file
- Document all vars in `.env.example` with placeholder values
- `VITE_` prefixed vars are exposed to the browser — treat as public

---

## 🤖 Notes for AI Agents

- After every change: `npm run type-check && npm run lint`
- Before marking complete: `npm run build` must succeed
- Never use `window`, `document`, `localStorage` at `setup()` top level — use `onMounted`
- All GSAP animations inside `onMounted`; clean up in `onUnmounted`
- New pages → add route in `src/router/`
- New API calls → add typed function in `src/services/` first
