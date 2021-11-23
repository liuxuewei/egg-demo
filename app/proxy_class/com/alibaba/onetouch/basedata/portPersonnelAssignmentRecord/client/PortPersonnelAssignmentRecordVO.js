// Don't modified this file, it's auto created by jar2proxy

'use strict';

/* eslint-disable */
/* jshint ignore:start */
module.exports = {
  'com.alibaba.onetouch.basedata.portPersonnelAssignmentRecord.client.PortPersonnelAssignmentRecordVO': {
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
     * column t_basedata_port_personnel_assignment_record.customer_id  客户ID
     */
    'customerId': {
      'type': 'java.lang.Long',
    },
    /**
     * column t_basedata_port_personnel_assignment_record.port_id  口岸ID
     */
    'portId': {
      'type': 'java.lang.Long',
    },
    /**
     * column t_basedata_port_personnel_assignment_record.user_id  最后分配人ID
     */
    'userId': {
      'type': 'java.lang.Long',
    },
    /**
     * column t_basedata_port_personnel_assignment_record.type  分配类型，1管理员，2跟单员
     */
    'type': {
      'type': 'java.lang.Integer',
    },
  },
};
/* jshint ignore:end */
/* eslint-enable */
