'use strict';

module.exports = [
  {
    id: 1,
    router: '/public/test',
    code: 'return $browserParams;',
  },
  {
    id: 2,
    router: '/user/test',
    code: 'return $ctx.userId;',
  },
  {
    id: 3,
    router: '/crypto/test',
    code: `const crypto = require('crypto');
          // 创建哈希函数 sha256
          const hash = crypto.createHash('sha256');
          // 输入流编码：utf8、ascii、binary（默认）
          hash.update('mayue', 'utf8');
          // 输出编码：hex、binary、base64
          return hash.digest('hex')`,
  },
  {
    id: 5,
    router: '/dubbo/test',
    code: `
          const { who = 'guest' } = this.request.query;
          const dubbo2ServiceResult = await this.service.testDubboService.sayHello(who);
          return dubbo2ServiceResult;
        `,
  },
];
