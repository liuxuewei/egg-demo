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
  session: true
};
