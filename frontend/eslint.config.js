import pluginVue from "eslint-plugin-vue";
import defineConfigWithVueTs, {
  vueTsConfigs,
} from "@vue/eslint-config-typescript";

export default defineConfigWithVueTs(
  {
    name: "project/ignores",
    ignores: ["dist/**", "node_modules/**"],
  },
  pluginVue.configs["flat/essential"],
  vueTsConfigs.recommended,
);
