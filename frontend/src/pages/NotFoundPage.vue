<script setup lang="ts">
import { useHead } from "@vueuse/head";

import DefaultLayout from "../layouts/DefaultLayout.vue";

useHead({
  title: "找不到頁面 | Jade Flow Studio",
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
    <section class="page-shell page-shell--narrow">
      <p class="eyebrow">404</p>
      <h1>這個頁面還沒有準備好。</h1>
      <p class="lead">妳可以先回到首頁看看課程方案、教練介紹與預約資訊。</p>
      <RouterLink class="button button--primary" to="/">回到首頁</RouterLink>
    </section>
  </DefaultLayout>
</template>
