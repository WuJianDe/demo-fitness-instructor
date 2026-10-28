import { ref } from "vue";
import { defineStore } from "pinia";

export const useAppStore = defineStore("app", () => {
  const coachName = ref("Jade");
  const siteName = ref("Jade 的訓練室");
  const city = ref("台北");
  const siteDescription = ref(
    "台北一對一重量訓練，從把動作練對開始，依你的生活節奏安排課表。",
  );

  return {
    city,
    coachName,
    siteDescription,
    siteName,
  };
});
