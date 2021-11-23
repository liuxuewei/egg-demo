// Don't modified this file, it's auto created by jar2proxy

'use strict';

/* eslint-disable */
/* jshint ignore:start */
module.exports = {
  'com.alibaba.onetouch.basedata.port.client.PortVO': {
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
     * column t_basedata_port.code  口岸代码
     */
    'code': {
      'type': 'java.lang.String',
    },
    /**
     * column t_basedata_port.name  口岸名称
     */
    'name': {
      'type': 'java.lang.String',
    },
    /**
     * column t_basedata_port.status  状态（0-绿色通行，1-关闭，2-黄色预警）
     */
    'status': {
      'type': 'java.lang.Integer',
    },
    /**
     * column t_basedata_port.export_notice  出口通关提示
     */
    'exportNotice': {
      'type': 'java.lang.String',
    },
    /**
     * column t_basedata_port.import_notice  进口通关提示
     */
    'importNotice': {
      'type': 'java.lang.String',
    },
    /**
     * column t_basedata_port.export_notice_for_customer_service  出口通关客服提示
     */
    'exportNoticeForCustomerService': {
      'type': 'java.lang.String',
    },
    /**
     * column t_basedata_port.import_notice_for_customer_service  进口通关客服提示
     */
    'importNoticeForCustomerService': {
      'type': 'java.lang.String',
    },
    /**
     * column t_basedata_port.export_description  出口口岸情况说明
     */
    'exportDescription': {
      'type': 'java.lang.String',
    },
    /**
     * column t_basedata_port.import_description  进口口岸情况说明
     */
    'importDescription': {
      'type': 'java.lang.String',
    },
    /**
     * column t_basedata_port.export_transport_type  出口运输方式
     */
    'exportTransportType': {
      'type': 'java.lang.String',
    },
    /**
     * column t_basedata_port.import_transport_type  进口运输方式
     */
    'importTransportType': {
      'type': 'java.lang.String',
    },
    /**
     * column t_basedata_port.continuation_sheet_fee  续页费
     */
    'continuationSheetFee': {
      'type': 'java.math.BigDecimal',
    },
    /**
     * column t_basedata_port.company_declaration  公司自行报关
     */
    'companyDeclaration': {
      'type': 'java.lang.Integer',
    },
    /**
     * column t_basedata_port.has_truck_info  启用司机资料库(深港运输车)
     */
    'hasTruckInfo': {
      'type': 'java.lang.Integer',
    },
    /**
     * column t_basedata_port.port_type  口岸类型
     */
    'portType': {
      'type': 'java.lang.Integer',
    },
    /**
     * column t_basedata_port.full_spell  全拼，含多音字以逗号分隔
     */
    'fullSpell': {
      'type': 'java.lang.String',
    },
    /**
     * column t_basedata_port.first_spell  首字母拼音，含多音字以逗号分隔
     */
    'firstSpell': {
      'type': 'java.lang.String',
    },
    /**
     * column t_basedata_port.fob_area_name  海关的所属地（FOB区域），通常指行政区域
     */
    'fobAreaName': {
      'type': 'java.lang.String',
    },
    /**
     * column t_basedata_port.need_enname_cbm  是否需要英文品名、体积
     */
    'needEnnameCbm': {
      'type': 'java.lang.Integer',
    },
    /**
     * column t_basedata_port.en_city_name  口岸所属地英文名称
     */
    'enCityName': {
      'type': 'java.lang.String',
    },
    /**
     * column t_basedata_port.send_partner_notice  外包寄送服务商提示
     */
    'sendPartnerNotice': {
      'type': 'java.lang.String',
    },
    /**
     * column t_basedata_port.is_auto_send_to_partner  是否自动发送到外包寄送
     */
    'isAutoSendToPartner': {
      'type': 'java.lang.Integer',
    },
    /**
     * column t_basedata_port.is_auto_clearing  是否自动标为报关中（客户自行报关+无纸化）
     */
    'isAutoClearing': {
      'type': 'java.lang.Integer',
    },
    /**
     * column t_basedata_port.last_allocated_partner 最后分配服务商
     */
    'lastAllocatedPartner': {
      'type': 'java.lang.Long',
    },
  },
};
/* jshint ignore:end */
/* eslint-enable */
