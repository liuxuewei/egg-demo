// Don't modified this file, it's auto created by jar2proxy

'use strict';

/* eslint-disable */
/* jshint ignore:start */
module.exports = {
  'com.alibaba.onetouch.basedata.service.client.ServiceVO': {
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
    'serviceType': {
      'type': 'com.alibaba.onetouch.basedata.serviceType.client.ServiceTypeVO',
    },
    'serviceInList': {
      'type': 'java.util.List',
      'generic': [
        {'type':'com.alibaba.onetouch.basedata.serviceIn.client.ServiceInVO'},
      ]
    },
    'serviceCompanyList': {
      'type': 'java.util.List',
      'generic': [
        {'type':'com.alibaba.onetouch.basedata.serviceCompany.client.ServiceCompanyVO'},
      ]
    },
    /**
     * column t_basedata_service.partner_id 合作伙伴ID
     */
    'partnerId': {
      'type': 'java.lang.Long',
    },
    /**
     * column t_basedata_service.validity_start 开始有效期
     */
    'validityStart': {
      'type': 'java.util.Date',
    },
    /**
     * column t_basedata_service.validity_end 结束有效期
     */
    'validityEnd': {
      'type': 'java.util.Date',
    },
    /**
     * column t_basedata_service.manager_id 环节管理员ID
     */
    'managerId': {
      'type': 'java.lang.Long',
    },
    /**
     * column t_basedata_service.service_type_id 服务类型，例如出口通关、出口退税、出口收汇等
     */
    'serviceTypeId': {
      'type': 'java.lang.Long',
    },
    /**
     * column t_basedata_service.service_filter 冗余服务环节的filter
     */
    'serviceFilter': {
      'type': 'java.lang.String',
    },
  },
};
/* jshint ignore:end */
/* eslint-enable */
