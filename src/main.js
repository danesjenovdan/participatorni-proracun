import Vue from 'vue';
import { createRouter } from './router';
import App from './App.vue';

Vue.config.productionTip = false;

export async function createApp({
  beforeApp = () => {},
  afterApp = () => {},
} = {}) {
  const router = createRouter();

  await beforeApp({
    router,
  });

  const app = new Vue({
    router,
    render: h => h(App),
  });

  const result = {
    app,
    router,
  };

  await afterApp(result);

  return result;
}
