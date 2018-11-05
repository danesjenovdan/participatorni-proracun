import { createApp } from './main';

export default context =>
  new Promise(async (resolve, reject) => {
    const { app, router } = await createApp();
    const meta = app.$meta();

    router.push(context.url);

    // eslint-disable-next-line no-param-reassign
    context.meta = meta;

    router.onReady(() => {
      // this is used if you want to do data prefetching on server render
      // const matchedComponents = router.getMatchedComponents();
      // Promise.all([]).then(() => {
      //   resolve(app);
      // });
      resolve(app);
    }, reject);
  });
