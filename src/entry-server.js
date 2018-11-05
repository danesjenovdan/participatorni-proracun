import { createApp } from './main';

export default context =>
  new Promise(async (resolve, reject) => {
    const { app, router } = await createApp();

    router.push(context.url);

    router.onReady(() => {
      // this is used if you want to do data prefetching on server render
      // const matchedComponents = router.getMatchedComponents();

      Promise.all([]).then(() => {
        resolve(app);
      });
    }, reject);
  });
