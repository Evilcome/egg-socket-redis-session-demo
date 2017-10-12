'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1507789721480_6172';

  // add your config here
  config.middleware = [];

  config.io = {
    namespace: {
      '/': {
        connectionMiddleware: [ 'auth' ],
      },
    },
  };

  config.redis = {
    client: {
      host: '127.0.0.1',
      port: 6379,
      password: '',
      db: 0,
    },
  };

  return config;
};
