'use strict';
const path = require('path');

module.exports = {
  // directoryToJar: path.join(__dirname, '../libs'),
  mavenRepository: 'http://mvnonline.alibaba-inc.com/mvn/repository',
  group: 'DUBBO',
  version: '1.0.0',
  tpl: path.join(__dirname, 'proxy.js.tpl'),
  responseTimeout: 5000,
  services: [{
    appName: 'monetouch',
    api: {
      IMonetouchCommunityRemoteService: {
        interfaceName: 'com.alibaba.intl.sourcing.shared.monetouch.client.api.IMonetouchCommunityRemoteService',
      },
      TestService: {
        interfaceName: 'com.alibaba.intl.sourcing.shared.monetouch.client.api.IMonetouchAuthRemoteService',
      },
    },
    dependency: [{
      groupId: 'com.alibaba.intl.sourcing.shared',
      artifactId: 'monetouch-client',
      version: '0.0.13',
    }],
  }],
};
