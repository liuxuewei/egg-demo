'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/login', controller.home.login);
  router.get('/index.htm', controller.home.home);
  router.all('/send-email', controller.email.sendEmail);

	router.get('/test/testPage.html', controller.test.testPage.index);
};/*end*/

