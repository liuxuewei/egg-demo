// Don't modified this file, it's auto created by jar2proxy

'use strict';

/* eslint-disable */
/* jshint ignore:start */
module.exports = {
  'com.alibaba.onetouch.basedata.companyBankAccount.client.CompanyBankAccountVO': {
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
     * column t_basedata_company_bank_account.bank_id  银行支行ID（对应t_basedata_bank.id）
     */
    'bankId': {
      'type': 'java.lang.Long',
    },
    'bank': {
      'type': 'com.alibaba.onetouch.basedata.bank.client.BankVO',
    },
    /**
     * column t_basedata_company_bank_account.subsidiary_id  子公司ID
     */
    'subsidiaryId': {
      'type': 'java.lang.Long',
    },
    /**
     * column t_basedata_company_bank_account.type  帐户类型：退税帐户、外汇帐户、虚拟帐户、往来款帐户、客户结算帐户、服务商结算帐户
     */
    'type': {
      'type': 'java.lang.String',
    },
    'typeEnum': {
      'type': 'com.alibaba.onetouch.basedata.type.client.CompanyBankAccountTypeEnum',
      'isEnum': true,
    },
    /**
     * column t_basedata_company_bank_account.code_blance 银行账户初始余额（同步）
     */
    'codeBlance': {
      'type': 'java.math.BigDecimal',
    },
    /**
     * column t_basedata_company_bank_account.code_currency 银行账户货币类型 （银行账户货币币种代码）
     */
    'codeCurrency': {
      'type': 'java.lang.String',
    },
    /**
     * column t_basedata_company_bank_account.code_numb 银行账户代码(唯一账号速记代码)
     */
    'codeNumb': {
      'type': 'java.lang.Integer',
    },
    /**
     * column t_basedata_company_bank_account.api_bank_code 银行账户货币类型 （银行账户货币币种代码）
     */
    'apiBankCode': {
      'type': 'java.lang.String',
    },
  },
};
/* jshint ignore:end */
/* eslint-enable */
