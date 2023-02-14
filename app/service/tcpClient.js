'use strict';

const Service = require('egg').Service;

const net = require('net');


let tcp_request_client = null;
let tcp_receive_broadcast_client = null;
const HOST = '127.0.0.1';
const PORT = 6688;
const encoding = 'utf8';

// 指定连接的tcp server ip，端口
const serverOptions = {
  host: HOST,
  port: PORT,
};
const broadcastServerOptions = {
  host: HOST,
  port: PORT + 1,
};

class TcpClient extends Service {
  async startClient() {
    if (tcp_request_client) return Promise.resolve(true);
    return new Promise((resolve, reject) => {
      tcp_request_client = net.Socket();
      tcp_request_client.setEncoding(encoding);
      // 连接 tcp server
      const connection = tcp_request_client.connect(serverOptions, () => {
        console.log('开始连接TCP服务器...');
        resolve(true);
      });
      connection.on('error', error => {
        reject(error);
        console.error(error);
      });
    });
  }
  async startReceiveBroadcastClient() {
    if (tcp_receive_broadcast_client) return Promise.resolve(true);
    return new Promise((resolve, reject) => {
      tcp_receive_broadcast_client = net.Socket();
      tcp_receive_broadcast_client.setEncoding(encoding);
      // 连接 tcp server
      const connection = tcp_receive_broadcast_client.connect(broadcastServerOptions, () => {
        console.log('开始连接广播服务器...');
        resolve(true);
      });
      connection.on('error', error => {
        reject(error);
        console.error(error);
      });
      tcp_receive_broadcast_client.on('data', data => {
        const dataString = data.toString(encoding);
        try {
          console.log('parse' + dataString);
          const dataJson = JSON.parse(dataString);
          console.log('接收到广播: %j', dataJson);
        } catch (e) {
          console.log(e);
        }
      });
    });
  }
  async requestServer(params) {
    if (!tcp_request_client) {
      await this.startClient();
    }
    // if (!tcp_receive_broadcast_client) {
    //   await this.startReceiveBroadcastClient();
    // }
    // 添加请求追踪ID
    params.traceId = this.ctx.traceId;
    return new Promise((resolve, reject) => {
      tcp_request_client.write(JSON.stringify(params), encoding);
      tcp_request_client.once('data', data => {
        const dataString = data.toString(encoding);
        try {
          console.log('parse' + dataString);
          const dataJson = JSON.parse(dataString);
          if (dataJson.traceId === params.traceId) {
            console.log('接收到数据: %j', dataJson);
            resolve(dataJson);
          }
        } catch (e) {
          console.log(e);
          reject(e);
        }
      });
    });
  }

}

module.exports = TcpClient;
