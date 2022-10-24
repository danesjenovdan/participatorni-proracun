import Promises from "./pages/Promises.vue";
// import Home from "./pages/Home.vue";
// import OgImage from "./pages/OgImage.vue";

export const routes = [
  {
    name: "promises",
    path: "/:slug?",
    component: Promises,
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
  // {
  //   name: "og-image-query",
  //   path: "/og-image/:query",
  //   component: OgImage,
  // },
];
