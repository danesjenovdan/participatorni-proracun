// eslint-disable-next-line import/no-unresolved
import { createHead } from "@unhead/vue/client";
import { createRouter, createWebHistory } from "vue-router";
import { createApp, headOptions, routes } from "./main.js";

const app = createApp();
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return { top: 0 };
  },
});
const head = createHead(headOptions);

app.use(router);
app.use(head);

router.isReady().then(() => {
  app.mount("#app", true);
});
