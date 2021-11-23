'use strict';

const Command = require('egg-bin').Command;

const Jar2proxy = require('jar2proxy');

class AliProxyCommand extends Command {
  get description() {
    return '生成 Proxy 层的代码';
  }

  * run({ cwd, rawArgv, execArgv, env }) {
    const jar2proxy = new Jar2proxy({
        base: baseDir,
        debugEnabled: false,
        defaultTpl: path.resolve(path.join(__dirname, useGeneric ? './tpl/generic.tpl' : './tpl/hessian.tpl')),
        analyzeEgg: false,
        maxJavaHeapSize: 2048,
        customMavenServer: {
            protocol: 'http:',
            hostname: 'mvnonline.alibaba-inc.com',
            ip: '100.67.77.215',
            port: 80,
            pathname: '/mvn/repository',
        },
    });
    yield jar2proxy.run();
  }
}

module.exports = AliProxyCommand;
