
'use strict';
const net = require('net');

const PORT = 6688;
const encoding = 'utf8';

class TcpServer {
  constructor() {
    // 缓存客户端
    this.ClientSockets = {};
    this.createServer();
  }

  createServer() {
    this.server = net.createServer();
    // 监听 端口
    this.server.listen(PORT, () => {
      console.log('TCP服务启动成功，监听端口：' + PORT);
    });

    this.server.on('connection', clientSocket => {
      const clientKey = clientSocket.remoteAddress;
      this.ClientSockets[clientKey] = clientSocket;
      console.log(clientKey + '连接服务器成功');

      this.refreshClients();

      // 处理客户端消息
      clientSocket.on('data', data => {
        const dataString = data.toString(encoding);
        console.log('客户端 %s 请求原始数据: %j', clientKey, dataString);
        const dataJson = JSON.parse(dataString);
        clientSocket.setEncoding(encoding);
        console.log('客户端 %s 请求处理数据:%j', clientKey, dataJson);
      });


      // 客户端正常断开时执行
      clientSocket.on('close', () => {
        clientSocket.destroy();
        this.ClientSockets[clientKey] = null;
        delete this.ClientSockets[clientKey];
        console.log('客户端 %s 断开连接', clientKey);
        this.refreshClients();
      });
      // 客户端正异断开时执行
      clientSocket.on('error', err => {
        clientSocket.destroy();
        this.ClientSockets[clientKey] = null;
        delete this.ClientSockets[clientKey];
        console.log('客户端 %s 发生错误,并断开连接, error: %', clientKey, err.message);
        this.refreshClients();
      });
    });

    this.server.on('error', e => {
      console.log('TCP服务端异常!', e);
      this.closeClientSockets();
    });

    this.server.on('close', () => {
      console.log('TCP服务端关闭!');
      this.closeClientSockets();
    });
  }


  // 关闭服务器
  closeClientSockets() {
    for (const key in this.ClientSockets) {
      console.log('finish', key);
      if (this.ClientSockets[key]) {
        this.ClientSockets[key].end();
        this.ClientSockets[key].destroy();
      }
    }
  }

  // 关闭服务器
  finishServer() {
    this.server.close();
  }
  // 刷新服务器并发数据
  refreshClients() {
    this.server.getConnections((error, count) => {
      console.log('当前连接客户端个数为：' + count);
    });
  }
}

module.exports = TcpServer;
