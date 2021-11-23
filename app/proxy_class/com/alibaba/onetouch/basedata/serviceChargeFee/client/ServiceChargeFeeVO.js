// Don't modified this file, it's auto created by jar2proxy

'use strict';

/* eslint-disable */
/* jshint ignore:start */
module.exports = {
  'com.alibaba.onetouch.basedata.serviceChargeFee.client.ServiceChargeFeeVO': {
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
    'chargeType': {
      'type': 'com.alibaba.onetouch.basedata.chargeType.client.ChargeTypeVO',
    },
    /**
     * column t_basedata_service_charge_fee.code 编码
     */
    'code': {
      'type': 'java.lang.String',
    },
    /**
     * column t_basedata_service_charge_fee.name 名称
     */
    'name': {
      'type': 'java.lang.String',
    },
    /**
     * column t_basedata_service_charge_fee.description 描述
     */
    'description': {
      'type': 'java.lang.String',
    },
    /**
     * column t_basedata_service_charge_fee.currency 币种
     */
    'currency': {
      'type': 'java.lang.String',
    },
    /**
     * column t_basedata_service_charge_fee.expression 表达式
     */
    'expression': {
      'type': 'java.lang.String',
    },
    /**
     * column t_basedata_service_charge_fee.disabled 是否禁用
     */
    'disabled': {
      'type': 'java.lang.Integer',
    },
    'chargeTypeId': {
      'type': 'java.lang.Long',
    },
    /**
     * column t_basedata_service_charge_fee.is_common 是否为公用类型
     */
    'isCommon': {
      'type': 'java.lang.Boolean',
    },
  },
};
/* jshint ignore:end */
/* eslint-enable */
