import Promises from "./pages/Promises.vue";
import PromisesOgImage from "./pages/PromisesOgImage.vue";
// import Home from "./pages/Home.vue";

export const routes = [
  {
    name: "promises",
    path: "/:slug?",
    component: Promises,
  },
  {
    name: "promises-og-image",
    path: "/promises-og-image/:slug?",
    component: PromisesOgImage,
  },
  // {
  //   name: "home",
  //   path: "/",
  //   component: Home,
  // },
  // {
  //   name: "query",
  //   path: "/:query",
  //   component: Home,
  // },
];
