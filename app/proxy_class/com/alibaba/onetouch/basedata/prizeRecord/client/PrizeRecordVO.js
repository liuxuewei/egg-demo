// Don't modified this file, it's auto created by jar2proxy

'use strict';

/* eslint-disable */
/* jshint ignore:start */
module.exports = {
  'com.alibaba.onetouch.basedata.prizeRecord.client.PrizeRecordVO': {
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
     * column t_basedata_prize_record.ali_id  客户aliId
     */
    'aliId': {
      'type': 'java.lang.Long',
    },
    /**
     * column t_basedata_prize_record.sub_ali_id  客户子账号id
     */
    'subAliId': {
      'type': 'java.lang.Long',
    },
    /**
     * column t_basedata_prize_record.type  活动类型
     */
    'type': {
      'type': 'java.lang.String',
    },
    /**
     * column t_basedata_prize_record.number  抽奖次数
     */
    'number': {
      'type': 'java.lang.Integer',
    },
    /**
     * column t_basedata_prize_record.win  是否中奖，0是否的，1是中奖
     */
    'win': {
      'type': 'java.lang.Integer',
    },
    /**
     * column t_basedata_prize_record.prizeId  中奖的奖品id
     */
    'prizeId': {
      'type': 'java.lang.Long',
    },
  },
};
/* jshint ignore:end */
/* eslint-enable */
