
'use strict';

module.exports = options => {
  return async function user(ctx, next) {
    ctx.logger.info(`===== ${ctx.userId} visited =====`);
    await next();
  };
};
