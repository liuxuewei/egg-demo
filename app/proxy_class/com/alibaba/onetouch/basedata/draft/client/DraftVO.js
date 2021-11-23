// Don't modified this file, it's auto created by jar2proxy

'use strict';

/* eslint-disable */
/* jshint ignore:start */
module.exports = {
  'com.alibaba.onetouch.basedata.draft.client.DraftVO': {
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
     * column t_basedata_attachment.business_id 业务id
     */
    'businessId': {
      'type': 'java.lang.String',
    },
    /**
     * column t_basedata_attachment.business_type 业务类型，为DO类的全限定名，包括包名
     */
    'businessType': {
      'type': 'java.lang.String',
    },
    /**
     * column t_basedata_draft.source 来源，建议填写需要保存草稿的页面url
     */
    'source': {
      'type': 'java.lang.String',
    },
    'description': {
      'type': 'java.lang.String',
    },
    /**
     * column t_basedata_draft.content 草稿内容，json字符串
     */
    'content': {
      'type': 'java.lang.String',
    },
  },
};
/* jshint ignore:end */
/* eslint-enable */
