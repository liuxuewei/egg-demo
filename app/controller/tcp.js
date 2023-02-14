'use strict';
const Controller = require('egg').Controller;

class HomeController extends Controller {
  // http://localhost:7001/
  // http://localhost:7001/index.htm?name=马跃
  // http://localhost:7001/index.htm?name=刘学炜
  async index() {
    const { ctx } = this;
    const params = { type: 'getMachineTemperature', ...ctx.query };
    const result = await this.service.tcpClient.requestServer(params);
    ctx.body = result;
  }
}

module.exports = HomeController;
