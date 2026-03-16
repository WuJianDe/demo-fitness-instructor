<script setup lang="ts">
import SiteHeader from "../components/SiteHeader.vue";
// We removed SiteFooter to keep the brutalist design extremely clean,
// ending powerfully on the CTA section.
</script>

<template>
  <div>
    <SiteHeader />
    <main>
      <slot />
    </main>
  </div>
</template>
