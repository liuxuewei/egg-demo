'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/login', controller.home.login);
  router.get('/index.htm', controller.home.home);
  router.get('/proxy.json', controller.home.proxyInvoke);
  router.get('/promise.json', controller.home.promise);
  router.get('/public/draw', controller.home.drawImage);
  router.all('/public/send-email', controller.email.sendEmail);
  router.get('/public/run-dubbo', controller.dubbo.runDubbo);
};/*end*/



