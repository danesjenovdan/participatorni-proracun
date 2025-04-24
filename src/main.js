// eslint-disable-next-line import/no-unresolved
import { CanonicalPlugin } from "unhead/plugins";
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

export const headOptions = {
  plugins: [
    import.meta.env.VITE_CANONICAL_URL?.startsWith("http")
      ? CanonicalPlugin({ canonicalHost: import.meta.env.VITE_CANONICAL_URL })
      : undefined,
  ].filter(Boolean),
  init: [
    {
      htmlAttrs: { lang: "sl" },
    },
  ],
};

export function createApp() {
  return createSSRApp(App);
}
