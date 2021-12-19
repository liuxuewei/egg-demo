'use strict';
const Controller = require('egg').Controller;
// const zkDubbo = require('../common/zk-dubbo');
const dubbo = require('../common/dubbo');

class DubboController extends Controller {
  // http://localhost:7001/public/run-dubbo?who=sss
  async runDubbo() {
    const { ctx } = this;
    const { who = 'guest' } = ctx.request.query;
    const { res, err } = await dubbo.service.dubboService.sayHello(who);
    // const result2 = await zkDubbo.AnnotationService.sayHello(who);
    // const result3 = await this.ctx.service.testDubboService.sayHello(who);
    ctx.body = {
      res,
      err,
    };
  }
}

module.exports = DubboController;
