'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  // http://localhost:7001/
  async index() {
    const { ctx } = this;
    const params = ctx.query;
    ctx.body = `<p>hi, ${params.name || 'egg'}</p>`;
  }
  // http://localhost:7001/say-hello.json?name=马跃
  async sayHello() {
    const { ctx } = this;
    const params = ctx.query;
    ctx.body = {
      success: true,
      message: '请求成功',
      data: `hi, ${params.name || 'egg'}`
    };
  }
  //http://localhost:7001/index.htm?name=马跃
  //http://localhost:7001/index.htm?name=刘学炜
  async home() {
    const { ctx } = this;
    const params = ctx.query;
    const result = {
      name: params.name || 'egg',
      title: '前端练习生'
    }
    await ctx.render('home.html', result);
  }
}

module.exports = HomeController;
