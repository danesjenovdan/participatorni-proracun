import PromisesOgImage from "./pages/PromisesOgImage.vue";
import PromisesPage from "./pages/PromisesPage.vue";

export default [
  {
    name: "promises",
    path: "/:slug?",
    component: PromisesPage,
  },
  {
    name: "promises-og-image",
    path: "/promises-og-image/:slug?",
    component: PromisesOgImage,
  },
];
