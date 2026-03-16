import { createHead } from "@vueuse/head";
import { createPinia, type StateTree } from "pinia";
import { ViteSSG } from "vite-ssg";

import App from "./App.vue";
import { routes } from "./router";
import "./styles/main.scss";

interface AppInitialState {
  pinia?: StateTree;
}

export const createApp = ViteSSG(App, { routes }, ({ app, initialState }) => {
  const head = createHead();
  const pinia = createPinia();
  const state = initialState as AppInitialState;

  app.use(head);
  app.use(pinia);

  if (import.meta.env.SSR) {
    state.pinia = pinia.state.value;
    return;
  }

  if (state.pinia) {
    pinia.state.value = state.pinia;
  }
});
