import Vue from 'vue';
import Meta from 'vue-meta';
import Router from 'vue-router';
import Home from './views/Home.vue';
import OgImage from './views/OgImage.vue';

Vue.use(Router);
Vue.use(Meta);

export function createRouter() {
  return new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
      {
        path: '/',
        name: 'home',
        component: Home,
      },
      {
        path: '/:query',
        name: 'query',
        component: Home,
      },
      {
        path: '/og-image/:query',
        name: 'og-image-query',
        component: OgImage,
      },
    ],
  });
}
