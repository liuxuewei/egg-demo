// Don't modified this file, it's auto created by jar2proxy

'use strict';

/* eslint-disable */
/* jshint ignore:start */
module.exports = {
  'com.alibaba.onetouch.basedata.dynamicProperty.client.DynamicPropertyVO': {
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
     * column t_basedata_dynamic_property.service_id 业务ID
     */
    'serviceId': {
      'type': 'java.lang.String',
    },
    /**
     * column t_basedata_dynamic_property.service_name 业务名称
     */
    'serviceName': {
      'type': 'java.lang.String',
    },
    /**
     * column t_basedata_dynamic_property.type 字段类型，包括：text,hidden,radio,checkbox,select,textarea,mod
     */
    'type': {
      'type': 'java.lang.String',
    },
    /**
     * column t_basedata_dynamic_property.label 属性label
     */
    'label': {
      'type': 'java.lang.String',
    },
    /**
     * column t_basedata_dynamic_property.placeholder 属性placeholder
     */
    'placeholder': {
      'type': 'java.lang.String',
    },
    /**
     * column t_basedata_dynamic_property.value 初始值或默认值
     */
    'value': {
      'type': 'java.lang.String',
    },
    /**
     * column t_basedata_dynamic_property.rule 级联规则
     */
    'rule': {
      'type': 'java.lang.String',
    },
    /**
     * column t_basedata_dynamic_property.required 是否必填
     */
    'required': {
      'type': 'java.lang.Integer',
    },
    /**
     * column t_basedata_dynamic_property.module 组件名称
     */
    'module': {
      'type': 'java.lang.String',
    },
    /**
     * column t_basedata_dynamic_property.sequence 字段排列顺序，从小到大
     */
    'sequence': {
      'type': 'java.lang.Integer',
    },
    'config': {
      'type': 'java.util.List',
      'generic': [
        {'type':'com.alibaba.onetouch.basedata.dynamicConfig.client.DynamicConfigVO'},
      ]
    },
  },
};
/* jshint ignore:end */
/* eslint-enable */
