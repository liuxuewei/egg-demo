
'use strict';
const nzd = require('node-zookeeper-dubbo');

const interfaceName = 'com.dll.dubbo.api.service.AnnotationService';
const interfaceVersion = '1.0.0';

const opt = {
  application: { name: 'dubbo-consumer' },
  register: '127.0.0.1:2181',
  dubboVer: '2.5.3',
  root: 'dubbo',
  dependencies: {
    AnnotationService: {
      interface: interfaceName,
      version: interfaceVersion,
      timeout: 6000, group: 'provider',
      methodSignature: { // optional
        sayHello: name => [{ $class: 'java.lang.String', $: name }],
      },
    },
  },
};

const Dubbo = new nzd(opt);

module.exports = Dubbo;
