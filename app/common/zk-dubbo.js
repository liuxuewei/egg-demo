
'use strict';
const nzd = require('node-zookeeper-dubbo-plus');

const opt = {
  application: { name: 'dubbo-node-consumer' },
  register: '127.0.0.1:2181',
  dubboVer: '2.6.5', // 2.6.x 以上版本，需要node-zookeeper-dubbo-plus才支持，但没有处理attachments
  root: 'dubbo',
  dependencies: {
    AnnotationService: {
      interface: 'com.dubbo.learn.dubbo.TestProviderService',
      version: '1.0.0',
      timeout: 6000,
      // group: 'provider',
      methodSignature: { // optional
        sayHello: name => [{ $class: 'java.lang.String', $: name }],
      },
    },
  },
};

// const customerObj = {
//   $class: 'com.xxx.XXXDTO',
//   $: {
//     a: 1,
//     b: 'test',
//     c: {$class: 'java.lang.Long', $: 123}
//   }
// };

const Dubbo = new nzd(opt);

Dubbo.on('service:changed', event => console.log(event));

module.exports = Dubbo;
