// Don't modified this file, it's auto created by jar2proxy

'use strict';

/* eslint-disable */
/* jshint ignore:start */
module.exports = {
  'com.alibaba.onetouch.basedata.contactPerson.client.ContactPersonVO': {
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
     * column t_basedata_contact_person.full_name 英文全名
     */
    'fullName': {
      'type': 'java.lang.String',
    },
    /**
     * column t_basedata_contact_person.business_id 关联实体的ID
     */
    'businessId': {
      'type': 'java.lang.Long',
    },
    /**
     * column t_basedata_contact_person.contact_type 联系人类别（主联系人，第一联系人之类）
     */
    'contactType': {
      'type': 'java.lang.String',
    },
    /**
     * column t_basedata_contact_person.first_name_cn 中文姓
     */
    'firstNameCn': {
      'type': 'java.lang.String',
    },
    /**
     * column t_basedata_contact_person.last_name_cn 中文名
     */
    'lastNameCn': {
      'type': 'java.lang.String',
    },
    /**
     * column t_basedata_contact_person.full_name_cn 中文全名
     */
    'fullNameCn': {
      'type': 'java.lang.String',
    },
    /**
     * column t_basedata_contact_person.first_name 英文First name
     */
    'firstName': {
      'type': 'java.lang.String',
    },
    /**
     * column t_basedata_contact_person.middle_name 英文Middle name
     */
    'middleName': {
      'type': 'java.lang.String',
    },
    /**
     * column t_basedata_contact_person.last_name 英文Last Name
     */
    'lastName': {
      'type': 'java.lang.String',
    },
    /**
     * column t_basedata_contact_person.gender 性别
     */
    'gender': {
      'type': 'java.lang.Integer',
    },
    /**
     * column t_basedata_contact_person.title 职位，称呼
     */
    'title': {
      'type': 'java.lang.String',
    },
    /**
     * column t_basedata_contact_person.mobile_phone_country_code 移动电话国家代码
     */
    'mobilePhoneCountryCode': {
      'type': 'java.lang.String',
    },
    /**
     * column t_basedata_contact_person.mobile_phone 移动电话
     */
    'mobilePhone': {
      'type': 'java.lang.String',
    },
    /**
     * column t_basedata_contact_person.backup_mobile_phone_country_code 备份用移动电话国家代码
     */
    'backupMobilePhoneCountryCode': {
      'type': 'java.lang.String',
    },
    /**
     * column t_basedata_contact_person.backup_mobilephone 备份用移动电话
     */
    'backupMobilephone': {
      'type': 'java.lang.String',
    },
    /**
     * column t_basedata_contact_person.telphone_country_code 座机国家代码
     */
    'telphoneCountryCode': {
      'type': 'java.lang.String',
    },
    /**
     * column t_basedata_contact_person.telphone_area_code 座机区号
     */
    'telphoneAreaCode': {
      'type': 'java.lang.String',
    },
    /**
     * column t_basedata_contact_person.telphone 座机号码
     */
    'telphone': {
      'type': 'java.lang.String',
    },
    /**
     * column t_basedata_contact_person.business_type 关联实体类型
     */
    'businessType': {
      'type': 'java.lang.String',
    },
    /**
     * column t_basedata_contact_person.telphone_extension_number 座机分机号码
     */
    'telphoneExtensionNumber': {
      'type': 'java.lang.String',
    },
    /**
     * column t_basedata_contact_person.backup_telphone_country_code 备份座机国家代码
     */
    'backupTelphoneCountryCode': {
      'type': 'java.lang.String',
    },
    /**
     * column t_basedata_contact_person.backup_telphone_area_code 备份座机区号
     */
    'backupTelphoneAreaCode': {
      'type': 'java.lang.String',
    },
    /**
     * column t_basedata_contact_person.backup_telphone 备份座机号码
     */
    'backupTelphone': {
      'type': 'java.lang.String',
    },
    /**
     * column t_basedata_contact_person.backup_telphone_extension_number 备份座机分机号码
     */
    'backupTelphoneExtensionNumber': {
      'type': 'java.lang.String',
    },
    /**
     * column t_basedata_contact_person.qq QQ号码
     */
    'qq': {
      'type': 'java.lang.String',
    },
    /**
     * column t_basedata_contact_person.email 电子邮件
     */
    'email': {
      'type': 'java.lang.String',
    },
    /**
     * column t_basedata_contact_person.backup_email 备份电子邮件
     */
    'backupEmail': {
      'type': 'java.lang.String',
    },
    /**
     * column t_basedata_contact_person.aliwangwang 阿里旺旺
     */
    'aliwangwang': {
      'type': 'java.lang.String',
    },
    /**
     * column t_basedata_contact_person.description 描述
     */
    'description': {
      'type': 'java.lang.String',
    },
    /**
     * column t_basedata_contact_person.fax_country_code 传真国家代码
     */
    'faxCountryCode': {
      'type': 'java.lang.String',
    },
    /**
     * column t_basedata_contact_person.fax_area_code 传真区号
     */
    'faxAreaCode': {
      'type': 'java.lang.String',
    },
    /**
     * column t_basedata_contact_person.fax 传真号码
     */
    'fax': {
      'type': 'java.lang.String',
    },
    /**
     * column t_basedata_contact_person.fax_extension_number 传真分机号码
     */
    'faxExtensionNumber': {
      'type': 'java.lang.String',
    },
    /**
     * column t_basedata_contact_person.sequence 顺序号
     */
    'sequence': {
      'type': 'java.lang.Integer',
    },
    /**
     * column t_basedata_contact_person.ali_id aliID
     */
    'aliId': {
      'type': 'java.lang.Long',
    },
    /**
     * column t_basedata_contact_person.province_id 省
     */
    'provinceId': {
      'type': 'java.lang.Long',
    },
    /**
     * column t_basedata_contact_person.city_id 市
     */
    'cityId': {
      'type': 'java.lang.Long',
    },
    /**
     * column t_basedata_contact_person.district_id 区
     */
    'districtId': {
      'type': 'java.lang.Long',
    },
    /**
     * column t_basedata_contact_person.addr 地址
     */
    'addr': {
      'type': 'java.lang.String',
    },
    /**
     * column t_basedata_contact_person.contact_way 联系方式，手机OR座机
     */
    'contactWay': {
      'type': 'java.lang.String',
    },
    /**
     * column t_basedata_contact_person.code 存储一些关键的业务信息
     */
    'code': {
      'type': 'java.lang.String',
    },
    /**
     * column t_basedata_contact_person.id_card 身份证
     */
    'idCard': {
      'type': 'java.lang.String',
    },
    /**
     * column t_basedata_contact_person.passport 护照
     */
    'passport': {
      'type': 'java.lang.String',
    },
    /**
     * column t_basedata_contact_person.original_id 原有ID(专门用于数据迁移，方便hermes根据旧ID取新ID，免去手动匹配的烦恼)
     */
    'originalId': {
      'type': 'java.lang.Long',
    },
    /**
     * column t_basedata_contact_person.company_name 联系人所在的公司名
     */
    'companyName': {
      'type': 'java.lang.String',
    },
    'districtName': {
      'type': 'java.lang.String',
    },
    'zipCode': {
      'type': 'java.lang.String',
    },
    /**
     * column t_basedata_contact_person.country 联系人所在国家
     */
    'country': {
      'type': 'java.lang.String',
    },
    /**
     * column t_basedata_contact_person.country 联系人所在省份
     */
    'province': {
      'type': 'java.lang.String',
    },
    /**
     * column t_basedata_contact_person.country 联系人所在城市
     */
    'city': {
      'type': 'java.lang.String',
    },
    /**
     * column t_basedata_contact_person.country 联系人所在街道/地区
     */
    'district': {
      'type': 'java.lang.String',
    },
  },
};
/* jshint ignore:end */
/* eslint-enable */
