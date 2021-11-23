// Don't modified this file, it's auto created by jar2proxy

'use strict';

/* eslint-disable */
/* jshint ignore:start */
module.exports = {
  'com.alibaba.onetouch.basedata.feRate.client.FeRateVO': {
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
     * column t_basedata_fe_rate.fe_date 汇率日期
     */
    'feDate': {
      'type': 'java.util.Date',
    },
    /**
     * column t_basedata_fe_rate.fe_time 汇率时间点
     */
    'feTime': {
      'type': 'java.lang.String',
    },
    /**
     * column t_basedata_fe_rate.package_id 套餐
     */
    'packageId': {
      'type': 'java.lang.Integer',
    },
    'packageName': {
      'type': 'java.lang.String',
    },
    /**
     * column t_basedata_fe_rate.bank_id 银行Id
     */
    'bankId': {
      'type': 'java.lang.Long',
    },
    /**
     * column t_basedata_fe_rate.currency_id 币种Id
     */
    'currencyId': {
      'type': 'java.lang.Long',
    },
    /**
     * column t_basedata_fe_rate.currency_code 币种code
     */
    'currencyCode': {
      'type': 'java.lang.String',
    },
    /**
     * column t_basedata_fe_rate.bank_rate 银行汇率
     */
    'bankRate': {
      'type': 'java.math.BigDecimal',
    },
    /**
     * column t_basedata_fe_rate.customer_rate 客户端汇率
     */
    'customerRate': {
      'type': 'java.math.BigDecimal',
    },
    'dueDate': {
      'type': 'java.util.Date',
    },
  },
};
/* jshint ignore:end */
/* eslint-enable */
