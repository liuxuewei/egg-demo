// Don't modified this file, it's auto created by jar2proxy

'use strict';

/* eslint-disable */
/* jshint ignore:start */
module.exports = {
  'com.alibaba.onetouch.basedata.prizePool.client.PrizePoolVO': {
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
     * column t_basedata_prize_pool.type  类型，区分不同的抽奖活动
     */
    'type': {
      'type': 'java.lang.String',
    },
    /**
     * column t_basedata_prize_pool.level  奖品等级
     */
    'level': {
      'type': 'java.lang.Long',
    },
    /**
     * column t_basedata_prize_pool.probability  中奖概率
     */
    'probability': {
      'type': 'java.math.BigDecimal',
    },
  },
};
/* jshint ignore:end */
/* eslint-enable */
