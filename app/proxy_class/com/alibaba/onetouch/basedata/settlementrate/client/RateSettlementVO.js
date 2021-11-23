// Don't modified this file, it's auto created by jar2proxy

'use strict';

/* eslint-disable */
/* jshint ignore:start */
module.exports = {
  'com.alibaba.onetouch.basedata.settlementrate.client.RateSettlementVO': {
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
     * column t_basedata_rate_settlement.price_date 报价日期
     */
    'priceDate': {
      'type': 'java.util.Date',
    },
    /**
     * column t_basedata_rate_settlement.price_time 汇率挂牌时间
     */
    'priceTime': {
      'type': 'java.util.Date',
    },
    /**
     * column t_basedata_rate_settlement.currency 币种code
     */
    'currency': {
      'type': 'java.lang.String',
    },
    /**
     * column t_basedata_rate_settlement.currency_id 币种id
     */
    'currencyId': {
      'type': 'java.lang.Long',
    },
    /**
     * column t_basedata_rate_settlement.rate_type 汇率类型
     */
    'rateType': {
      'type': 'java.lang.Long',
    },
    /**
     * column t_basedata_rate_settlement.rate_settle 结汇汇率
     */
    'rateSettle': {
      'type': 'java.math.BigDecimal',
    },
    /**
     * column t_basedata_rate_settlement.rate_pay 付汇汇率
     */
    'ratePay': {
      'type': 'java.math.BigDecimal',
    },
    /**
     * column t_basedata_rate_settlement.is_confirmed 是否已经审核确认该结汇汇率可用于结汇 0:已确认 1:未确认 默认为未确认
     */
    'isConfirmed': {
      'type': 'java.lang.Boolean',
    },
    /**
     * column t_basedata_rate_settlement.confirmed_user_id 审核确认结汇汇率用户id
     */
    'confirmedUserId': {
      'type': 'java.lang.Long',
    },
    /**
     * column t_basedata_rate_settlement.batch_numb 同步汇率批次号
     */
    'batchNumb': {
      'type': 'java.lang.Long',
    },
    /**
     * 复核时间
     */
    'reviewDate': {
      'type': 'java.util.Date',
    },
    /**
     * 复核用户ID
     */
    'reviewUserId': {
      'type': 'java.lang.Long',
    },
    /**
     * 复核用户名称
     */
    'reviewUserName': {
      'type': 'java.lang.String',
    },
    /**
     * 是否已复核
     */
    'isReviewed': {
      'type': 'java.lang.Boolean',
    },
  },
};
/* jshint ignore:end */
/* eslint-enable */
