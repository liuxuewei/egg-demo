'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  nunjucks: {
    enable: true,
    package: 'egg-view-nunjucks',
  },
  tracer: {
    enable: true,
    package: 'egg-tracer',
  },
  userInterceptor: {
    enable: true,
    package: 'egg-user-interceptor',
  },
  session: true,
};
