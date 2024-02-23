'use strict';
const Controller = require('egg').Controller;
// chrome-devtools://devtools/bundled/inspector.html?experiments=true&v8only=true&ws=127.0.0.1:9231/53bdffdd-ab48-44d8-990e-4d4f4b0064fc

const promiseCall = function(name) {
  const callback = function(reslove, reject) {
    if (name === '马跃') {
      const timeoutFunc = function() {
        reslove({
          code: 200,
          data: 'mayue',
          success: true,
        });
      };
      setTimeout(timeoutFunc, 3000);
    } else {
      reject(JSON.stringify({
        code: 500,
        data: null,
        success: false,
      }));
    }
  };
  return new Promise(callback);
};

class HomeController extends Controller {
  // http://localhost:7001/

  async promise() {
    const { ctx } = this;
    const { name = 'mayue' } = ctx.request.query;
    const result = await promiseCall(name);
    ctx.body = result;
  }

  async proxyInvoke() {
    const { ctx } = this;
    const userId = ctx.userId;
    const askId = ctx.query.askId;
    console.log(this.app.config.proxy);
    const result = await ctx.proxy.iMonetouchCommunityRemoteService.getAskDetail(userId, askId);
    ctx.body = result;
  }

  async index() {
    const { ctx } = this;
    ctx.session.visited = ctx.session.visited ? (ctx.session.visited + 1) : 1;
    const visited = ctx.session.visited;
    const userId = ctx.session.userId;
    ctx.logger.info('userId:%s', userId);
    // const result = await ctx.proxy.iMonetouchCommunityRemoteService.getMotRolesByAliId(123456);
    ctx.set('content-type', 'text/html;charset=utf-8');
    ctx.body = `<p style="color:red;">hi, ${userId || 'guest'}, traceId: ${ctx.traceId}，visited:${visited}</p>`;
    // ctx.body = {
    //   code: 200,
    //   data: {},
    //   success: true,
    // };
  }
  // http://localhost:7001/login?name=马跃
  // http://localhost:7001/login?name=刘学炜
  async login() {
    const { ctx } = this;
    const params = (ctx.request.method === 'POST' ? ctx.request.body : ctx.request.query) || {};
    // 设置session
    let login = false;
    if (params.name) {
      ctx.session.userId = params.name;
      ctx.session.visited = 1;
      login = true;
    }
    ctx.body = {
      success: login,
      message: login ? '登录成功' : '登录失败',
      data: `hi, ${params.name || 'guest'}`,
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
  async drawImage() {
    const pannel = { width: 500, height: 889.25 };
    const processorList = [
      { type: 'IMAGE', url: '{{ bgImage }}', ...pannel, x: 0, y: 0 },
      { type: 'IMAGE', url: '{{ avatar }}', width: 202, height: 202, x: 145, y: 262 },
      {
        type: 'TEXT',
        text: '{{ employeeName }}',
        fontSize: 40,
        lineHeight: 40,
        color: '#fad877',
        textAlign: 'center',
        with: pannel.width,
        x: 0,
        y: 470,
      },
      {
        type: 'TEXT',
        text: '{{ partnerName }}',
        fontSize: 20,
        lineHeight: 20,
        color: '#fad877',
        textAlign: 'center',
        with: pannel.width,
        x: 0,
        y: 530,
      },
      {
        type: 'TEXT',
        text: '破{{ gmv }}万',
        fontSize: 50,
        lineHeight: 50,
        color: '#fad877',
        textAlign: 'center',
        with: pannel.width,
        x: 0,
        y: 750,
      },
    ];
    const renderedProcessorsString = await this.ctx.renderString(
      JSON.stringify(processorList),
      {
        partnerName: '供应商1号',
        employeeName: '马跃',
        gmv: '100',
        bgImage: 'https://img.alicdn.com/imgextra/i3/O1CN012ihksh1ycqhxUxJRF_!!6000000006600-0-tps-750-1232.jpg',
        avatar: 'https://sc01.alicdn.com/kf/H6cc42410f796474a8beb23f6ffed75b9i.jpg',
      }
    );

    const configs = {
      meta: { ...pannel, mineType: 'image/jpeg', bgColor: '', pixelRatio: 2 },
      processors: JSON.parse(renderedProcessorsString),
    };
    console.log('configs', configs);
    const buffer = await this.service.draw.parallel(configs);
    this.ctx.set('content-type', configs.meta.mineType || 'image/png');
    this.ctx.set('content-length', `${buffer.length}`);
    this.ctx.body = buffer;
  }
}

module.exports = HomeController;
