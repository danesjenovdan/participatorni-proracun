import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import { routes } from "./routes.js";

const app = createApp(App);
// const head = createHead();
const router = createRouter({
  history: createWebHistory(),
  routes,
});
app.use(router);
app.mount("#app");
