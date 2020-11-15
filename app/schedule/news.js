const Subscription = require('egg').Subscription;

class News extends Subscription {
    // 通过 schedule 属性来设置定时任务的执行间隔等配置
    static get schedule() {
        //  配置文档 https://github.com/eggjs/egg-schedule
        return {
            interval: '1h', // 1小时间隔 单位，s、m、h、
            // 定时任务cron表达式： 
            // 秒(0 - 59)，分(0 - 59)，时(0 - 23)，日(1 - 31)，月(1 - 12)，星期(0 - 7) (0 or 7 is Sun)
            // eg: 每三小时准点执行一次
            //cron: '0 0 */3 * * *',
            type: 'worker', // 指定一个 worker 都需要执行
        };
    }

    // subscribe 是真正定时任务执行时被运行的函数
    async subscribe() {
        const url = 'https://artist.alibaba.com';
        const message = {
            img: 'https://img.alicdn.com/tfs/TB1bbLH2eL2gK0jSZPhXXahvXXa-2460-1020.png',
            title: '第三届前端艺术家沙龙于10月24日成功举办',
            text: '由阿里巴巴ICBU深圳前端艺术家团队主办的前端艺术家沙龙与10月24日举办，本次分享会邀请了行内知名讲师，与大家畅聊“前端职业成长”心得。'
        }
        const res = await this.ctx.curl('https://oapi.dingtalk.com/robot/send?access_token=e00613e4b184c97f677cc2be2cf366e321e326bf66204266a18d227df7a6fbff', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            data: {
                "msgtype": "actionCard",
                "actionCard": {
                    "title": `【前端头条】${message.title}`,
                    "text": `![screenshot](${message.img})
                    \n # ${message.title}
                    \n ${message.text}`,
                    "btnOrientation": "0",
                    "singleTitle": "阅读全文",
                    "singleURL": `dingtalk://dingtalkclient/page/link?url=${url}&pc_slide=false`
                }
            }
        });
        this.ctx.logger.info('send news status', res.status);
    }
}

module.exports = News;