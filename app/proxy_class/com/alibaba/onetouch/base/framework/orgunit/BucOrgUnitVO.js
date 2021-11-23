// Don't modified this file, it's auto created by jar2proxy

'use strict';

/* eslint-disable */
/* jshint ignore:start */
module.exports = {
  'com.alibaba.onetouch.base.framework.orgunit.BucOrgUnitVO': {
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
    'parentId': {
      'type': 'java.lang.Long',
    },
    'path': {
      'type': 'java.lang.String',
    },
    /**
     * column t_basedata_ot_org_unit.lvl 组织级别
     */
    'lvl': {
      'type': 'java.lang.Integer',
    },
    /**
     * column t_basedata_ot_org_unit.manager_id 主管Id
     */
    'managerId': {
      'type': 'java.lang.Long',
    },
    /**
     * column t_basedata_ot_org_unit.org_type 组织类型
     */
    'orgType': {
      'type': 'java.lang.Integer',
      'defaultValue': 1,
    },
    /**
     * column t_basedata_buc_org_unit.status 状态
     */
    'status': {
      'type': 'java.lang.Integer',
    },
    /**
     * column t_basedata_buc_org_unit.effective_date 生效日期
     */
    'effectiveDate': {
      'type': 'java.util.Date',
    },
    /**
     * column t_basedata_buc_org_unit.buc_dep_id buc部门id
     */
    'bucDepId': {
      'type': 'java.lang.String',
    },
    /**
     * column t_basedata_buc_org_unit.buc_dep_parent_id buc父部门id
     */
    'bucDepParentId': {
      'type': 'java.lang.String',
    },
    /**
     * column t_basedata_buc_org_unit.location 地址
     */
    'location': {
      'type': 'java.lang.String',
    },
  },
};
/* jshint ignore:end */
/* eslint-enable */
