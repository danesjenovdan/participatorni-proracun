import viteSSR from "vite-ssr/vue";
import { createHead } from "@vueuse/head";
import { routes } from "./routes.js";
import App from "./App.vue";

function getBaseUrl() {
  const baseUrl = import.meta.env.BASE_URL || "http://localhost:3000/";
  return baseUrl.slice(baseUrl.indexOf("/", 8));
}

export default viteSSR(App, { routes, base: getBaseUrl }, ({ app }) => {
  const head = createHead();
  app.use(head);
  return { head };
});
