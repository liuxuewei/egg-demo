'use strict';
const Controller = require('egg').Controller;
// const ZKdubbo = require('../common/zk-dubbo');
const dubbo = require('../common/dubbo');

class DubboController extends Controller {
  // http://localhost:7001/public/run-dubbo?who=sss
  async runDubbo() {
    const { ctx } = this;
    const { who } = ctx.request.query;
    const result = await dubbo.service.dubboService.Hello(who);
    // const result = await ZKdubbo.testProviderService.Hello({ $class: 'java.lang.String', $: who });
    ctx.body = result;
  }
}

module.exports = DubboController;
