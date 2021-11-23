// Don't modified this file, it's auto created by jar2proxy

'use strict';

/* eslint-disable */
/* jshint ignore:start */
module.exports = {
  'com.alibaba.onetouch.basedata.chargeType.client.ChargeTypeVO': {
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
     * column t_basedata_charge_type.charge_type 费用类型：收入/支出；给服务商的费用放在cost_type中
     */
    'chargeTypeEnum': {
      'type': 'com.alibaba.onetouch.basedata.type.client.ChargeTypeEnum',
      'isEnum': true,
    },
    'chargeType': {
      'type': 'java.lang.String',
    },
    /**
     * column t_basedata_charge_type.need_settlement
     */
    'needSettlement': {
      'type': 'java.lang.Boolean',
    },
    /**
     * column t_basedata_charge_type.biz_type 业务类型
     */
    'bizType': {
      'type': 'java.lang.String',
    },
    /**
     * column t_basedata_charge_type.service_link 服务环节
     */
    'serviceLink': {
      'type': 'java.lang.String',
    },
    /**
     * column t_basedata_charge_type.tax_rate 税率
     */
    'taxRate': {
      'type': 'java.lang.String',
    },
    /**
     * column t_basedata_charge_type.invoice_content 开票内容
     */
    'invoiceContent': {
      'type': 'java.lang.String',
    },
    /**
     * column t_basedata_charge_type.product_code 产品段
     */
    'productCode': {
      'type': 'java.lang.String',
    },
  },
};
/* jshint ignore:end */
/* eslint-enable */
