// Don't modified this file, it's auto created by jar2proxy

'use strict';

/* eslint-disable */
/* jshint ignore:start */
module.exports = {
  'com.alibaba.onetouch.basedata.servicePackage.client.ServicePackageVO': {
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
    /**
     * column t_basedata_service_package.customer_id 关联客户
     */
    'customerId': {
      'type': 'java.lang.Long',
    },
    /**
     * column t_basedata_service_package.start_time 开始时间
     */
    'startTime': {
      'type': 'java.util.Date',
    },
    /**
     * column t_basedata_service_package.end_time 结束时间
     */
    'endTime': {
      'type': 'java.util.Date',
    },
    /**
     * column t_basedata_service_package.seq 序列
     */
    'seq': {
      'type': 'java.lang.String',
    },
    'refreshTime': {
      'type': 'java.util.Date',
    },
    'businessType': {
      'type': 'java.lang.String',
    },
    /**
     * column t_basedata_service_package.tag_status 使用标签状态:1.免标
     */
    'tagStatus': {
      'type': 'java.lang.Integer',
    },
    'servicePackageConfigVOList': {
      'type': 'java.util.List',
      'defaultValue': [],
      'generic': [
        {'type':'com.alibaba.onetouch.basedata.servicePackageConfig.client.ServicePackageConfigVO'},
      ]
    },
    'servicePackageTagList': {
      'type': 'java.util.List',
      'generic': [
        {'type':'com.alibaba.onetouch.basedata.servicePackageTag.client.ServicePackageTagVO'},
      ]
    },
    'selectedPackageConfigList': {
      'type': 'java.util.List',
      'generic': [
        {'type':'com.alibaba.onetouch.basedata.servicePackageConfig.client.ServicePackageConfigVO'},
      ]
    },
  },
};
/* jshint ignore:end */
/* eslint-enable */
