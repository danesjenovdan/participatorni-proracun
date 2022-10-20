const server = require('./server/server');

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/participativni-proracun/' : '/',
  pluginOptions: {
    ssr: {
      port: 8801,
      extendServer: server,
    },
  },
};
