'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    const params = ctx.query;
    ctx.body = `hi, ${params.name || 'egg'}`;
  }
}

module.exports = HomeController;
