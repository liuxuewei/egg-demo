'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/index.htm', controller.home.home);
  router.get('/send-email', controller.email.sendEmail);
};
