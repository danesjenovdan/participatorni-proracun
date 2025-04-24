// eslint-disable-next-line import/no-unresolved
import { createHead } from "@unhead/vue/server";
import { createMemoryHistory, createRouter } from "vue-router";
import { renderToString } from "vue/server-renderer";
import { createApp, headOptions, routes } from "./main.js";

export default async function render(url) {
  const app = createApp();
  const router = createRouter({
    history: createMemoryHistory(import.meta.env.BASE_URL),
    routes,
  });
  const head = createHead(headOptions);

  app.use(router);
  app.use(head);

  try {
    await router.push(url);
    await router.isReady();
  } catch (err) {
    throw new Error(err);
  }

  const matchedComponents = router.currentRoute.value.matched;
  if (!matchedComponents.length) {
    throw new Error("404");
  }

  const ctx = {};
  const html = await renderToString(app, ctx);
  if (ctx.statusCode === 404) {
    throw new Error("404");
  }

  return { html, head };
}
