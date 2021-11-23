/**
 * Don't modified this file, it's auto created by jar2proxy
 * @see com.alibaba.onetouch.basedata.type.client.TaxRebateModeEnum
 */

'use strict';

/* eslint-disable */
/* jshint ignore:start */

/**
 * Module dependencies.
 */
const Enums = require('enums');

/**
 * 退税方式
 */
module.exports = new Enums([
  
  {'$name':'NEVER_TAX_REBATE','name':'NEVER_TAX_REBATE','value':'a','ordinal':0,'desc':'从不退税'},
  
  {'$name':'SELF_TAX_REBATE','name':'SELF_TAX_REBATE','value':'b','ordinal':1,'desc':'自己办理退税'},
  
  {'$name':'AUTORIZACION_TAX_REBATE','name':'AUTORIZACION_TAX_REBATE','value':'c','ordinal':2,'desc':'委托代理公司办理退税'},
  
  {'$name':'PROXY_TAX_REBATE','name':'PROXY_TAX_REBATE','value':'d','ordinal':3,'desc':'需要协助办理退税'},
]);

/* jshint ignore:end */
/* eslint-enable */
