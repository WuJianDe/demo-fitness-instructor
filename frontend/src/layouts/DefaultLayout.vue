<script setup lang="ts">
import SiteFooter from "../components/SiteFooter.vue";
import SiteHeader from "../components/SiteHeader.vue";
</script>

<template>
  <div>
    <a class="skip-link" href="#main">跳到主要內容</a>
    <SiteHeader />
    <main id="main">
      <slot />
    </main>
    <SiteFooter />
  </div>
</template>
