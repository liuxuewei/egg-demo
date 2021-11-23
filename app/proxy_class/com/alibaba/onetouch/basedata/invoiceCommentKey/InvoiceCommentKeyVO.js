// Don't modified this file, it's auto created by jar2proxy

'use strict';

/* eslint-disable */
/* jshint ignore:start */
module.exports = {
  'com.alibaba.onetouch.basedata.invoiceCommentKey.InvoiceCommentKeyVO': {
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
     * column t_basedata_invoice_comment_key.hs_code  hsCode（8位）
     */
    'hsCode': {
      'type': 'java.lang.String',
    },
    /**
     * column t_basedata_invoice_comment_key.seq  申报要素顺序号
     */
    'seq': {
      'type': 'java.lang.Long',
    },
    /**
     * column t_basedata_invoice_comment_key.name  申报要素名称
     */
    'name': {
      'type': 'java.lang.String',
    },
  },
};
/* jshint ignore:end */
/* eslint-enable */
