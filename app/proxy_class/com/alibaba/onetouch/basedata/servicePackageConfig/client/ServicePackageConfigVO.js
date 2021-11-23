// Don't modified this file, it's auto created by jar2proxy

'use strict';

/* eslint-disable */
/* jshint ignore:start */
module.exports = {
  'com.alibaba.onetouch.basedata.servicePackageConfig.client.ServicePackageConfigVO': {
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
     * column t_basedata_service_package_config.service_type_id 服务类型ID
     */
    'serviceType': {
      'type': 'com.alibaba.onetouch.basedata.serviceType.client.ServiceTypeVO',
    },
    /**
     * column t_basedata_service_package_config.needless 不必填
     */
    'needless': {
      'type': 'java.lang.Boolean',
    },
    /**
     * column t_basedata_service_package_config.serial 排序
     */
    'serial': {
      'type': 'java.lang.Integer',
    },
    'isHidden': {
      'type': 'java.lang.Boolean',
    },
    'serviceTypeId': {
      'type': 'java.lang.Long',
    },
  },
};
/* jshint ignore:end */
/* eslint-enable */
