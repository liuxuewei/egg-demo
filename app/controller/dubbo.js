'use strict';
const Controller = require('egg').Controller;
const zkDubbo = require('../common/zk-dubbo');
const dubbo = require('../common/dubbo');

// dubbo manager http://localhost:9090/home
class DubboController extends Controller {
  // http://localhost:7001/public/run-dubbo?who=sss
  async runDubbo() {
    const { ctx } = this;
    ctx.set('content-type', 'application/json; charset=utf-8');
    const { who = 'guest' } = ctx.request.query;
    const dubbo2Result = await dubbo.service.dubboService.sayHello(who);
    const dubbo2ServiceResult = await this.ctx.service.testDubboService.sayHello(who);
    const zkDubboResult = await zkDubbo.AnnotationService.sayHello(who);
    ctx.body = {
      dubbo2Result,
      dubbo2ServiceResult,
      zkDubboResult,
    };
  }
}

module.exports = DubboController;
