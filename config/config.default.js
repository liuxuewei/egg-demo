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
    'permission',
    // 'router',
  ];

  config.permission = {
    blackList: ['刘学炜', '小明'],
  };

  config.userInterceptor = {
    whiteList: [ '/', /\/login/i, /\/public/ ],
  };

  config.session = {
    key: 'EGG_SESS',
    maxAge: 24 * 3600 * 1000, // ms、'session'
    httpOnly: true,
    encrypt: true,
  };

  config.view = {
    defaultViewEngine: 'nunjucks',
    // root: [
    //   path.join(appInfo.baseDir, 'app/view'),
    // ].join(',')
  };

  config.logger = {
    dir: `${appInfo.root}/logs/${appInfo.name}`,
  };

  // 主动刷新 token ctx.rotateCsrfSecret()
  config.security = {
    xframe: {
      value: 'SAMEORIGIN',
    },
    csrf: {
      headerName: 'x-csrf-token', // 通过 header 传递 CSRF token 的默认字段为 x-csrf-token
      queryName: 'csrfToken', // 设置通过 query 传递 CSRF token 的默认字段为 csrfToken
      bodyName: 'csrfToken', // 设置通过 body 传递 CSRF token 的默认字段为 csrfToken
    },
    domainWhiteList: [ '.mayue.com' ], // ctx.redirect(url)、Access-Control-Allow-Origin
  };
  return {
    ...config,
  };
};
