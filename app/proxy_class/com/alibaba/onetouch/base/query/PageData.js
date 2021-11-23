// Don't modified this file, it's auto created by jar2proxy

'use strict';

/* eslint-disable */
/* jshint ignore:start */
module.exports = {
  'com.alibaba.onetouch.base.query.PageData': {
    /**
     * 总行数
     */
    'total': {
      'type': 'java.lang.Long',
    },
    /**
     * 每页数
     */
    'pageSize': {
      'type': 'java.lang.Integer',
      'defaultValue': 30,
    },
    'totalPage': {
      'type': 'java.lang.Long',
    },
    'currentPage': {
      'type': 'java.lang.Integer',
    },
    'unJsonPackage': {
      'type': 'java.lang.String',
      'constantValue': 'com.alibaba.fastjson.serializer',
      'isStatic': true,
      'isFinal': true,
    },
    /**
     * 总行数
     */
    'dataList': {
      'type': 'java.util.List',
      'generic': [
        {'generic':[{'type':'java.lang.String'},{'type':'java.lang.Object'}],'type':'java.util.Map'},
      ]
    },
    /**
     * 总行数
     */
    'fieldList': {
      'type': 'java.util.List',
      'generic': [
        {'type':'com.alibaba.onetouch.base.smart.Field'},
      ]
    },
    /**
     * 分页数据
     */
    'data': {
      'type': 'java.util.List',
      'generic': [
        {'arrayDepth':1,'isArray':true,'type':'java.lang.Object'},
      ]
    },
    'needFiledList': {
      'type': 'boolean',
      'defaultValue': false,
    },
  },
};
/* jshint ignore:end */
/* eslint-enable */
