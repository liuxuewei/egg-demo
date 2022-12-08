
'use strict';

module.exports = options => {
  return async function permission(ctx, next) {
    const params = ctx.query;
    const blackList = options.blackList || [];
    ctx.logger.info('blackList', blackList);
    if (blackList.indexOf(params.name) > -1) {
      ctx.body = {
        code: 403,
        success: false,
        message: '没有权限',
      };
      ctx.status = 403;
      return;
    }
    await next();
  };
};
