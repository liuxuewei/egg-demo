// Don't modified this file, it's auto created by jar2proxy

'use strict';

/* eslint-disable */
/* jshint ignore:start */
module.exports = {
  'com.alibaba.onetouch.basedata.serviceTypeInput.client.ServiceTypeInputVO': {
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
    'serviceInfo': {
      'type': 'com.alibaba.onetouch.basedata.serviceInfo.client.ServiceInfoVO',
    },
    'serviceTypeGroup': {
      'type': 'com.alibaba.onetouch.basedata.serviceTypeGroup.client.ServiceTypeGroupVO',
    },
    'serviceType': {
      'type': 'com.alibaba.onetouch.basedata.serviceType.client.ServiceTypeVO',
    },
    /**
     * column t_basedata_service_type_input.service_info_id 服务信息
     */
    'serviceInfoId': {
      'type': 'java.lang.Long',
    },
    /**
     * column t_basedata_service_type_input.serial 序号
     */
    'serial': {
      'type': 'java.lang.Integer',
    },
    /**
     * column t_basedata_service_type_input.group_id 分组
     */
    'groupId': {
      'type': 'java.lang.Long',
    },
    /**
     * column t_basedata_service_type_input.is_dynamic 是否有关联字段
     */
    'isDynamic': {
      'type': 'java.lang.Boolean',
    },
    /**
     * column t_basedata_service_type_input.is_required 是否必填
     */
    'isRequired': {
      'type': 'java.lang.Boolean',
    },
    /**
     * column t_basedata_service_type_input.rule 规则
     */
    'rule': {
      'type': 'java.lang.String',
    },
    /**
     * column t_basedata_service_type_input.track_editable 是否跟单页面可编辑
     */
    'trackEditable': {
      'type': 'java.lang.Boolean',
      'defaultValue': false,
    },
    'isTrackRequired': {
      'type': 'java.lang.Boolean',
      'defaultValue': false,
    },
    'dynamicGroupName': {
      'type': 'java.lang.String',
    },
  },
};
/* jshint ignore:end */
/* eslint-enable */
