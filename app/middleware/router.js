
'use strict';

const { NodeVM } = require('vm2');

const db = require('./db.json');

const matchLocalRouter = ctx => {
  // match这个方法文档没写，参考：https://github.com/eggjs/egg-router/blob/master/lib/router.js#L485
  try {
    const matchResult = ctx.app.router.match(ctx.path, ctx.method);
    // 如果本地匹配到合适的路由
    if (matchResult && matchResult.pathAndMethod.length) {
      ctx.logger.info('local router match success: ', matchResult);
      return matchResult;
    }
    return false;
  } catch (error) {
    ctx.logger.error('[egg-luyou] router.match error', error);
  }
};

module.exports = options => {
  return async function router(ctx, next) {
    const matchRouterResult = matchLocalRouter(ctx);
    if (matchRouterResult) {
      return await next();
    }
    const browserParams = (ctx.request.method === 'POST' ? ctx.request.body : ctx.request.query) || {};
    const sandbox = {
      $ctx: ctx,
      $browserParams: { ...browserParams },
    };
    const matchUrl = db.find(({ router }) => router === ctx.path);
    ctx.logger.info('matchUrl:%j', matchUrl);
    if (matchUrl) {
      try {
        const vm = new NodeVM({
          sandbox,
          timeout: 500,
          require: {
            external: true,
            builtin: ['*'],
          },
          wrapper: 'none',
        });
        const result = await vm.run(`return (async function(){${matchUrl.code}\n}).bind($ctx)();`, 'vm.js');
        ctx.body = {
          code: 0,
          data: result,
        };
        return;
      } catch (error) {
        ctx.logger.info('dynamicRunRouter error', error);
        ctx.body = {
          code: 500,
          message: error.message,
        };
      }
    } else {
      ctx.body = {
        code: 404,
        message: '请求失败，没有找到相关资源',
      };
    }
  };
};
