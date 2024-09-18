const server = require('./server/server');

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/2018/' : '/',
  pluginOptions: {
    ssr: {
      host: true,
      port: 8801,
      extendServer: server,
    },
  },
};
