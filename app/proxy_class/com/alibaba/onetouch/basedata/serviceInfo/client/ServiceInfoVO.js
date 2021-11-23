// Don't modified this file, it's auto created by jar2proxy

'use strict';

/* eslint-disable */
/* jshint ignore:start */
module.exports = {
  'com.alibaba.onetouch.basedata.serviceInfo.client.ServiceInfoVO': {
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
     * column t_basedata_service_info.data_type 数据类型，例如文本、日期、枚举、实体
     */
    'dataTypeEnum': {
      'type': 'com.alibaba.onetouch.basedata.type.client.DataTypeEnum',
      'isEnum': true,
    },
    'dataType': {
      'type': 'java.lang.String',
    },
    /**
     * column t_basedata_service_info.info_type 信息类型，例如输入、输出
     */
    'infoTypeEnum': {
      'type': 'com.alibaba.onetouch.basedata.type.client.InfoTypeEnum',
      'isEnum': true,
    },
    'infoType': {
      'type': 'java.lang.String',
    },
    /**
     * column t_basedata_service_info.entity_resource 实体源
     */
    'entityResource': {
      'type': 'java.lang.String',
    },
    'dataSourceTypeEnum': {
      'type': 'com.alibaba.onetouch.basedata.type.client.DataSourceTypeEnum',
      'isEnum': true,
    },
    'dataSourceType': {
      'type': 'java.lang.String',
    },
    'entityName': {
      'type': 'java.lang.String',
    },
    'isRequired': {
      'type': 'java.lang.Boolean',
    },
  },
};
/* jshint ignore:end */
/* eslint-enable */
