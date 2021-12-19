
'use strict';
const nzd = require('node-zookeeper-dubbo');

const interfaceName = 'com.dubbo.learn.dubbo.TestProviderService';
const interfaceVersion = '1.0.0';

const opt = {
  application: { name: 'dubbo' },
  register: '127.0.0.1:2181',
  dubboVer: '1.0.0',
  root: 'dubbo',
  dependencies: {
    TestProviderService: {
      interface: interfaceName,
      version: interfaceVersion,
      timeout: 6000, group: 'provider',
      methodSignature: { // optional
        Hello: name => [{ $class: 'java.lang.String', $: name }],
      },
    },
  },
};

const Dubbo = new nzd(opt);

module.exports = Dubbo;
