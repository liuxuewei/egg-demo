'use strict';

// const { Dubbo, java, setting } = require('apache-dubbo-js');
const { Dubbo, java, setting } = require('dubbo2.js');
const interfaceName = 'com.dubbo.learn.dubbo.TestProviderService';
const interfaceVersion = '1.0.0';
const dubboSetting = setting.match(
  interfaceName, { version: interfaceVersion }
);
const dubboService = dubbo => dubbo.proxyService({
  dubboInterface: interfaceName,
  version: '1.0.0',
  methods: {
    Hello(who) {
      console.log('run hello', who);
      return [
        java.String(who),
      ];
    },
  },
});

const service = { dubboService };
// 实例化Dubbo， 入参主要是名称和 dubbo 接口的设置
const dubbo = new Dubbo({
  application: { name: 'dubbo-node-test' },
  register: '127.0.0.1:2181',
  // register: '127.0.0.1:8829',
  dubboSetting,
  service,
});
module.exports = dubbo;

