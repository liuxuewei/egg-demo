'use strict';
const path = require('path');

module.exports = {
    eggFramework: 'egg',
    directoryToJar: path.join(__dirname, '../libs'),
    // mavenRepository: 'http://mvnonline.alibaba-inc.com/mvn/repository',
    group: 'HSF',
    version: '1.0.0',
    uniqueId: 'uniqueId',
    tpl: path.join(__dirname, 'proxy.js.tpl'),
    method: {},
    responseTimeout: 10000,
    services: require('fs').readdirSync(`${__dirname}/proxy-cfg/`)
    .filter(name => name.match(/.js$/))
    .map(name => require(`${__dirname}/proxy-cfg/${name}`)),
};
