// Don't modified this file, it's auto created by jar2proxy

'use strict';

/* eslint-disable */
/* jshint ignore:start */
module.exports = {
  'com.alibaba.onetouch.basedata.serviceCostFee.client.ServiceCostFeeVO': {
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
    'costType': {
      'type': 'com.alibaba.onetouch.basedata.costType.client.CostTypeVO',
    },
    /**
     * column t_basedata_service_cost_fee.code 编码
     */
    'code': {
      'type': 'java.lang.String',
    },
    /**
     * column t_basedata_service_cost_fee.name 名称
     */
    'name': {
      'type': 'java.lang.String',
    },
    /**
     * column t_basedata_service_cost_fee.description 描述
     */
    'description': {
      'type': 'java.lang.String',
    },
    /**
     * column t_basedata_service_cost_fee.currency 币种
     */
    'currency': {
      'type': 'java.lang.String',
    },
    /**
     * column t_basedata_service_cost_fee.expression 表达式
     */
    'expression': {
      'type': 'java.lang.String',
    },
    /**
     * column t_basedata_service_cost_fee.disabled 是否禁用
     */
    'disabled': {
      'type': 'java.lang.Integer',
    },
    /**
     * column t_basedata_service_cost_fee.cost_fee_type_id 支出费用种类
     */
    'costTypeId': {
      'type': 'java.lang.Long',
    },
  },
};
/* jshint ignore:end */
/* eslint-enable */
