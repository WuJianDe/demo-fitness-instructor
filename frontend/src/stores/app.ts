import { computed, ref } from "vue";
import { defineStore } from "pinia";

export const useAppStore = defineStore("app", () => {
  const coachName = ref("JADE");
  const siteName = ref("JADE ELITE");
  const city = ref("TAIPEI");
  const siteDescription = ref(
    "頂尖肌力與體能私人特訓，專為挑戰極限、追求絕對力量與美學的都會菁英打造。",
  );

  const siteTagline = computed(() => `超越界線，重塑絕對巔峰與強大氣場。`);

  return {
    city,
    coachName,
    siteDescription,
    siteName,
    siteTagline,
  };
});
