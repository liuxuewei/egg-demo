// Don't modified this file, it's auto created by jar2proxy

'use strict';

/* eslint-disable */
/* jshint ignore:start */
module.exports = {
  'com.alibaba.onetouch.basedata.serviceTypeFilter.client.ServiceTypeFilterVO': {
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
     * column t_basedata_service_type_filter.service_info_id 信息ID
     */
    'serviceInfoId': {
      'type': 'java.lang.Long',
    },
    'groupId': {
      'type': 'java.lang.Long',
    },
    'serial': {
      'type': 'java.lang.Integer',
    },
    'serviceType': {
      'type': 'com.alibaba.onetouch.basedata.serviceType.client.ServiceTypeVO',
    },
    'serviceInfo': {
      'type': 'com.alibaba.onetouch.basedata.serviceInfo.client.ServiceInfoVO',
    },
    'serviceTypeGroup': {
      'type': 'com.alibaba.onetouch.basedata.serviceTypeGroup.client.ServiceTypeGroupVO',
    },
  },
};
/* jshint ignore:end */
/* eslint-enable */
