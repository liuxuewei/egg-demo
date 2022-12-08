'use strict';
const Service = require('egg').Service;
const { Dubbo, java, setting } = require('apache-dubbo-js');
const { dubboInvoker, matcher } = require('dubbo-invoker');
const interfaceName = 'com.dubbo.learn.dubbo.TestProviderService';
const interfaceVersion = '1.0.0';

const dubboSetting = setting.match(
  interfaceName, { version: '1.0.0' }
);

const dubboService = dubbo =>
  dubbo.proxyService({
    dubboInterface: interfaceName,
    version: interfaceVersion,
    methods: {
      sayHello(name) {
        console.log('run hello in service', name);
        return [ java.String(name) ];
      },
    },
  });

const service = { dubboService };
// 实例化Dubbo， 入参主要是名称和 dubbo 接口的设置
const dubbo = new Dubbo({
  application: { name: 'dubbo-node-consumer' },
  register: 'localhost:2181',
  dubboSetting,
  service,
});

dubbo.ready().then(() => {
  console.log('dubbo was ready');
});

dubbo.subscribe({
  onTrace: msg => {
    console.log(msg);
  },
});

dubbo.use(async function costTime(ctx, next) {
  console.log('before dubbo cost middleware', ctx);
  const startTime = Date.now();
  await next();
  const endTime = Date.now();
  console.log('end makecostTime->', endTime - startTime);
});


dubbo.use(
  dubboInvoker(
    matcher
      .match(interfaceName, { version: '1.0.0' })
  )
);
class TestDubboService extends Service {

  async sayHello(name) { // 暴露service 用于controller层调用
    return await dubbo.service.dubboService.sayHello(name);
  }

}

module.exports = TestDubboService;
