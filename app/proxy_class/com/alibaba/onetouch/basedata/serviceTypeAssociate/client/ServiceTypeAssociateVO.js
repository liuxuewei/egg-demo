// Don't modified this file, it's auto created by jar2proxy

'use strict';

/* eslint-disable */
/* jshint ignore:start */
module.exports = {
  'com.alibaba.onetouch.basedata.serviceTypeAssociate.client.ServiceTypeAssociateVO': {
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
     * column t_basedata_service_type_associate.left_service_type_id 左服务类型ID
     */
    'leftServiceTypeId': {
      'type': 'java.lang.Long',
    },
    /**
     * column t_basedata_service_type_associate.right_service_type_id 右服务类型ID
     */
    'rightServiceTypeId': {
      'type': 'java.lang.Long',
    },
    /**
     * column t_basedata_service_type_associate.input_info_mapping 输入信息映射
     */
    'inputInfoMapping': {
      'type': 'java.lang.String',
    },
  },
};
/* jshint ignore:end */
/* eslint-enable */
