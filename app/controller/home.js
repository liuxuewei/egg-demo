'use strict';
const Controller = require('egg').Controller;

class HomeController extends Controller {
  // http://localhost:7001/
  async index() {
    const { ctx } = this;
    ctx.session.visited = ctx.session.visited ? (ctx.session.visited + 1) : 1;
    const visited = ctx.session.visited;
    const userId = ctx.session.userId;
    ctx.logger.info('userId:%s', userId);
    // const result = await ctx.proxy.iMonetouchCommunityRemoteService.getMotRolesByAliId(123456);
    ctx.set('content-type', 'text/html');
    ctx.body = `<p style="color:red;">hi, ${userId || 'guest'}, traceId: ${ctx.traceId}，visited：${visited}</p><script>console.log("xss success");</script>`;
  }
  // http://localhost:7001/say-hello.json?name=马跃
  // http://localhost:7001/say-hello.json?name=刘学炜
  async login() {
    const { ctx } = this;
    const params = (ctx.request.method === 'POST' ? ctx.request.body : ctx.request.query) || {};
    // 设置session

    let login = false;
    if (params.id) {
      ctx.session.userId = params.id;
      ctx.session.visited = 1;
      login = true;
    }

    ctx.logger.info('params:%j', params);

    ctx.body = {
      success: login,
      message: login ? '登录成功' : '登录失败',
      data: `hi, ${params.id || 'guest'}`,
    };

  }
  // http://localhost:7001/index.htm?name=马跃
  // http://localhost:7001/index.htm?name=刘学炜
  async home() {
    const { ctx } = this;
    const params = ctx.query;
    const result = {
      name: params.name || 'egg',
      title: '前端练习生',
    };
    // nunjucks 模版引擎 插件
    // npm install egg-view-nunjucks --save
    // ctx.body = await ctx.renderView('home.html', result);
    await ctx.render('home.html', result);
  }
}

module.exports = HomeController;
