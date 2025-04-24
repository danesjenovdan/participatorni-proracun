// eslint-disable-next-line import/extensions, import/no-unresolved
import { createHead } from "@unhead/vue/client";
import { createRouter, createWebHistory } from "vue-router";
import { createApp, headInit, routes } from "./main.js";

const app = createApp();
const router = createRouter({ history: createWebHistory(), routes });
const head = createHead({ init: headInit });

app.use(router);
app.use(head);

router.isReady().then(() => {
  app.mount("#app", true);
});
