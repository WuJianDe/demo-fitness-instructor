<script setup lang="ts">
import { useHead } from '@vueuse/head'

import DefaultLayout from '../layouts/DefaultLayout.vue'
import HomeHero from '../features/home/components/HomeHero.vue'

useHead({
  title: 'Demo Fitness Instructor',
  meta: [
    {
      name: 'description',
      content: 'A static-first Vue frontend scaffold for a fitness instructor website.',
    },
    {
      property: 'og:title',
      content: 'Demo Fitness Instructor',
    },
    {
      property: 'og:description',
      content: 'A polished starter structure for the public-facing fitness instructor site.',
    },
    {
      property: 'og:image',
      content: '/hero.png',
    },
  ],
})
</script>

<template>
  <DefaultLayout>
    <HomeHero />
  </DefaultLayout>
</template>
