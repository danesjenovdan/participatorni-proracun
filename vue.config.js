const server = require('./server/server');

module.exports = {
  baseUrl: process.env.NODE_ENV === 'production' ? '/participativni-proracun/' : '/',
  pluginOptions: {
    ssr: {
      port: 8801,
      extendServer: server,
    },
  },
};
