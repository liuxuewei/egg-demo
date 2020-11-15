'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  // http://localhost:7001/
  async index() {
    const { ctx } = this;
    const params = ctx.query;
    ctx.body = `hi, ${params.name || 'egg'}`;
  }
  //http://localhost:7001/index.htm?name=%3Cscript%3Ealert(1)%3C/script%3E%E9%A9%AC%E8%B7%83
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
