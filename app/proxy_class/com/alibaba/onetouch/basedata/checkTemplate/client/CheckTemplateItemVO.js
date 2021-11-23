// Don't modified this file, it's auto created by jar2proxy

'use strict';

/* eslint-disable */
/* jshint ignore:start */
module.exports = {
  'com.alibaba.onetouch.basedata.checkTemplate.client.CheckTemplateItemVO': {
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
     * 监装项名称
     */
    'itemName': {
      'type': 'java.lang.String',
    },
    /**
     * 监装项类型（图片、视频）
     * @see com.alibaba.onetouch.basedata.type.client.CheckTemplateItemTypeEnum
     */
    'itemType': {
      'type': 'java.lang.String',
    },
    /**
     * 监装项类型（图片、视频）
     * @see com.alibaba.onetouch.basedata.type.client.CheckTemplateItemTypeEnum
     */
    'itemTypeName': {
      'type': 'java.lang.String',
    },
    /**
     * 监装项描述
     */
    'itemDescription': {
      'type': 'java.lang.String',
    },
    /**
     * 监装项样例
     */
    'itemDemoUrl': {
      'type': 'java.lang.String',
    },
    /**
     * 备注
     */
    'remark': {
      'type': 'java.lang.String',
    },
    /**
     * 监装项分类(看货、看厂)
     *  对应枚举值中的value
     *  @see com.alibaba.onetouch.basedata.type.client.TemplateBusinessTypeEnum
     */
    'itemCategory': {
      'type': 'java.lang.String',
    },
    /**
     * 监装项阶段
     * 对应枚举值中的value
     * @see com.alibaba.onetouch.basedata.type.client.TemplateItemStageEnum
     */
    'itemStage': {
      'type': 'java.lang.String',
    },
    /**
     * 是否必须(必须0，选填1)
     */
    'isNeeded': {
      'type': 'java.lang.Integer',
    },
    /**
     * 可拍摄数量上限（针对某一拍摄项）
     */
    'countLimit': {
      'type': 'java.lang.Integer',
    },
    'sequence': {
      'type': 'java.lang.Integer',
    },
  },
};
/* jshint ignore:end */
/* eslint-enable */
