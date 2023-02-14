'use strict';

const Service = require('egg').Service;

const net = require('net');


let tcp_client = null;
const HOST = '127.0.0.1';
const PORT = 6688;
const encoding = 'utf8';

// 指定连接的tcp server ip，端口
const serverOptions = {
  host: HOST,
  port: PORT,
};

class TcpService extends Service {
  async startClient() {
    if (tcp_client) return Promise.resolve(true);
    return new Promise(resolve => {
      tcp_client = net.Socket();
      tcp_client.setEncoding(encoding);
      // 连接 tcp server
      tcp_client.connect(serverOptions, () => {
        console.log('开始连接服务器...');
        resolve(true);
      });
    });

  }
  async requestServer(params) {
    if (!tcp_client || !tcp_client.destroyed) {
      await this.startClient();
    }
    return new Promise(resolve => {
      tcp_client.write(JSON.stringify(params), encoding);
      tcp_client.once('data', data => {
        const dataString = data.toString(encoding);
        const dataJson = JSON.parse(dataString);
        console.log('接收到数据: %j', dataJson);
        resolve(dataJson);
      });
    });
  }

}

module.exports = TcpService;
