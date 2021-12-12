'use strict';
const Subscription = require('egg').Subscription;

class News extends Subscription {
  // 通过 schedule 属性来设置定时任务的执行间隔等配置
  static get schedule() {
    // 配置文档 https://github.com/eggjs/egg-schedule
    return {
      interval: '2h', // 间隔30分钟 单位，s、m、h、
      // 定时任务cron表达式：
      // 秒(0 - 59)，分(0 - 59)，时(0 - 23)，日(1 - 31)，月(1 - 12)，星期(0 - 7) (0 or 7 is Sun)
      // eg: 每三小时准点执行一次
      //cron: '0 0 */3 * * *',
      type: 'worker', // 指定一个 worker 都需要执行
    };
  }

  // subscribe 是真正定时任务执行时被运行的函数
  async subscribe() {
    const { ctx } = this;
    // TODO 获取头条新闻
    const headNews = [{
      title: '【前端头条】第三届前端艺术家沙龙于10月24日成功举办',
      text: '由阿里巴巴ICBU深圳前端艺术家团队主办的前端艺术家沙龙与10月24日举办，本次分享会邀请了行内知名讲师，与大家畅聊“前端职业成长”心得。',
      messageURL: 'https://artist.alibaba.com',
      picURL: 'https://img.alicdn.com/tfs/TB1bbLH2eL2gK0jSZPhXXahvXXa-2460-1020.png',
    }];
    // TODO 获取新闻列表
    const messages = [
      ...headNews,
      {
        title: '图片加载失败后CSS样式处理最佳实践',
        messageURL: 'https://www.zhangxinxu.com/wordpress/2020/10/css-style-image-load-fail/',
        picURL: 'https://image.zhangxinxu.com/image/blog/202010/2020-10-24_193506.png'
      },
      {
        title: '我的前端成长之路',
        messageURL: 'https://juejin.im/post/6889239308201361416',
        picURL: 'https://img.alicdn.com/tfs/TB1BKb0qBFR4u4jSZFPXXanzFXa-1492-938.png'
      }
    ];
    // 钉钉自定义机器人文档 https://ding-doc.dingtalk.com/doc#/serverapi2/qf2nxq/26eaddd5
    const res = await ctx.curl('https://oapi.dingtalk.com/robot/send?access_token=4e99a08b02a26a4995c2284d9e7094b51c2e925a4e207997478111491589559b', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      data:
            {
              msgtype: 'feedCard',
              feedCard: {
                links: messages,
              },
            },
            // {
            //     "msgtype": "actionCard",
            //     "actionCard": {
            //         "title": `【前端头条】${headNews[0].title}`,
            //         "text": `![screenshot](${headNews[0].picURL})
            //         \n # ${headNews[0].title}
            //         \n ${headNews[0].text}`,
            //         "btnOrientation": "0",
            //         "singleTitle": "阅读全文",
            //         "singleURL": `dingtalk://dingtalkclient/page/link?url=${headNews[0].messageURL}&pc_slide=false`
            //     }
            // }
    });
    ctx.logger.info('send news status', res.status);
  }
}

module.exports = News;
