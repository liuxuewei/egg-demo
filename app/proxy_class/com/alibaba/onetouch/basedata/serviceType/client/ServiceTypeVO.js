// Don't modified this file, it's auto created by jar2proxy

'use strict';

/* eslint-disable */
/* jshint ignore:start */
module.exports = {
  'com.alibaba.onetouch.basedata.serviceType.client.ServiceTypeVO': {
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
    'code': {
      'type': 'java.lang.String',
    },
    'name': {
      'type': 'java.lang.String',
    },
    'description': {
      'type': 'java.lang.String',
    },
    'disabled': {
      'type': 'java.lang.Boolean',
      'defaultValue': false,
    },
    'serviceTypeGroupList': {
      'type': 'java.util.List',
      'defaultValue': [],
      'generic': [
        {'type':'com.alibaba.onetouch.basedata.serviceTypeGroup.client.ServiceTypeGroupVO'},
      ]
    },
    'serviceTypeInputList': {
      'type': 'java.util.List',
      'defaultValue': [],
      'generic': [
        {'type':'com.alibaba.onetouch.basedata.serviceTypeInput.client.ServiceTypeInputVO'},
      ]
    },
    'serviceTypeFilterList': {
      'type': 'java.util.List',
      'defaultValue': [],
      'generic': [
        {'type':'com.alibaba.onetouch.basedata.serviceTypeFilter.client.ServiceTypeFilterVO'},
      ]
    },
  },
};
/* jshint ignore:end */
/* eslint-enable */
