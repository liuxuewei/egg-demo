'use strict';

const Controller = require('egg').Controller;
const nodemailer = require("nodemailer");

// 定义邮件服务器服，个人建议使用QQ邮箱
const transporter = nodemailer.createTransport({
  host: 'smtp.qq.com',
  service: 'qq',
  secure: true,
  // 我们需要登录到网页邮箱中，然后配置SMTP和POP3服务器的密码
  auth: {
      user: '1006724845@qq.com',
      pass: 'bosobffdllfqbbib'
      // user: 'alibaba-test@qq.com',
      // pass: 'lxw@24374988'
  }
});

class EmailController extends Controller {
  // http://localhost:7001/send-email
  async sendEmail() {
    const { ctx } = this;
    const message = {
      from: '1006724845@qq.com',
      to: 'xuewei.lxw@alibaba-inc.com',
      img: 'https://img.alicdn.com/tfs/TB1bbLH2eL2gK0jSZPhXXahvXXa-2460-1020.png',
      title: '第三届前端艺术家沙龙于10月24日成功举办',
      date: '2020-10-24',
      text: '由阿里巴巴ICBU深圳前端艺术家团队主办的前端艺术家沙龙与10月24日举办，本次分享会邀请了行内知名讲师，与大家畅聊“前端职业成长”心得。'
  }
    // 发送邮件
    var sendHtml = `<div>
        <div style="border:1.0px solid #eeeeee;padding:10.0px; max-width: 800px;margin: 0 auto;">
            <img style="margin-bottom: 10px; width: 100%;" src="${message.img}">
            <h2 style="font-size: 14px; font-weight: blod">${message.title}</h2>
            <p>时间：${message.date}</p>
            <p>简介：${message.text}</p>
        </div>
        <div style="text-align: center;margin-top: 12px;">
            <p >邮件声明：此邮件由 <strong>系统</strong> 发送，如有问题请联系邮箱：${message.from}</p>
        </div>
    </div>`;
    var mailOptions = {
      // 发送邮件的地址
      from: message.from, // login user must equal to this user
      // 接收邮件的地址
      to: message.to,
      // 邮件主题
      subject: '阿里练习生头条',
      // 以HTML的格式显示，这样可以显示图片、链接、字体颜色等信息
      html: sendHtml
    };
    // 发送邮件，并有回调函数
    const result = await transporter.sendMail(mailOptions);
    console.log(result);
    ctx.body = result;
  }
}

module.exports = EmailController;
