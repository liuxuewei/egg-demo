// Don't modified this file, it's auto created by jar2proxy

'use strict';

/* eslint-disable */
/* jshint ignore:start */
module.exports = {
  'com.alibaba.onetouch.basedata.serviceInfoDataSource.client.ServiceInfoDataSourceVO': {
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
    /**
     * column t_basedata_service_info_data_source.disabled 是否可用
     */
    'disabled': {
      'type': 'java.lang.Boolean',
    },
    /**
     * column t_basedata_service_info_data_source.field 字段
     */
    'field': {
      'type': 'java.lang.String',
    },
    /**
     * column t_basedata_service_info_data_source.data 值（{value:text,value:text}）
     */
    'data': {
      'type': 'java.lang.String',
    },
    /**
     * column t_basedata_service_info_data_source.description 备注
     */
    'description': {
      'type': 'java.lang.String',
    },
    /**
     * column t_basedata_service_info_data_source.port_id 口岸ID
     */
    'portId': {
      'type': 'java.lang.Long',
    },
    /**
     * column t_basedata_service_info_data_source.tip 提示信息
     */
    'tip': {
      'type': 'java.lang.String',
    },
  },
};
/* jshint ignore:end */
/* eslint-enable */
