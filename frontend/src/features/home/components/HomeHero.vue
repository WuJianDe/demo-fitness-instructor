<script setup lang="ts">
import portraitUrl from "../../../assets/hero.png";
import { storeToRefs } from "pinia";

import { useSiteMeta } from "../../../composables/useSiteMeta";
import { useAppStore } from "../../../stores/app";

const appStore = useAppStore();
const { coachName } = storeToRefs(appStore);
const { primaryCta, secondaryCta } = useSiteMeta();

const studioFacts = [
  "極致訓練體驗：科學化週期安排",
  "精準燃脂、重塑線條、突破自我",
  "量身打造高強度與恢復並重的節奏",
];

const trustNumbers = [
  { value: "PRO", label: "頂級運動員級別指導" },
  { value: "500+", label: "小時高強度核心特訓" },
  { value: "1:1", label: "無懈可擊的私人教練體驗" },
];
</script>

<template>
  <section class="hero-panel" id="top">
    <div class="hero-panel__content">
      <p class="eyebrow">極致頂尖訓練體驗</p>
      <div class="hero-panel__headline">
        <p class="hero-panel__kicker">挑戰你的極限邊界</p>
        <h1>重塑你的界線，展現絕對的力量與美感。</h1>
      </div>
      <p class="lead">
        結合高強度訓練與前衛時尚設計，打造無法忽視的視覺與體能雙重進化。在這裡，強大就是最新的性感。
      </p>
      <ul class="hero-panel__facts">
        <li v-for="fact in studioFacts" :key="fact">{{ fact }}</li>
      </ul>
      <div class="hero-panel__actions">
        <a class="button button--primary" :href="primaryCta.href"
          >立即預約特訓</a
        >
        <a class="button button--secondary" :href="secondaryCta.href"
          >了解訓練方案</a
        >
      </div>
      <dl class="hero-panel__metrics" aria-label="Studio highlights">
        <div v-for="item in trustNumbers" :key="item.label">
          <dt>{{ item.value }}</dt>
          <dd>{{ item.label }}</dd>
        </div>
      </dl>
    </div>

    <div class="hero-visual">
      <div class="hero-visual__image-wrap">
        <img
          :src="portraitUrl"
          :alt="`${coachName} 教練人像`"
          class="hero-visual__image"
        />
      </div>
      <div class="hero-note hero-note--top">
        <span>核心使命</span>
        <strong>超越極限 × 突破自我</strong>
      </div>
      <div class="hero-note hero-note--bottom">
        <span>特訓氛圍</span>
        <strong>時尚前衛 + 絕對專注</strong>
      </div>
    </div>
  </section>
</template>
