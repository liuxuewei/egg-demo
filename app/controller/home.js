'use strict';
const Controller = require('egg').Controller;
// chrome-devtools://devtools/bundled/inspector.html?experiments=true&v8only=true&ws=127.0.0.1:9231/53bdffdd-ab48-44d8-990e-4d4f4b0064fc
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
    const mysql = ctx.app.mysql;
    let login = false;
    if (params.id) {
      ctx.session.userId = params.id;
      ctx.session.visited = 1;
      login = true;
      const insertRow = {
        name: params.id,
        login_time: mysql.literals.now, // `now()` on db server
      };
      const updateRow = {
        login_time: mysql.literals.now, // `now()` on db server
      };
      const options = {
        where: {
          name: '马跃',
          id: [ 2, 4 ],
        },
      };
      const insert = await mysql.insert('user_visit', insertRow); // 插入 user_visit
      ctx.logger.info('insert:%j', insert);
      const update = await mysql.update('user_visit', updateRow, options); // 更新 user_visit 表中的记录
      ctx.logger.info('update:%j', update);
    }
    // 查询一条
    const get = await this.app.mysql.get('user_visit', { name: 'mayue' });
    ctx.logger.info('get:%j', get);
    // 自定义查询条件
    const select = await this.app.mysql.select('user_visit', {
      // WHERE 条件，只会转成“IN”或“IS”或“=”，如果想使用like等特殊查询条件，请使用query查询方法
      where: { name: [ '马跃', 'mayue' ] },
      columns: [ 'login_time' ], // 要查询的表字段
      orders: [[ 'login_time', 'desc' ], [ 'id', 'desc' ]], // 排序方式
      limit: 10, // 返回数据量
      offset: 0, // 数据偏移量
    });
    ctx.logger.info('visit:%j', select);
    // 自定义sql，不能使用？占位符的请使用 mysql.escape() 包一层，使用场景包括where 大于小于、like等等
    // await this.app.mysql.query('update posts set name = ? where id = ?', ["马跃", 1]);


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
