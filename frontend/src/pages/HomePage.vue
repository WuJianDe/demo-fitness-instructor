<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import { useHead } from "@vueuse/head";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import DefaultLayout from "../layouts/DefaultLayout.vue";
import heroImg from "../assets/hero.png";

gsap.registerPlugin(ScrollTrigger);

const signaturePrograms = [
  {
    title: "HYPERTROPHY\n增肌特訓",
    description:
      "專為打造立體肌肉線條設計的極致訓練，突破停滯期，讓每一次收縮都具有破壞與重建的意義。",
  },
  {
    title: "POWER\n爆發力核心",
    description:
      "全面提升運動表現與爆發力，適合有基礎的訓練者。結合重量訓練與敏捷性爆發動作，喚醒肌肉最原始的能量。",
  },
  {
    title: "SHRED\n12週身形燃脂",
    description:
      "針對想在短期內大幅改變體脂率、追求極致線條的目標導向計畫。飲食監控與高低強度交替循環，推向極限。",
  },
];

const journeySteps = [
  {
    step: "01",
    title: "極限測試",
    text: "透過高難度動作測試全面了解你的活動度、爆發力與核心基礎。",
  },
  {
    step: "02",
    title: "魔鬼課表",
    text: "以你的目標為導向，規劃無情但科學的訓練節奏，絕不手軟。",
  },
  {
    step: "03",
    title: "極致突破",
    text: "每週強化負荷，強迫神經與肌肉適應新的強度，直到成為新的常態。",
  },
];

const mainRef = ref<HTMLElement | null>(null);
let ctx: gsap.Context | undefined;

onMounted(() => {
  ctx = gsap.context(() => {
    gsap.utils.toArray<HTMLElement>(".fade-up").forEach((el) => {
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
        },
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
      });
    });
  }, mainRef.value!);
});

onUnmounted(() => {
  ctx?.revert();
});

useHead({
  title: "JADE ELITE | Premium Training",
  meta: [
    {
      name: "description",
      content:
        "台北高端女性健身教練網站，主打極致增肌、爆發力核心與高強度身形管理。",
    },
    {
      property: "og:title",
      content: "JADE ELITE | Premium Training",
    },
    {
      property: "og:description",
      content: "結合時尚視覺與高強度訓練體驗的台北私人教練品牌網站。",
    },
    {
      property: "og:image",
      content: "/hero.png",
    },
  ],
});
</script>

<template>
  <DefaultLayout>
    <div ref="mainRef" class="site-wrapper">
      <section class="hero-section" id="top">
        <div class="hero-bg-wrapper">
          <img :src="heroImg" alt="Coach background" class="hero-image-bg" />
          <div class="hero-vignette"></div>
        </div>
        <div class="hero-content fade-up">
          <span class="eyebrow">極致頂尖訓練體驗</span>
          <h1>重塑界線<br />絕對力量</h1>
          <div class="hero-footer">
            <p class="lead-text">
              結合高強度訓練與前衛時尚設計，打造無法忽視的視覺與體能進化。<br />
              在這裡，強大就是最新的性感。
            </p>
            <div class="hero-cta">
              <a href="#consultation" class="btn btn-primary">立即預約特訓</a>
            </div>
          </div>
        </div>
      </section>

      <section class="section-padding philosophy-section" id="about">
        <div class="philosophy-text fade-up">
          <span class="eyebrow">訓練哲學</span>
          <h2>不是流汗<br />而是雕刻</h2>
          <p class="lead-text" style="margin-top: 2rem">
            Jade
            不相信妥協與平庸。專為追求極致美學的都會人士打造的高端體能訓練，
            結合最前衛的重訓科學與運動美學，讓你展現出不容忽視的強大氣場與線條。
          </p>
        </div>
        <div class="philosophy-stats fade-up">
          <dl class="stat-item">
            <dt>專長領域</dt>
            <dd>極致增肌、爆發力核心、完美身形</dd>
          </dl>
          <dl class="stat-item">
            <dt>訓練地點</dt>
            <dd>台北市核心區專屬私人訓練室</dd>
          </dl>
          <dl class="stat-item">
            <dt>特訓氛圍</dt>
            <dd>高強度控制、極簡時尚、無情但精準</dd>
          </dl>
        </div>
      </section>

      <section class="section-padding programs-section" id="programs">
        <div class="fade-up">
          <span class="eyebrow">巔峰特訓計畫</span>
          <h2>選擇極限</h2>
        </div>

        <div class="programs-list">
          <article
            v-for="program in signaturePrograms"
            :key="program.title"
            class="program-row fade-up"
          >
            <h3>{{ program.title }}</h3>
            <p>{{ program.description }}</p>
          </article>
        </div>
      </section>

      <section class="section-padding blueprint-section" id="journey">
        <div class="fade-up">
          <span class="eyebrow">訓練藍圖</span>
          <h2>通往頂尖<br />不留藉口</h2>
        </div>

        <div class="blueprint-grid">
          <div
            v-for="item in journeySteps"
            :key="item.step"
            class="blueprint-item fade-up"
          >
            <div class="step-num">{{ item.step }}</div>
            <h3>{{ item.title }}</h3>
            <p>{{ item.text }}</p>
          </div>
        </div>
      </section>

      <section class="section-padding cta-section" id="consultation">
        <div class="fade-up">
          <span class="eyebrow">立即行動</span>
          <h2 style="margin-bottom: 1rem">不再等待完美時機</h2>
          <p class="lead-text">
            預留 20 分鐘與我們聯繫，開啟蛻變之旅。準備好了，就來。
          </p>
          <div class="cta-buttons">
            <a href="mailto:hello@jadeflowstudio.com" class="btn btn-primary"
              >寄信預約特訓</a
            >
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              class="btn btn-secondary"
            >
              INSTAGRAM 私訊
            </a>
          </div>
        </div>
      </section>
    </div>
  </DefaultLayout>
</template>
