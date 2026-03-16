# Frontend

Public-facing website for the fitness instructor project.

## Current Direction

This frontend is currently styled as a premium, high-intensity brand site for a Taipei-based female fitness coach.
The visual direction emphasizes:

- Editorial typography and dark luxury presentation
- High-contrast hero imagery and cinematic sections
- Bold CTA-driven landing page structure
- GSAP-powered scroll reveal motion

## Implemented Sections

- Hero section with large-format coach image
- Training philosophy section
- Signature program list
- Training blueprint / process section
- Consultation CTA section
- Header and footer navigation shell
- 404 page and SSG-ready routing scaffold

## Stack

- Vue 3 with `<script setup lang="ts">`
- Vite + `vite-ssg`
- Vue Router
- Pinia
- `@vueuse/head`
- GSAP + ScrollTrigger
- Axios
- SCSS

## Commands

Run all commands from `frontend/`.

```bash
npm install
npm run dev
npm run build
npm run preview
npm run type-check
npm run lint
npm run lint:fix
npm run format
npm run format:check
```

## Structure

```text
src/
├── assets/
├── components/
├── composables/
├── features/
├── layouts/
├── pages/
├── router/
├── services/
├── stores/
├── styles/
└── types/
```

## Verification

The current frontend should be checked with:

```bash
npm run type-check
npm run lint
npm run build
```
