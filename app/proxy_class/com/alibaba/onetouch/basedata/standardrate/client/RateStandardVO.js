// Don't modified this file, it's auto created by jar2proxy

'use strict';

/* eslint-disable */
/* jshint ignore:start */
module.exports = {
  'com.alibaba.onetouch.basedata.standardrate.client.RateStandardVO': {
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
     * column t_basedata_rate_standard.price_date 报价日期
     */
    'priceDate': {
      'type': 'java.util.Date',
    },
    /**
     * column t_basedata_rate_standard.source_currency 源币种Id
     */
    'sourceCurrency': {
      'type': 'java.lang.String',
    },
    /**
     * column t_basedata_rate_standard.target_currency 目标币种Id
     */
    'targetCurrency': {
      'type': 'java.lang.String',
    },
    /**
     * column t_basedata_rate_standard.source_currency_id 源币种id
     */
    'sourceCurrencyId': {
      'type': 'java.lang.Long',
    },
    /**
     * column t_basedata_rate_standard.target_currency_id 目标币种id
     */
    'targetCurrencyId': {
      'type': 'java.lang.Long',
    },
    /**
     * column t_basedata_rate_standard.spot_rate_buy (现汇)买入牌价
     */
    'spotRateBuy': {
      'type': 'java.math.BigDecimal',
    },
    /**
     * column t_basedata_rate_standard.rate_out (现汇)卖出牌价
     */
    'spotRateSell': {
      'type': 'java.math.BigDecimal',
    },
    /**
     * column t_basedata_rate_standard.central_parity_rate (汇率中间价)基准价
     */
    'centralParityRate': {
      'type': 'java.math.BigDecimal',
    },
    /**
     * column t_basedata_rate_standard.oof_rate_buy (现钞)买入牌价
     */
    'oofRateBuy': {
      'type': 'java.math.BigDecimal',
    },
    /**
     * column t_basedata_rate_standard.oof_rate_sell (现钞)卖出牌价
     */
    'oofRateSell': {
      'type': 'java.math.BigDecimal',
    },
    /**
     * column t_basedata_rate_standard.description 描述
     */
    'description': {
      'type': 'java.lang.String',
    },
    /**
     * column t_basedata_rate_standard.batch_numb 基准汇率同步批次号，各种货币对美元折算率的汇率批次号格式为yyyyMM，各种货币对人民币折算率的汇率批次号格式为yyyyMMdd
     */
    'batchNumb': {
      'type': 'java.lang.Long',
    },
    /**
     * column t_basedata_rate_standard.coefficient_unit 折算货币单位
     */
    'coefficientUnit': {
      'type': 'java.lang.String',
    },
  },
};
/* jshint ignore:end */
/* eslint-enable */
