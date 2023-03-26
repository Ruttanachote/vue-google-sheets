/// <reference types="vitest" />
import { resolve } from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import pkg from "./package.json";
import path from "path";

process.env.VITE_APP_VERSION = pkg.version;
if (process.env.NODE_ENV === "production") {
 process.env.VITE_APP_BUILD_EPOCH = new Date().getTime().toString();
}

export default defineConfig({
 plugins: [
  vue(),
  AutoImport({
   imports: [
    "vue",
    "vue-router",
    "@vueuse/head",
    "pinia",
    {
     "@/store": ["useStore"],
     "@/services/useDashboard.store": ["useDashboardStore"],
     "@/services/keepData.store": ["keepDataStore"],

    },
   ],
   dts: "src/auto-imports.d.ts",
   eslintrc: {
    enabled: true,
   },
  }),
  Components({
   dirs: ["src/components", "src/view/dashboards/components"],
   extensions: ["vue"],
  }),
 ],
 resolve: {
  alias: {
   "@": resolve(__dirname, "./src"),
  },
  dedupe: ["vue"],
 },
 build: {
  chunkSizeWarningLimit: 10000,
  sourcemap: false,
  rollupOptions: {
   cache: false,
  },
 },
 test: {
  include: ["tests/unit/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
 },
});
