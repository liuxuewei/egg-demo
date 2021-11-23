// Don't modified this file, it's auto created by jar2proxy

'use strict';

/* eslint-disable */
/* jshint ignore:start */
module.exports = {
  'com.alibaba.onetouch.base.framework.PropertyNameList$PropertyDefinetion': {
    /**
     * 全部属性
     */
    'isAll': {
      'type': 'boolean',
      'defaultValue': false,
    },
    /**
     * 全部一级属性(不涉及关联属性)
     */
    'isBasicProp': {
      'type': 'boolean',
      'defaultValue': false,
    },
    /**
     * 是否冗余
     */
    'isRedundant': {
      'type': 'boolean',
      'defaultValue': false,
    },
    /**
     * 是否经过分析
     */
    'isAnalyzed': {
      'type': 'boolean',
      'defaultValue': false,
    },
    /**
     * 是否启用缓存
     */
    'cacheEnable': {
      'type': 'boolean',
      'defaultValue': true,
    },
    /**
     * 是否缓存优先(当获取对象属性集合小于缓存对象属性集合,是否先获取可缓存的对象,再返回组装结果)
     */
    'cachePrior': {
      'type': 'boolean',
      'defaultValue': true,
    },
    'depth': {
      'type': 'int',
      'defaultValue': 0,
    },
    /**
     * 指定的属性
     */
    'subDefinetion': {
      'type': 'java.util.Map',
      'defaultValue': {},
      'generic': [
        {'type':'java.lang.String'},
        {'type':'com.alibaba.onetouch.base.framework.PropertyNameList$PropertyDefinetion'},
      ]
    },
  },
};
/* jshint ignore:end */
/* eslint-enable */
