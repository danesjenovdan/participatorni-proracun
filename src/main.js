import viteSSR from "vite-ssr/vue";
import { createHead } from "@vueuse/head";
import { routes } from "./routes.js";
import App from "./App.vue";

export default viteSSR(App, { routes }, ({ app }) => {
  const head = createHead();
  app.use(head);
  return { head };
});
