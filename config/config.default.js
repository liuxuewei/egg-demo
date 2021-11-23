/* eslint valid-jsdoc: "off" */

'use strict';

const path = require('path');

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1605407793830_8026';

  // add your middleware config here
  config.middleware = [
    'trace',
    'permission'
  ];

  config.permission = {
    blackList: ['刘学炜', '小明']
  };

  config.session = {
    key: 'EGG_SESS',
    maxAge: 24 * 3600 * 1000, // ms、'session'
    httpOnly: true,
    encrypt: true,
  };

  config.view = {
    defaultViewEngine: 'nunjucks'
    // root: [
    //   path.join(appInfo.baseDir, 'app/view'),
    // ].join(',')
  };


  return {
    ...config
  };
};
