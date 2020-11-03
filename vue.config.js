const server = require('./server/server');

module.exports = {
  baseUrl: process.env.NODE_ENV === 'production' ? '/participativni-proracun/zaobljube/' : '/',
  pluginOptions: {
    ssr: {
      port: 8801,
      extendServer: server,
    },
  },
};
