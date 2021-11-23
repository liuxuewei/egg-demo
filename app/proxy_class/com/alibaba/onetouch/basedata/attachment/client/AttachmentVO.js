// Don't modified this file, it's auto created by jar2proxy

'use strict';

/* eslint-disable */
/* jshint ignore:start */
module.exports = {
  'com.alibaba.onetouch.basedata.attachment.client.AttachmentVO': {
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
     * column t_basedata_attachment.file_url 文件服务器存储的文件名
     */
    'fileUrl': {
      'type': 'java.lang.String',
    },
    /**
     * column t_basedata_attachment.bussiness_id 业务id
     */
    'bussinessId': {
      'type': 'java.lang.Long',
    },
    /**
     * column t_basedata_attachment.bussiness_type 业务类型，为DO类的全限定名，包括包名
     */
    'bussinessType': {
      'type': 'java.lang.String',
    },
    /**
     * column t_basedata_attachment.description 描述
     */
    'description': {
      'type': 'java.lang.String',
    },
    /**
     * column t_basedata_attachment.file_suffix 文件后缀，如jpg、txt
     */
    'fileSuffix': {
      'type': 'java.lang.String',
    },
    /**
     * column t_basedata_attachment.attachment_category 附件业务分类，如报关单、发票、水单
     */
    'attachmentCategory': {
      'type': 'java.lang.String',
    },
    /**
     * column t_basedata_attachment.local_file_name 源文件的本地名字
     */
    'localFileName': {
      'type': 'java.lang.String',
    },
    /**
     * column t_basedata_attachment.file_name 上传fileserver返回的key
     */
    'fileName': {
      'type': 'java.lang.String',
    },
  },
};
/* jshint ignore:end */
/* eslint-enable */
