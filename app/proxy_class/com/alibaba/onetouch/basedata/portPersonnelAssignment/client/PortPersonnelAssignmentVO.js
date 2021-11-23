// Don't modified this file, it's auto created by jar2proxy

'use strict';

/* eslint-disable */
/* jshint ignore:start */
module.exports = {
  'com.alibaba.onetouch.basedata.portPersonnelAssignment.client.PortPersonnelAssignmentVO': {
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
     * column t_basedata_port_personnel_assignment.port_id  口岸id
     */
    'portId': {
      'type': 'java.lang.Long',
    },
    /**
     * column t_basedata_port_personnel_assignment.user_id  用户ID
     */
    'userId': {
      'type': 'java.lang.Long',
    },
    /**
     * column t_basedata_port_personnel_assignment.type  分配类型，1管理员，2跟单员
     */
    'type': {
      'type': 'java.lang.Integer',
    },
    /**
     * column t_basedata_port_personnel_assignment.last_audit_time  上次分配时间
     */
    'lastAuditTime': {
      'type': 'java.util.Date',
    },
    /**
     * column t_basedata_port_personnel_assignment.enabled  是否启用
     */
    'enabled': {
      'type': 'java.lang.Integer',
    },
    /**
     * column t_basedata_port_personnel_assignment.finance_org_unit_id  所属子公司id,0代表可操作所有子公司
     */
    'financeOrgUnitId': {
      'type': 'java.lang.Long',
    },
    /**
     * column t_basedata_port_personnel_assignment.customs_type  1可以操作我司报关，2，可以操作客户自行报关,3全部
     */
    'customsType': {
      'type': 'java.lang.Integer',
    },
  },
};
/* jshint ignore:end */
/* eslint-enable */
