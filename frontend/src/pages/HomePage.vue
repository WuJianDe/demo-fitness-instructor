<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import { useHead } from "@vueuse/head";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import DefaultLayout from "../layouts/DefaultLayout.vue";
import heroImg from "../assets/hero.png";

gsap.registerPlugin(ScrollTrigger);

interface Program {
  name: string;
  meta: string;
  description: string;
  forWho: string;
}

interface Step {
  title: string;
  text: string;
}

interface Faq {
  question: string;
  answer: string;
}

const programs: Program[] = [
  {
    name: "從頭開始",
    meta: "每週 2 次，每次 60 分鐘",
    description:
      "動作從最基本的深蹲、硬舉、推和拉開始教。我會把每個動作拆開，講到你自己能感覺到哪裡在用力為止。",
    forWho: "適合：沒進過健身房，或停了好幾年想重新開始的人",
  },
  {
    name: "把力量練起來",
    meta: "每週 2 到 3 次，每次 60 分鐘",
    description:
      "有基礎、想把重量往上加的人。我們會記錄每次的重量和感受，一起看進步，也一起看什麼時候該退一步休息。",
    forWho: "適合：已經練過一陣子，但卡在同一個重量的人",
  },
  {
    name: "體態調整",
    meta: "每週 2 次，搭配飲食紀錄",
    description:
      "不用極端飲食，也不需要天天餓肚子。從你現在的日常吃飯、睡覺和工作節奏出發，慢慢調整。",
    forWho: "適合：想改變身形，但不想被一份嚴格菜單綁住的人",
  },
];

const steps: Step[] = [
  {
    title: "先聊 20 分鐘",
    text: "你想改變什麼、以前有沒有受過傷、一週能排出幾天。不用準備任何東西，也不用先運動。",
  },
  {
    title: "第一堂：看你怎麼動",
    text: "我會帶你做幾個基本動作，看看哪裡緊、哪裡使不上力。這堂結束後，我才會告訴你適合怎麼練。",
  },
  {
    title: "每週一點一點調",
    text: "課表不是一次寫好就不動。有人睡不好、有人這週加班，我會跟著你的狀態改。",
  },
];

const faqs: Faq[] = [
  {
    question: "我完全沒運動過，會不會跟不上？",
    answer:
      "不會。大部分學員來的時候都是這個狀態。第一個月的重點是學會動作，重量輕到你會覺得有點太簡單，這是刻意的。",
  },
  {
    question: "上課在哪裡？",
    answer:
      "台北市區的小型私人訓練室，一次只有一位學員，不會有其他人在旁邊看。確切地址在預約確認後會傳給你。",
  },
  {
    question: "第一次聊完，不適合可以不報名嗎？",
    answer:
      "可以。20 分鐘的諮詢不收費，聊完你覺得不合適，或我覺得我幫不上忙，都會直接說。",
  },
  {
    question: "有受過傷或身體不舒服，可以練嗎？",
    answer:
      "請先在諮詢時告訴我。有些情況我會建議你先看過醫師或物理治療師再開始，這是為了你好，不是推託。",
  },
];

const stats = [
  { value: "1:1", label: "一次只帶一位學員" },
  { value: "60", label: "分鐘一堂，本人親授" },
  { value: "免費", label: "第一次 20 分鐘諮詢" },
];

const mainRef = ref<HTMLElement | null>(null);
let ctx: gsap.Context | undefined;

onMounted(() => {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }

  ctx = gsap.context(() => {
    gsap.utils.toArray<HTMLElement>(".reveal").forEach((el) => {
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: "top 88%",
          once: true,
        },
        y: 24,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });
    });
  }, mainRef.value!);
});

onUnmounted(() => {
  ctx?.revert();
});

useHead({
  title: "Jade 的訓練室｜台北一對一重量訓練",
  meta: [
    {
      name: "description",
      content:
        "台北女性私人教練 Jade 的一對一重量訓練。從動作教學開始，依你的生活節奏安排課表，第一次 20 分鐘諮詢免費。",
    },
    {
      property: "og:title",
      content: "Jade 的訓練室｜台北一對一重量訓練",
    },
    {
      property: "og:description",
      content: "把動作練對，力氣自然會來。台北一對一私人教練，第一次諮詢免費。",
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
    <div ref="mainRef">
      <section class="hero" id="top">
        <div class="hero__inner">
          <div>
            <span class="eyebrow">台北 · 一對一重量訓練</span>
            <h1>把動作練對<br />力氣自然會來</h1>
            <p class="lead-text">
              我是
              Jade，一位私人教練。我不會要你一次練到極限，只想陪你把動作練對，讓身體慢慢變得更有力氣。
            </p>
            <div class="hero__actions">
              <a href="#consultation" class="btn btn-primary"
                >預約 20 分鐘免費諮詢</a
              >
              <a href="#programs" class="btn btn-secondary">看看課程</a>
            </div>
            <p class="hero__note">一次只帶一位學員，每堂課都由我本人上。</p>
          </div>

          <figure class="portrait">
            <div class="portrait__frame">
              <img
                :src="heroImg"
                alt="Jade 在訓練室做側弓步，手拿一顆壺鈴"
                class="portrait__img"
                width="640"
                height="640"
              />
              <span class="portrait__mask" aria-hidden="true"></span>
            </div>
            <figcaption>Jade，訓練中的一個普通下午</figcaption>
          </figure>
        </div>
      </section>

      <div class="stats reveal">
        <p v-for="item in stats" :key="item.label" class="stats__item">
          <span class="stats__value">{{ item.value }}</span>
          <span class="stats__label">{{ item.label }}</span>
        </p>
      </div>

      <section class="section" id="about">
        <div class="section__inner stance">
          <div class="reveal">
            <span class="eyebrow">我怎麼教</span>
            <h2>練得到，也要練得久</h2>
          </div>
          <div class="stance__body reveal">
            <p>
              很多人是因為受不了某一次的高強度課程，才不再運動的。<strong
                >我比較在意你三個月後、半年後還在不在練。</strong
              >
            </p>
            <p>
              所以我會花很多時間講動作，也會問你這週睡得好不好。有些日子你狀態差，我們就練輕一點，這樣也算數。
            </p>
            <p>
              我自己從二十出頭開始重訓，中間也有好幾次練到受傷、練到不想練。我知道那種感覺，也知道怎麼走出來。
            </p>
          </div>
        </div>
      </section>

      <section class="section section--tint" id="programs">
        <div class="section__inner">
          <div class="section-head reveal">
            <span class="eyebrow">課程</span>
            <h2>三種練法，看你現在在哪裡</h2>
            <p class="lead-text" style="margin-top: 1rem">
              不確定自己適合哪一種也沒關係，諮詢的時候我們一起決定。
            </p>
          </div>

          <div class="programs">
            <article
              v-for="(program, index) in programs"
              :key="program.name"
              class="program reveal"
            >
              <span class="program__num">0{{ index + 1 }}</span>
              <span class="program__meta">{{ program.meta }}</span>
              <h3>{{ program.name }}</h3>
              <p>{{ program.description }}</p>
              <p class="program__for">{{ program.forWho }}</p>
            </article>
          </div>
        </div>
      </section>

      <section class="section" id="journey">
        <div class="section__inner">
          <div class="section-head reveal">
            <span class="eyebrow">怎麼開始</span>
            <h2>第一次來，大概是這樣</h2>
          </div>

          <ol class="steps">
            <li
              v-for="(item, index) in steps"
              :key="item.title"
              class="step reveal"
            >
              <span class="step__num">{{ index + 1 }}</span>
              <h3>{{ item.title }}</h3>
              <p>{{ item.text }}</p>
            </li>
          </ol>
        </div>
      </section>

      <section class="section section--tint">
        <div class="section__inner about">
          <div class="reveal">
            <span class="eyebrow">關於 Jade</span>
            <h2>一個想把這件事好好做完的教練</h2>
          </div>
          <dl class="facts reveal">
            <div>
              <dt>教學方式</dt>
              <dd>一對一，每堂 60 分鐘</dd>
            </div>
            <div>
              <dt>地點</dt>
              <dd>台北市區的私人訓練室</dd>
            </div>
            <div>
              <dt>擅長</dt>
              <dd>重量訓練入門、力量進步、體態調整</dd>
            </div>
            <div>
              <dt>不太適合</dt>
              <dd>想要兩週速成、或只想要一份菜單自己做的人</dd>
            </div>
          </dl>
        </div>
      </section>

      <section class="section" id="faq">
        <div class="section__inner">
          <div class="section-head reveal">
            <span class="eyebrow">常見問題</span>
            <h2>預約前，大家常問的事</h2>
          </div>
          <div class="faq reveal">
            <details v-for="item in faqs" :key="item.question">
              <summary>{{ item.question }}</summary>
              <p>{{ item.answer }}</p>
            </details>
          </div>
        </div>
      </section>

      <section class="section section--tint" id="consultation">
        <div class="section__inner">
          <div class="cta reveal">
            <span class="eyebrow">預約</span>
            <h2>先聊聊，看看適不適合</h2>
            <p class="lead-text">
              寄信或私訊都可以，簡單說一下你的狀況和方便的時間，我通常會在一到兩天內回覆。
            </p>
            <div class="cta__buttons">
              <a href="mailto:hello@jadeflowstudio.com" class="btn btn-primary"
                >寄信預約諮詢</a
              >
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noreferrer"
                class="btn btn-secondary"
              >
                Instagram 私訊
              </a>
            </div>
            <p class="cta__fine">諮詢不收費，聊完不報名也完全沒關係。</p>
          </div>
        </div>
      </section>
    </div>
  </DefaultLayout>
</template>
