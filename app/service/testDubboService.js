'use strict';
const nzd = require('node-zookeeper-dubbo');
const Service = require('egg').Service;

const opt = {
  java: require('js-to-java'),
  application: { name: 'dubbo-consumer' },
  register: '127.0.0.1:2181',
  dubboVer: '2.5.3',
  dependencies: {
    AnnotationService: {
      interface: 'com.dll.dubbo.api.service.AnnotationService',
      version: '1.0.0',
      timeout: 5000,
      methodSignature: {
        sayHello: name => [{ $class: 'java.lang.String', $: name }],
      },
    },
  },
};
const Dubbo = new nzd(opt);

class TestDubboService extends Service {

  async sayHello(name) { // 暴露service 用于controller层调用
    return Dubbo.AnnotationService.sayHello(name);
  }

}

module.exports = TestDubboService;
