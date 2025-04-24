import { createSSRApp } from "vue";
import App from "./App.vue";
import MunicipalityCtaPage from "./pages/MunicipalityCtaPage.vue";
import RootPage from "./pages/RootPage.vue";

import "./assets/styles/main.scss";

export const routes = [
  {
    name: "root",
    path: "/",
    component: RootPage,
  },
  {
    name: "municipality-cta",
    path: "/pobuda/:slug",
    component: MunicipalityCtaPage,
  },
];

export const headInit = [
  {
    htmlAttrs: { lang: "sl" },
    title: "Participativni proračun",
    // titleTemplate: "%s | My Site",
  },
];

export function createApp() {
  return createSSRApp(App);
}
