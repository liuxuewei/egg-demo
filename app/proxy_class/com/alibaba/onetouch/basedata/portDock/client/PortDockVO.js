// Don't modified this file, it's auto created by jar2proxy

'use strict';

/* eslint-disable */
/* jshint ignore:start */
module.exports = {
  'com.alibaba.onetouch.basedata.portDock.client.PortDockVO': {
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
     * column t_basedata_port_dock.code  代码
     */
    'code': {
      'type': 'java.lang.String',
    },
    /**
     * column t_basedata_port_dock.name  名称
     */
    'name': {
      'type': 'java.lang.String',
    },
    /**
     * column t_basedata_port_dock.status  状态
     */
    'status': {
      'type': 'java.lang.Integer',
    },
    /**
     * column t_basedata_port_dock.type  类型，1=码头，2=仓库
     */
    'type': {
      'type': 'java.lang.Integer',
    },
    /**
     * column t_basedata_port_dock.full_spell  全拼，含多音字以逗号分隔
     */
    'fullSpell': {
      'type': 'java.lang.String',
    },
    /**
     * column t_basedata_port_dock.first_spell  首字母拼音，含多音字以逗号分隔
     */
    'firstSpell': {
      'type': 'java.lang.String',
    },
  },
};
/* jshint ignore:end */
/* eslint-enable */
