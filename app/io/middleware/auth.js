'use strict';

module.exports = app => {
  return function* (next) {

    // NOTE: 如果用了 session-redis, 这里就拿不到 session 了，
    // 如果尝试把 plugin 中 sessionRedis 注释掉，既可以访问到。
    // ISSUES: https://github.com/eggjs/egg/issues/1416
    if (!this.session.user) {
      return this.socket.emit('forbidden');
    }

    yield* next;
  };
};
