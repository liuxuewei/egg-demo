// Don't modified this file, it's auto created by jar2proxy

'use strict';

/* eslint-disable */
/* jshint ignore:start */
module.exports = {
  'com.alibaba.onetouch.basedata.servicePackageTag.client.ServicePackageTagVO': {
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
     * column t_basedata_service_package_tag.tag_type_id 标签ID
     */
    'tag': {
      'type': 'com.alibaba.onetouch.basedata.tag.client.TagVO',
      'defaultValue': {'creator':{'deleted':false},'deleted':false,'disabled':false,'updater':{'deleted':false}},
    },
    'servicePackage': {
      'type': 'com.alibaba.onetouch.basedata.servicePackage.client.ServicePackageVO',
    },
    /**
     * column t_basedata_service_package_tag.remark 备注
     */
    'remark': {
      'type': 'java.lang.String',
    },
    'tagId': {
      'type': 'java.lang.Long',
    },
  },
};
/* jshint ignore:end */
/* eslint-enable */
