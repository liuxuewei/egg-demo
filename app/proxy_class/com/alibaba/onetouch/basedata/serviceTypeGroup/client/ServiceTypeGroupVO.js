// Don't modified this file, it's auto created by jar2proxy

'use strict';

/* eslint-disable */
/* jshint ignore:start */
module.exports = {
  'com.alibaba.onetouch.basedata.serviceTypeGroup.client.ServiceTypeGroupVO': {
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
     * column t_basedata_service_type_group.name 名称
     */
    'name': {
      'type': 'java.lang.String',
    },
    /**
     * column t_basedata_service_type_group.serial 排序
     */
    'serial': {
      'type': 'java.lang.Integer',
    },
    'serType': {
      'type': 'com.alibaba.onetouch.basedata.serviceType.client.ServiceTypeVO',
    },
    /**
     * 分组的子组
     */
    'childs': {
      'type': 'java.util.List',
      'generic': [
        {'type':'com.alibaba.onetouch.basedata.serviceTypeGroup.client.ServiceTypeGroupVO'},
      ]
    },
    'typeEnum': {
      'type': 'com.alibaba.onetouch.basedata.type.client.NodeTypeEnum',
      'isEnum': true,
    },
    'parentGroupId': {
      'type': 'java.lang.Long',
    },
    'type': {
      'type': 'java.lang.String',
    },
  },
};
/* jshint ignore:end */
/* eslint-enable */
