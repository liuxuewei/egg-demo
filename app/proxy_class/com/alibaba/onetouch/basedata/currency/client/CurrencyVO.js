// Don't modified this file, it's auto created by jar2proxy

'use strict';

/* eslint-disable */
/* jshint ignore:start */
module.exports = {
  'com.alibaba.onetouch.basedata.currency.client.CurrencyVO': {
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
     * column t_basedata_currency.en_name  货币英文名称
     */
    'enName': {
      'type': 'java.lang.String',
    },
    /**
     * column t_basedata_currency.exch_code  货币外汇代码
     */
    'exchCode': {
      'type': 'java.lang.String',
    },
    /**
     * column t_basedata_currency.customs_code  货币海关代码
     */
    'customsCode': {
      'type': 'java.lang.String',
    },
    /**
     * column t_basedata_currency.sequeuce  排序顺序
     */
    'sequeuce': {
      'type': 'java.lang.Long',
    },
    /**
     * column t_basedata_currency.sync_settle_rate 是否同步结汇汇率 0：是，1：否
     */
    'syncSettleRate': {
      'type': 'java.lang.Boolean',
      'defaultValue': false,
    },
  },
};
/* jshint ignore:end */
/* eslint-enable */
