<script setup lang="ts">
import { useHead } from "@vueuse/head";

import DefaultLayout from "../layouts/DefaultLayout.vue";

useHead({
  title: "找不到這一頁｜Jade 的訓練室",
  meta: [
    {
      name: "robots",
      content: "noindex",
    },
  ],
});
</script>

<template>
  <DefaultLayout>
    <section class="not-found">
      <p class="eyebrow">404</p>
      <h1>這一頁不存在</h1>
      <p class="lead-text">連結可能打錯了，或是頁面已經搬走。回首頁看看吧。</p>
      <RouterLink class="btn btn-primary" to="/">回到首頁</RouterLink>
    </section>
  </DefaultLayout>
</template>
