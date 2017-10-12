'use strict';

// had enabled by egg
exports.static = true;

// exports.sessionRedis = {
//   enable: true,
//   package: 'egg-session-redis',
// };

exports.redis = {
  enable: true,
  package: 'egg-redis',
};

exports.io = {
  enable: true,
  package: 'egg-socket.io',
};
