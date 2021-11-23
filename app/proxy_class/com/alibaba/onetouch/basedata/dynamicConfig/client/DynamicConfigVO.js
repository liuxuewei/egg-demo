// Don't modified this file, it's auto created by jar2proxy

'use strict';

/* eslint-disable */
/* jshint ignore:start */
module.exports = {
  'com.alibaba.onetouch.basedata.dynamicConfig.client.DynamicConfigVO': {
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
     * column t_basedata_dynamic_config.title 选项title
     */
    'title': {
      'type': 'java.lang.String',
    },
    /**
     * column t_basedata_dynamic_config.value 选项value
     */
    'value': {
      'type': 'java.lang.String',
    },
    /**
     * column t_basedata_dynamic_config.sequence 字段排列顺序，从小到大排序
     */
    'sequence': {
      'type': 'java.lang.Integer',
    },
  },
};
/* jshint ignore:end */
/* eslint-enable */
