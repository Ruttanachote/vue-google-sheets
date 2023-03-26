import { createApp } from "vue";
import { createPinia } from "pinia";
import { createI18n } from "vue-i18n";
import { createHead } from "@vueuse/head";
import App from "./App.vue";
import router from "./router";
import en from "./language/en.json";
import th from "./language/th.json";
import "./assets/index.postcss";
import "./assets/main.css";
import "./plugins/axios";

const head = createHead();
const app = createApp(App);
const pinia = createPinia();
const i18n = createI18n({
  locale: localStorage.getItem("locale") ?? "en",
  globalInjection: true,
  legacy: false,
  fallbackLocale: "en",
  messages: {
    en,
    th,
  },
});

app.use(pinia);
app.use(router);
app.use(head);
app.use(i18n);

app.mount("#app");




