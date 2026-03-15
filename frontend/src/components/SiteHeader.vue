<script setup lang="ts">
import type { NavigationItem } from '../types/navigation'

const navigationItems: NavigationItem[] = [
  { label: 'Home', to: '/' },
  { label: 'Programs', to: '/' },
  { label: 'About', to: '/' },
  { label: 'Contact', to: '/' },
]
</script>

<template>
  <header class="site-header">
    <RouterLink class="site-brand" to="/">
      <span class="site-brand__mark">DF</span>
      <span class="site-brand__text">
        <strong>Demo Fitness</strong>
        <small>Instructor Studio</small>
      </span>
    </RouterLink>

    <nav class="site-nav" aria-label="Primary">
      <RouterLink
        v-for="item in navigationItems"
        :key="item.label"
        class="site-nav__link"
        :to="item.to"
      >
        {{ item.label }}
      </RouterLink>
    </nav>
  </header>
</template>
