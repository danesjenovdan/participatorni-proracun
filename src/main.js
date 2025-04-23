import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import MunicipalityCtaPage from "./pages/MunicipalityCtaPage.vue";
import RootPage from "./pages/RootPage.vue";

import "./assets/styles/main.scss";

const routes = [
  {
    name: "root",
    path: "/",
    component: RootPage,
  },
  {
    name: "municipality-cta",
    path: "/:slug",
    component: () => MunicipalityCtaPage,
  },
];

const app = createApp(App);

// TODO: const head = createHead();

const router = createRouter({
  history: createWebHistory(),
  routes,
});
app.use(router);

app.mount("#app");
