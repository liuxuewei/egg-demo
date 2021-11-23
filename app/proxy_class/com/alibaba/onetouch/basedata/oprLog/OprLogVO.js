// Don't modified this file, it's auto created by jar2proxy

'use strict';

/* eslint-disable */
/* jshint ignore:start */
module.exports = {
  'com.alibaba.onetouch.basedata.oprLog.OprLogVO': {
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
     * column t_basedata_opr_log.opr_type  操作类型
     */
    'oprType': {
      'type': 'java.lang.String',
    },
    /**
     * column t_basedata_opr_log.business_id  业务id
     */
    'businessId': {
      'type': 'java.lang.Long',
    },
    /**
     * column t_basedata_opr_log.comment  备注
     */
    'comment': {
      'type': 'java.lang.String',
    },
    'content': {
      'type': 'java.lang.String',
    },
  },
};
/* jshint ignore:end */
/* eslint-enable */
