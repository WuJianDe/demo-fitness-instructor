<script setup lang="ts">
import type { NavigationItem } from "../types/navigation";

const navigationItems: NavigationItem[] = [
  { label: "我怎麼教", href: "#about" },
  { label: "課程", href: "#programs" },
  { label: "常見問題", href: "#faq" },
];
</script>

<template>
  <header class="site-header">
    <a class="brand-logo" href="#top">Jade 的訓練室</a>

    <nav class="nav-links" aria-label="主選單">
      <a v-for="item in navigationItems" :key="item.label" :href="item.href">
        {{ item.label }}
      </a>
      <a class="btn btn-primary" href="#consultation">預約諮詢</a>
    </nav>
  </header>
</template>
