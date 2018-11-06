const server = require('./server/server');

module.exports = {
  baseUrl: '/participativni-proracun/',
  pluginOptions: {
    ssr: {
      port: 8801,
      extendServer: server,
    },
  },
};
