// Don't modified this file, it's auto created by jar2proxy

'use strict';

/* eslint-disable */
/* jshint ignore:start */
module.exports = {
  'com.alibaba.onetouch.basedata.expenseDetail.client.ExpenseDetailVO': {
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
    'parentId': {
      'type': 'java.lang.Long',
    },
    /**
     * column t_basedata_expense_detail.charge_type_id  费用类型ID
     */
    'chargeTypeId': {
      'type': 'java.lang.Long',
    },
    /**
     * column t_basedata_expense_detail.default_value  费用默认值（多值用分号分隔）
     */
    'defaultValue': {
      'type': 'java.lang.String',
    },
    'chargeType': {
      'type': 'com.alibaba.onetouch.basedata.chargeType.client.ChargeTypeVO',
    },
    'innerHTML': {
      'type': 'java.lang.String',
    },
  },
};
/* jshint ignore:end */
/* eslint-enable */
