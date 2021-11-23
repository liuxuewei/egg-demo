'use strict';
const path = require('path');

module.exports = {
    eggFramework: 'egg',
    directoryToJar: path.join(__dirname, '../libs'),
    mavenRepository: 'http://mvnonline.alibaba-inc.com/mvn/repository',
    group: 'HSF',
    version: '1.0.0',
    uniqueId: 'uniqueId',
    tpl: 'proxy.js.tpl',
    method: {},
    responseTimeout: 10000,
    services: [
        {
            appname: 'onetouch-basedata',
            api: {
                IPartnerUserRemoteService: {
                    interfaceName: 'com.alibaba.onetouch.basedata.user.client.IPartnerUserRemoteService',
                },
                iPartnerCustomerRemoteServiceForInterceptor: {
                    interfaceName: 'com.alibaba.onetouch.basedata.partnerCustomer.IPartnerCustomerRemoteService',
                },
            },
            dependency: [
                {
                    groupId: 'com.alibaba.onetouch',
                    artifactId: 'gaea-client',
                    version: '1.0.37',
                },
                {
                    groupId: 'com.alibaba.onetouch',
                    artifactId: 'onetouch-base-api',
                    version: '2.3.7',
                },
            ],
        }
    ],
};
