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
    'permission'
  ];

  config.permission = {
    blackList: ['刘学炜']
  }

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
