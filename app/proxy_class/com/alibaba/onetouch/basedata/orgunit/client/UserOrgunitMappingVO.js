// Don't modified this file, it's auto created by jar2proxy

'use strict';

/* eslint-disable */
/* jshint ignore:start */
module.exports = {
  'com.alibaba.onetouch.basedata.orgunit.client.UserOrgunitMappingVO': {
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
    /**
     * column t_basedata_user_orgunit_mapping.ot_orgunit_id 组织ID
     */
    'otOrgUnitVO': {
      'type': 'com.alibaba.onetouch.base.framework.orgunit.OtOrgUnitVO',
      'defaultValue': {'creator':{'deleted':false},'deleted':false,'disabled':false,'updater':{'deleted':false}},
    },
    /**
     * column t_basedata_user_orgunit_mapping.user_id 用户ID
     */
    'userVO': {
      'type': 'com.alibaba.onetouch.base.framework.user.UserVO',
      'defaultValue': {'deleted':false},
    },
    /**
     * column t_basedata_user_orgunit_mapping.position 职位
     */
    'position': {
      'type': 'java.lang.String',
    },
  },
};
/* jshint ignore:end */
/* eslint-enable */
