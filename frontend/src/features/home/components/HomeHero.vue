<script setup lang="ts">
import { storeToRefs } from 'pinia'

import { useSiteMeta } from '../../../composables/useSiteMeta'
import { useAppStore } from '../../../stores/app'

const appStore = useAppStore()
const { siteTagline } = storeToRefs(appStore)
const { primaryCta, secondaryCta } = useSiteMeta()
</script>

<template>
  <section class="hero-panel page-shell">
    <div class="hero-panel__content">
      <p class="eyebrow">Public-facing frontend scaffold</p>
      <h1>Launch a fitness brand site from a clean, SSG-safe foundation.</h1>
      <p class="lead">
        {{ siteTagline }}
      </p>
      <div class="hero-panel__actions">
        <a class="button button--primary" :href="primaryCta.href">{{ primaryCta.label }}</a>
        <a class="button button--secondary" :href="secondaryCta.href">{{ secondaryCta.label }}</a>
      </div>
    </div>

    <aside class="hero-card" aria-label="Scaffold overview">
      <p class="hero-card__label">Included now</p>
      <ul class="hero-card__list">
        <li>SSG-ready entry with `vite-ssg`</li>
        <li>Route-level pages and layout wrappers</li>
        <li>Typed Pinia store and Axios service layer</li>
        <li>Global SCSS tokens and reset structure</li>
      </ul>
    </aside>
  </section>
</template>
