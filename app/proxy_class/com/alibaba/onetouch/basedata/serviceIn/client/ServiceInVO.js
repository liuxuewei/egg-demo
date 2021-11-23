// Don't modified this file, it's auto created by jar2proxy

'use strict';

/* eslint-disable */
/* jshint ignore:start */
module.exports = {
  'com.alibaba.onetouch.basedata.serviceIn.client.ServiceInVO': {
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
     * column t_basedata_service_in.service_info_id 信息文件ID
     */
    'serviceInfoId': {
      'type': 'java.lang.Long',
    },
    /**
     * column t_basedata_service_in.sort 排序号
     */
    'sort': {
      'type': 'java.lang.Integer',
    },
    /**
     * column t_basedata_service_in.expression 规则表达式
     */
    'expression': {
      'type': 'java.lang.String',
    },
    /**
     * column t_basedata_service_in.is_dynamic 是否有关联
     */
    'isDynamic': {
      'type': 'java.lang.Boolean',
    },
    /**
     * column t_basedata_service_in.group_id 组ID
     */
    'groupId': {
      'type': 'java.lang.Long',
    },
    'serviceInGroup': {
      'type': 'com.alibaba.onetouch.basedata.serviceTypeGroup.client.ServiceTypeGroupVO',
    },
    'isRequired': {
      'type': 'java.lang.Boolean',
    },
    /**
     * column t_basedata_service_in.track_editable 是否跟单页面可编辑
     */
    'trackEditable': {
      'type': 'java.lang.Boolean',
      'defaultValue': false,
    },
    /**
     * column t_basedata_service_in.service_info_id 信息文件ID
     */
    'serviceInfo': {
      'type': 'com.alibaba.onetouch.basedata.serviceInfo.client.ServiceInfoVO',
    },
    'isTrackRequired': {
      'type': 'java.lang.Boolean',
      'defaultValue': false,
    },
    'serviceTypeId': {
      'type': 'java.lang.Long',
    },
  },
};
/* jshint ignore:end */
/* eslint-enable */
