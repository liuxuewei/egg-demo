// Don't modified this file, it's auto created by jar2proxy

'use strict';

/* eslint-disable */
/* jshint ignore:start */
module.exports = {
  'com.alibaba.onetouch.basedata.expense.client.ExpenseVO': {
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
     * column t_basedata_expense.expense_type  收费类别（进口、出口、付汇）
     */
    'expenseType': {
      'type': 'java.lang.String',
    },
    /**
     * column t_basedata_expense.update_id  修改者
     */
    'updateId': {
      'type': 'java.lang.Long',
    },
    /**
     * column t_basedata_expense.is_default  是否默认
     */
    'isDefault': {
      'type': 'java.lang.Boolean',
    },
    /**
     * 所有的收费配置详情
     */
    'expenseDetails': {
      'type': 'java.util.List',
      'generic': [
        {'type':'com.alibaba.onetouch.basedata.expenseDetail.client.ExpenseDetailVO'},
      ]
    },
  },
};
/* jshint ignore:end */
/* eslint-enable */
