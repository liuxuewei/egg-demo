// Don't modified this file, it's auto created by jar2proxy

'use strict';

/* eslint-disable */
/* jshint ignore:start */
module.exports = {
  'com.alibaba.onetouch.base.framework.user.workonduty.WorkOndutyVO': {
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
     * column t_basedata_work_onduty.emp_id 值班员工工号
     */
    'empId': {
      'type': 'java.lang.String',
    },
    /**
     * column t_basedata_work_onduty.emp_id 值班员工姓名
     */
    'empName': {
      'type': 'java.lang.String',
    },
    /**
     * column t_basedata_work_onduty.emp_id 值班员工花名
     */
    'empNick': {
      'type': 'java.lang.String',
    },
    /**
     * column t_basedata_work_onduty.onduty_start 值班开始时间
     */
    'ondutyStart': {
      'type': 'java.util.Date',
    },
    /**
     * column t_basedata_work_onduty.onduty_end 值班结束时间
     */
    'ondutyEnd': {
      'type': 'java.util.Date',
    },
    /**
     * column t_basedata_work_onduty.onduty_desc 备注
     */
    'ondutyDesc': {
      'type': 'java.lang.String',
    },
    /**
     * column t_basedata_work_onduty.onduty_buc_unit_id 被指定值班的业务线部门id
     */
    'ondutyBucUnitId': {
      'type': 'java.lang.Long',
    },
    'ondutyUnit': {
      'type': 'com.alibaba.onetouch.base.framework.orgunit.OtOrgUnitVO',
    },
    /**
     * column t_basedata_work_onduty.buc_unit_id 值班员工所在的buc阿里集团组织部门id
     */
    'bucUnitId': {
      'type': 'java.lang.String',
    },
    /**
     * column t_basedata_work_onduty.supervisor_emp_id 值班员工上级主管工号
     */
    'supervisorEmpId': {
      'type': 'java.lang.String',
    },
    /**
     * column t_basedata_work_onduty.supervisor_emp_id 值班员工上级主管姓名
     */
    'supervisorEmpName': {
      'type': 'java.lang.String',
    },
  },
};
/* jshint ignore:end */
/* eslint-enable */
