// Don't modified this file, it's auto created by jar2proxy

'use strict';

/* eslint-disable */
/* jshint ignore:start */
module.exports = {
  'com.alibaba.onetouch.basedata.serviceAssociate.client.ServiceAssociateVO': {
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
     * column t_basedata_service_associate.left_service_id 左服务环节ID
     */
    'leftServiceId': {
      'type': 'java.lang.Long',
    },
    /**
     * column t_basedata_service_associate.left_condition 左条件
     */
    'leftCondition': {
      'type': 'java.lang.String',
    },
    /**
     * column t_basedata_service_associate.right_service_id 右服务环节ID
     */
    'rightServiceId': {
      'type': 'java.lang.Long',
    },
    /**
     * column t_basedata_service_associate.right_condition 右条件
     */
    'rightCondition': {
      'type': 'java.lang.String',
    },
    /**
     * column t_basedata_service_associate.input_info_mapping 输入信息映射
     */
    'inputInfoMapping': {
      'type': 'java.lang.String',
    },
    /**
     * column t_basedata_service_associate.service_type_associate_id 服务类型关联表ID
     */
    'serviceTypeAssociate': {
      'type': 'com.alibaba.onetouch.basedata.serviceTypeAssociate.client.ServiceTypeAssociateVO',
      'defaultValue': {'creator':{'deleted':false},'deleted':false,'updater':{'deleted':false}},
    },
  },
};
/* jshint ignore:end */
/* eslint-enable */
