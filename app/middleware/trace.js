'use strict';

module.exports = options => {
  return async function trace(ctx, next) {
    ctx.set('trace-id', ctx.traceId);
    await next();
  };
};
