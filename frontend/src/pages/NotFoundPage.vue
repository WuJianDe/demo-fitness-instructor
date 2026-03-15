<script setup lang="ts">
import { useHead } from '@vueuse/head'

import DefaultLayout from '../layouts/DefaultLayout.vue'

useHead({
  title: 'Page Not Found | Demo Fitness Instructor',
  meta: [
    {
      name: 'robots',
      content: 'noindex',
    },
  ],
})
</script>

<template>
  <DefaultLayout>
    <section class="page-shell page-shell--narrow">
      <p class="eyebrow">404</p>
      <h1>Page not found</h1>
      <p class="lead">
        The page you requested does not exist yet. The routing scaffold is ready for future
        expansion.
      </p>
      <RouterLink class="button button--primary" to="/">Back to home</RouterLink>
    </section>
  </DefaultLayout>
</template>
