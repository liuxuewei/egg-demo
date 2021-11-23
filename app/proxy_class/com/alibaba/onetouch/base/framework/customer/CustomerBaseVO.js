// Don't modified this file, it's auto created by jar2proxy

'use strict';

/* eslint-disable */
/* jshint ignore:start */
module.exports = {
  'com.alibaba.onetouch.base.framework.customer.CustomerBaseVO': {
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
     * column t_basedata_customer.short_name 简写
     */
    'shortName': {
      'type': 'java.lang.String',
    },
    /**
     * column t_basedata_customer.en_name 英文名
     */
    'enName': {
      'type': 'java.lang.String',
    },
    /**
     * 无效字段，请勿使用！客户与aliId的关系在customerUserVO中
     */
    'mainAliId': {
      'type': 'java.lang.Long',
    },
    /**
     * column t_basedata_customer.company_type 公司类型
     */
    'companyType': {
      'type': 'java.lang.Integer',
    },
    /**
     * column t_basedata_customer.business_model 经营模式 1外贸、2工厂、3工贸一体
     */
    'businessModel': {
      'type': 'java.lang.Integer',
    },
    /**
     * column t_basedata_customer.company_reg 企业注册登记号
     */
    'companyReg': {
      'type': 'java.lang.String',
    },
    /**
     * column t_basedata_customer.company_fr 企业法人
     */
    'companyFr': {
      'type': 'java.lang.String',
    },
    /**
     * column t_basedata_customer.org_code 组织编码
     */
    'orgCode': {
      'type': 'java.lang.String',
    },
    /**
     * column t_basedata_customer.customer_reg_code 海关注册登记号
     */
    'customerRegCode': {
      'type': 'java.lang.String',
    },
    /**
     * column t_basedata_customer.tax_id 纳税人识别号 taxId已经废弃改用taxNumber
     */
    'taxId': {
      'type': 'java.lang.Long',
    },
    'taxNumber': {
      'type': 'java.lang.String',
    },
    /**
     * column t_basedata_customer.founded_date 成立日期
     */
    'foundedDate': {
      'type': 'java.util.Date',
    },
    /**
     * column t_basedata_customer.annual_sales 年销售额
     */
    'annualSales': {
      'type': 'java.math.BigDecimal',
    },
    /**
     * column t_basedata_customer.export_ratio 出口比例
     */
    'exportRatio': {
      'type': 'java.math.BigDecimal',
    },
    /**
     * column t_basedata_customer.addr 地址
     */
    'addr': {
      'type': 'java.lang.String',
    },
    /**
     * column t_basedata_customer.recipient_addr 收件地址
     */
    'recipientAddr': {
      'type': 'java.lang.String',
    },
    /**
     * column t_basedata_customer.tel 公司电话
     */
    'tel': {
      'type': 'java.lang.String',
    },
    /**
     * column t_basedata_customer.fax 公司传真
     */
    'fax': {
      'type': 'java.lang.String',
    },
    /**
     * column t_basedata_customer.mobile_tel 移动电话
     */
    'mobileTel': {
      'type': 'java.lang.String',
    },
    /**
     * column t_basedata_customer.email 电子邮箱
     */
    'email': {
      'type': 'java.lang.String',
    },
    /**
     * column t_basedata_customer.website 公司网址
     */
    'website': {
      'type': 'java.lang.String',
    },
    /**
     * column t_basedata_customer.main_industry 主营行业
     */
    'industry': {
      'type': 'java.lang.String',
    },
    /**
     * column t_basedata_customer.register_fund 注册资金
     */
    'registerFund': {
      'type': 'java.lang.String',
    },
    /**
     * column t_basedata_customer.main_product 主营产品
     */
    'mainProduct': {
      'type': 'java.lang.String',
    },
    /**
     * column t_basedata_customer.anti_month_extport_amount 预计月出口总金额（币别）
     */
    'antiMonthExtportAmount': {
      'type': 'java.lang.String',
    },
    /**
     * column t_basedata_customer.notice_memo 客户注意事项
     */
    'noticeMemo': {
      'type': 'java.lang.String',
    },
    /**
     * column t_basedata_customer.tax_rebate_mode 退税方式
     */
    'taxRebateMode': {
      'type': 'java.lang.String',
    },
    /**
     * column t_basedata_customer.tax_rebate_loan_rate 退税垫资率
     */
    'taxRebateLoanRate': {
      'type': 'java.lang.Float',
    },
    /**
     * column t_basedata_customer.service_mode 服务形式
     */
    'serviceMode': {
      'type': 'java.lang.Integer',
    },
    /**
     * column t_basedata_customer.customs_reg_code 海关注册号
     */
    'customsRegCode': {
      'type': 'java.lang.String',
    },
    /**
     * column t_basedata_customer.proxy_code 代理协议号
     */
    'proxyCode': {
      'type': 'java.lang.String',
    },
    /**
     * column t_basedata_customer.admission_date 准入日期
     */
    'admissionDate': {
      'type': 'java.util.Date',
    },
    /**
     * column t_basedata_customer.orgPath 服务顾问组织结构path
     */
    'orgPath': {
      'type': 'java.lang.String',
    },
    /**
     * column t_basedata_customer.business_tags 业务标签
     */
    'businessTags': {
      'type': 'java.lang.String',
    },
    /**
     * column t_basedata_customer.branch_id 所属子公司
     */
    'branchId': {
      'type': 'java.lang.Long',
    },
    'serviceConsultant': {
      'type': 'java.lang.Long',
    },
    /**
     * 预计出货时间
     */
    'crmExpectShippingDate': {
      'type': 'java.util.Date',
    },
    'isMigrated': {
      'type': 'java.lang.Boolean',
    },
    /**
     * 状态
     */
    'state': {
      'type': 'java.lang.String',
    },
    /**
     * 工厂面积
     */
    'factoryArea': {
      'type': 'java.lang.String',
    },
    /**
     * 员工人数
     */
    'factoryEmployees': {
      'type': 'java.lang.String',
    },
    /**
     * 上年销售额
     */
    'lastAnnualSales': {
      'type': 'java.lang.String',
    },
    /**
     * 迁移状态,未迁移:noMigrated 待迁移:waitForMigrated 已迁移：migrated
     */
    'migrateState': {
      'type': 'java.lang.String',
    },
    /**
     * crm提交的客户所在区域
     */
    'areaId': {
      'type': 'java.lang.Long',
    },
    /**
     * 物流顾问
     */
    'logisticsConsultant': {
      'type': 'java.lang.Long',
    },
    /**
     * 客户是否被顾问确认了
     */
    'isConsultantChecked': {
      'type': 'java.lang.Boolean',
    },
    /**
     * 运营顾问
     */
    'partnerConsultant': {
      'type': 'java.lang.Long',
    },
    /**
     * 客户来源
     */
    'sourceType': {
      'type': 'java.lang.String',
    },
    /**
     * 运营顾问的组织路径
     */
    'partnerConsultantPath': {
      'type': 'java.lang.String',
    },
    /**
     * 拍档，仅用于门户搜索
     */
    'currentOnepartnerId': {
      'type': 'java.lang.Long',
    },
  },
};
/* jshint ignore:end */
/* eslint-enable */
