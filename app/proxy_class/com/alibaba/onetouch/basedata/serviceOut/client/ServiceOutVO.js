// Don't modified this file, it's auto created by jar2proxy

'use strict';

/* eslint-disable */
/* jshint ignore:start */
module.exports = {
  'com.alibaba.onetouch.basedata.serviceOut.client.ServiceOutVO': {
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
     * column t_basedata_service_out.service_id 环节ID
     */
    'serviceId': {
      'type': 'java.lang.Long',
    },
    /**
     * column t_basedata_service_out.service_info_id 信息文件ID
     */
    'serviceInfoId': {
      'type': 'java.lang.Long',
    },
    /**
     * column t_basedata_service_out.sort 排序号
     */
    'sort': {
      'type': 'java.lang.Integer',
    },
    /**
     * column t_basedata_service_out.expression 规则表达式
     */
    'expression': {
      'type': 'java.lang.String',
    },
  },
};
/* jshint ignore:end */
/* eslint-enable */
