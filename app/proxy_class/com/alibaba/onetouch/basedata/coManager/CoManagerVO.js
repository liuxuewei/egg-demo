// Don't modified this file, it's auto created by jar2proxy

'use strict';

/* eslint-disable */
/* jshint ignore:start */
module.exports = {
  'com.alibaba.onetouch.basedata.coManager.CoManagerVO': {
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
     * column t_basedata_co_manager.user_id  用户id
     */
    'userId': {
      'type': 'java.lang.Long',
    },
    /**
     * column t_basedata_co_manager.last_allocate_time  最后更新时间
     */
    'lastAllocateTime': {
      'type': 'java.util.Date',
    },
    /**
     * column t_basedata_co_manager.org_unit  子公司id
     */
    'orgUnit': {
      'type': 'java.lang.Long',
    },
    /**
     * column t_basedata_co_manager.accreditation_unit  办证机构code
     */
    'accreditationUnit': {
      'type': 'java.lang.String',
    },
    /**
     * column t_basedata_co_manager.certificate_code  办证类型code
     */
    'certificateCode': {
      'type': 'java.lang.String',
    },
  },
};
/* jshint ignore:end */
/* eslint-enable */
