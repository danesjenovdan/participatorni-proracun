const server = require('./server/server');

module.exports = {
  baseUrl: process.env.NODE_ENV === 'production' ? '/2018/zaobljube/' : '/',
  pluginOptions: {
    ssr: {
      host: true,
      port: 8801,
      // extendServer: server,
    },
  },
};
