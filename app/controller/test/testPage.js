

'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    const params = ctx.query;
    // const result = this.service.xxx
    await ctx.render('test/testPage.html', params);
  }
}

module.exports = HomeController;
