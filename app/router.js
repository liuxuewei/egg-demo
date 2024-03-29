'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.home);
  router.get('/login', controller.home.login);
  router.get('/index.htm', controller.home.index);
  router.get('/proxy.json', controller.home.proxyInvoke);
  router.get('/promise.json', controller.home.promise);
  router.get('/public/draw', controller.home.drawImage);
  router.all('/public/send-email', controller.email.sendEmail);
  router.get('/public/run-dubbo', controller.dubbo.runDubbo);
  router.get('/public/tcp', controller.tcp.index);
};/* end*/

