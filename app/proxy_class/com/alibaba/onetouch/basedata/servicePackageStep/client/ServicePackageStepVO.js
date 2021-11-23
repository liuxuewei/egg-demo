// Don't modified this file, it's auto created by jar2proxy

'use strict';

/* eslint-disable */
/* jshint ignore:start */
module.exports = {
  'com.alibaba.onetouch.basedata.servicePackageStep.client.ServicePackageStepVO': {
    'id': {
      'type': 'java.lang.Long',
    },
    'gmtCreate': {
      'type': 'java.util.Date',
    },
    'gmtModified': {
      'type': 'java.util.Date',
    },
    'deleted': {
      'type': 'java.lang.Boolean',
      'defaultValue': false,
    },
    'creator': {
      'type': 'com.alibaba.onetouch.base.framework.user.UserVO',
      'defaultValue': {'deleted':false},
    },
    'updater': {
      'type': 'com.alibaba.onetouch.base.framework.user.UserVO',
      'defaultValue': {'deleted':false},
    },
    'parentId': {
      'type': 'java.lang.Long',
    },
    /**
     * column t_basedata_service_package_step.step 步骤
     */
    'step': {
      'type': 'java.lang.Integer',
    },
    /**
     * column t_basedata_service_package_step.name 名称
     */
    'name': {
      'type': 'java.lang.String',
    },
    'serviceStepGroupList': {
      'type': 'java.util.List',
      'generic': [
        {'type':'com.alibaba.onetouch.basedata.serviceStepGroup.client.ServiceStepGroupVO'},
      ]
    },
  },
};
/* jshint ignore:end */
/* eslint-enable */
