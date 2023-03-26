import { createRouter, createWebHistory } from "vue-router";
import { menu } from "./view";

const menusRoutes = menu.map(({ path, name, component, ...config }) => ({
  path,
  name,
  component,
  // meta: { isTool: true, layout: layouts.toolLayout, name, ...config },
}));
const menusRedirectRoutes = menu
  .filter(({ redirectFrom }) => redirectFrom && redirectFrom.length > 0)
  .flatMap(
    ({ path, redirectFrom }) =>
      redirectFrom?.map((redirectSource) => ({
        path: redirectSource,
        redirect: path,
      })) ?? []
  );

// import Index from "@/view/dashboards/contents/PageHome.vue";
const routes: any = [
  // { path: "/", component: Index },
  // {
  //   path: "/home",
  //   component: Index,
  //   meta: {
  //     title: "Vite + Vue + TypeScript + Tailwind",
  //   },
  // },
  ...menusRoutes,
  ...menusRedirectRoutes,
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeResolve((to, from, next) => {
  // Stop progress bar
  // loadingBar.finish()
  next();
});

export default router;
