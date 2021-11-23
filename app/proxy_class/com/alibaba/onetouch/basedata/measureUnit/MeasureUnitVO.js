// Don't modified this file, it's auto created by jar2proxy

'use strict';

/* eslint-disable */
/* jshint ignore:start */
module.exports = {
  'com.alibaba.onetouch.basedata.measureUnit.MeasureUnitVO': {
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
    'code': {
      'type': 'java.lang.String',
    },
    'name': {
      'type': 'java.lang.String',
    },
    'description': {
      'type': 'java.lang.String',
    },
    'disabled': {
      'type': 'java.lang.Boolean',
      'defaultValue': false,
    },
    /**
     * column t_basedata_measure_unit.en_name 英文名称
     */
    'enName': {
      'type': 'java.lang.String',
    },
    /**
     * column t_basedata_measure_unit.ratio 转换率（对基础单位 ）
     */
    'ratio': {
      'type': 'java.math.BigDecimal',
    },
    /**
     * column t_basedata_measure_unit.unit_group_id 计量单位组ID
     */
    'unitGroupId': {
      'type': 'java.lang.Long',
    },
    /**
     * column t_basedata_measure_unit.display_order 单位在单位组内的显示顺序
     */
    'displayOrder': {
      'type': 'java.lang.Integer',
    },
  },
};
/* jshint ignore:end */
/* eslint-enable */
