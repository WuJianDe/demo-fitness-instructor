<script setup lang="ts">
import type { NavigationItem } from "../types/navigation";

const navigationItems: NavigationItem[] = [
  { label: "訓練哲學", href: "#about" },
  { label: "巔峰計畫", href: "#programs" },
  { label: "訓練藍圖", href: "#journey" },
  { label: "立即預約", href: "#consultation" },
];
</script>

<template>
  <header class="site-header">
    <a class="brand-logo" href="#top"> JADE ELITE </a>

    <nav class="nav-links" aria-label="Primary">
      <a v-for="item in navigationItems" :key="item.label" :href="item.href">
        {{ item.label }}
      </a>
    </nav>
  </header>
</template>
