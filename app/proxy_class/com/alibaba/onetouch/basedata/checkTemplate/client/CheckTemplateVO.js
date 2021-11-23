// Don't modified this file, it's auto created by jar2proxy

'use strict';

/* eslint-disable */
/* jshint ignore:start */
module.exports = {
  'com.alibaba.onetouch.basedata.checkTemplate.client.CheckTemplateVO': {
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
     * 模板名称
     */
    'templateName': {
      'type': 'java.lang.String',
    },
    /**
     * 模板种类(看货、看厂等)
     * 对应枚举值中的value
     * @see com.alibaba.onetouch.basedata.type.client.TemplateBusinessTypeEnum
     */
    'templateCategory': {
      'type': 'java.lang.String',
    },
    /**
     * 模板类型（普通、事后补拍、默认、无订单）
     * 对应枚举值中的value
     * @see com.alibaba.onetouch.basedata.type.client.CheckTemplateTypeEnum
     */
    'templateType': {
      'type': 'java.lang.String',
    },
    /**
     * 是否有效（有效1，无效0）
     */
    'isValid': {
      'type': 'java.lang.Integer',
    },
    /**
     * 备注
     */
    'remark': {
      'type': 'java.lang.String',
    },
    /**
     * 监装项
     */
    'checkTemplateItemVOList': {
      'type': 'java.util.List',
      'generic': [
        {'type':'com.alibaba.onetouch.basedata.checkTemplate.client.CheckTemplateItemVO'},
      ]
    },
  },
};
/* jshint ignore:end */
/* eslint-enable */
