module.exports = {
  appname: 'monetouch',
  api: {
    IMonetouchCommunityRemoteService: {
      interfaceName: 'com.alibaba.intl.sourcing.shared.monetouch.client.api.IMonetouchCommunityRemoteService',
    },
    IMonetouchAuthRemoteService: {
      interfaceName: 'com.alibaba.intl.sourcing.shared.monetouch.client.api.IMonetouchAuthRemoteService',
    },
  },
  dependency: [{
    groupId: 'com.alibaba.intl.sourcing.shared',
    artifactId: 'monetouch-client',
    version: '0.0.13',
  }],
};
