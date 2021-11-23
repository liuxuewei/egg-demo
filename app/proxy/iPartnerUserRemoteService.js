// Don't modified this file, it's auto created by jar2proxy

'use strict';

const path = require('path');

/* eslint-disable */
/* istanbul ignore next */
module.exports = function (app) {
  const appName = '';
  let version = '1.0.0';
  if (app.config.proxy && app.config.proxy.envVersion) {
    version = app.config.proxy.envVersion[appName] || version;
  }
  const serviceId = `com.alibaba.onetouch.basedata.user.client.IPartnerUserRemoteService:${version}`;
  if (!app.rpcClient) return;
  const consumer = app.rpcClient.createConsumer({
    id: serviceId,
    appName,
    targetAppName: appName,
    group: 'HSF',
    proxyName: 'iPartnerUserRemoteService',
    responseTimeout: 10000,
    classMapPath: path.resolve(__dirname, '../proxy_class_map.js'),
  });

  /**
   * 数据对象 Powered By [Poseidon]
   * 
   * @since 2014-09-19
   */
  class IPartnerUserRemoteService extends app.Proxy {
    constructor(ctx) {
      super(ctx, consumer);
    }

    // java source code:  public List<PartnerUserVO> getByPartnerUser(Long partnerId);
    // returnType: java.util.List/**
     * 通过拍档Id获取所有拍档用户
     *
     * @param partnerId 拍档Id
     * @return
     */
    async getByPartnerUser(partnerId) {
      const args = [
        {
          $class: 'java.lang.Long',
          $: partnerId,
        }
      ];
      return await consumer.invoke(this.ctx, 'getByPartnerUser', args, { });
    }

    // java source code:  public PartnerUserVO getByAliId(Long aliId);
    // returnType: com.alibaba.onetouch.basedata.user.client.PartnerUserVO/**
     * 通过aliid获取服务商
     * 
     * @param aliId
     * @return
     */
    async getByAliId(aliId) {
      const args = [
        {
          $class: 'java.lang.Long',
          $: aliId,
        }
      ];
      return await consumer.invoke(this.ctx, 'getByAliId', args, { });
    }

    // java source code:  public BaseResult<PageData> queryPartnerUsers(final PageSearchDTO pageSearchDTO);
    // returnType: com.alibaba.onetouch.basedata.utils.client.BaseResult/**
     * 接口内部使用
     * 根据partnerId、员工ID，员工姓名 查询 
     * 分页最大记录200
     * @param pageSearchDTO
     * @return
     * 
     * add by qinhai.fqh
     */
    async queryPartnerUsers(pageSearchDTO) {
      const args = [
        {
          $class: 'com.alibaba.onetouch.base.query.PageSearchDTO',
          $: pageSearchDTO,
        }
      ];
      return await consumer.invoke(this.ctx, 'queryPartnerUsers', args, { });
    }

    // java source code:  public BaseResult<Long> updatePartnerUser(final PartnerUserVO partnerUserVO);
    // returnType: com.alibaba.onetouch.basedata.utils.client.BaseResult/**
     * 提供给拍档管理员：更新拍档员工的姓名和旺旺和手机号码
     * 
     * @param partnerUserVO 主键员工ID
     * @return
     */
    async updatePartnerUser(partnerUserVO) {
      const args = [
        {
          $class: 'com.alibaba.onetouch.basedata.user.client.PartnerUserVO',
          $: partnerUserVO,
        }
      ];
      return await consumer.invoke(this.ctx, 'updatePartnerUser', args, { });
    }

    // java source code:  public PartnerUserVO getAdminUser(Long partnerId);
    // returnType: com.alibaba.onetouch.basedata.user.client.PartnerUserVO/**
     * 返回拍档的主账号用户
     * @param partnerId
     * @return
     */
    async getAdminUser(partnerId) {
      const args = [
        {
          $class: 'java.lang.Long',
          $: partnerId,
        }
      ];
      return await consumer.invoke(this.ctx, 'getAdminUser', args, { });
    }

    // java source code:  public BaseResult<PartnerUserVO> queryPartnerUserBycustomerId(final Long customerId);
    // returnType: com.alibaba.onetouch.basedata.utils.client.BaseResult/**
     * 获取客户的对应的拍档用户，如果没有绑定拍档用户，获取拍档管理员用户
     *
     * 
     * @param customerId 必填
     * @return result
     *   返回结果处理：
     *        BaseResult<PartnerUserVO> result= queryPartnerUserBycustomerId(customerId);
     *           
     *           if(result==null){
     *               throw new BizException("","");
     *           }
     *           if(!result.isSuccess()){
     *               throw new BizException("","");
     *           }
     *           if(result.getValue()!=null){
     *               //TODO
     *           }
     */
    async queryPartnerUserBycustomerId(customerId) {
      const args = [
        {
          $class: 'java.lang.Long',
          $: customerId,
        }
      ];
      return await consumer.invoke(this.ctx, 'queryPartnerUserBycustomerId', args, { });
    }

    // java source code:  public BaseResult<Long> addPartnerUser(final PartnerUserVO partnerUserVO);
    // returnType: com.alibaba.onetouch.basedata.utils.client.BaseResult/**
     * 提供给拍档管理员，添加拍档员工的信息
     * 
     * @param partnerUserVO 必填
     * @return
     */
    async addPartnerUser(partnerUserVO) {
      const args = [
        {
          $class: 'com.alibaba.onetouch.basedata.user.client.PartnerUserVO',
          $: partnerUserVO,
        }
      ];
      return await consumer.invoke(this.ctx, 'addPartnerUser', args, { });
    }

    // java source code:  public BaseResult<List<PartnerUserVO>> getCheckGoodsUsersByAliId(Long aliId);
    // returnType: com.alibaba.onetouch.basedata.utils.client.BaseResult/**
     * 根据aliId获取有看货权的拍档用户列表
     * @param aliId 阿里ID
     * @return 有看货权的拍档用户列表
     */
    async getCheckGoodsUsersByAliId(aliId) {
      const args = [
        {
          $class: 'java.lang.Long',
          $: aliId,
        }
      ];
      return await consumer.invoke(this.ctx, 'getCheckGoodsUsersByAliId', args, { });
    }

    // java source code:  public BaseResult<PartnerUserVO> getAdminUserByAliId(Long aliId);
    // returnType: com.alibaba.onetouch.basedata.utils.client.BaseResult/**
     * 返回拍档的主账号用户
     * @param aliId 阿里ID
     * @return 拍档的主账号用户
     */
    async getAdminUserByAliId(aliId) {
      const args = [
        {
          $class: 'java.lang.Long',
          $: aliId,
        }
      ];
      return await consumer.invoke(this.ctx, 'getAdminUserByAliId', args, { });
    }

    // java source code:  BaseResult<Boolean> getDrawerCheckingByAliId(final Long aliId);
    // returnType: com.alibaba.onetouch.basedata.utils.client.BaseResult/**
     * 鉴权接口,是否具备函调服务资质(工厂认证专员)
     *
     * 提供给@App端用
     *
     * @param aliId 阿里ID
     * @return 通过true or 不通过false
     *
     * 结果处理参考：
     *    BaseResult<Boolean> result;
     *    if(result==null){
     *    throw new BizException("","");
     *    }
     *    if(!result.isSuccess()){
     *    throw new BizException("","");
     *    }
     *    if(result.getValue()!=null){
     *    Boolean  b = result.getValue();
     *    }
     */
    async getDrawerCheckingByAliId(aliId) {
      const args = [
        {
          $class: 'java.lang.Long',
          $: aliId,
        }
      ];
      return await consumer.invoke(this.ctx, 'getDrawerCheckingByAliId', args, { });
    }

    // java source code:  public Map<Long, Long> getAdminUserByPartnerList(List<Long> partnerIdList);
    // returnType: java.util.Map/**
     * 批量查询拍档主账号
     * @param partnerIdList 拍档id列表
     * @return 拍档管理员,key为partnerid，value为aliid
     */
    async getAdminUserByPartnerList(partnerIdList) {
      const args = [
        {
          $class: 'java.util.List',
          $: partnerIdList,
          generic: [{'type':'java.lang.Long'}],
        }
      ];
      return await consumer.invoke(this.ctx, 'getAdminUserByPartnerList', args, { });
    }
  }
  return IPartnerUserRemoteService;
};

/* eslint-enable */
