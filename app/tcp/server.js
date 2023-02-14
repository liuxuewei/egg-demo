
'use strict';
const net = require('net');

const PORT = 6688;
const encoding = 'utf8';
// 缓存客户端
const ClientSockets = {};

class TcpServer {
  constructor() {
    this.createServer();
  }

  createServer() {
    this.server = net.createServer();
    // 监听 端口
    this.server.listen(PORT, () => {
      console.log('TCP服务启动成功，监听端口：' + PORT);
    });

    this.server.on('connection', clientSocket => {
      const clientKey = clientSocket.remoteAddress + ':' + clientSocket.remotePort;
      ClientSockets[clientKey] = clientSocket;
      // 广播
      this.broadcast(clientKey + ', 连接服务器成功!');

      this.refreshClients();

      // 处理客户端消息
      clientSocket.on('data', data => {
        const dataString = data.toString(encoding);
        const dataJson = JSON.parse(dataString);
        console.log('客户端 %s 请求数据:%j', clientKey, dataJson);
        if (dataJson.type === 'getMachineTemperature') {
          const cpuTemperature = Number(Math.random() * 100).toFixed(2);
          const result = { clientKey, type: dataJson.type, data: cpuTemperature };
          const resultString = JSON.stringify(result);
          clientSocket.setEncoding(encoding);
          clientSocket.write(resultString);
        }
      });
      // 客户端正常断开时执行
      clientSocket.on('close', () => {
        clientSocket.destroy();
        ClientSockets[clientKey] = null;
        delete ClientSockets[clientKey];
        console.log('客户端 %s 断开连接!', clientKey);
        this.refreshClients();
      });
      // 客户端正异断开时执行
      clientSocket.on('error', err => {
        clientSocket.destroy();
        ClientSockets[clientKey] = null;
        delete ClientSockets[clientKey];
        console.log('客户端 %s 发生错误并断开连接: %s', clientKey, err.message);
        this.refreshClients();
      });
    });

    this.server.on('error', e => {
      console.log('服务端异常!', e);
      this.broadcast('服务端异常!');
      this.closeClientSockets();
    });

    this.server.on('close', () => {
      console.log('服务端关闭!');
      this.broadcast('服务端关闭!');
      this.closeClientSockets();
    });

  }

  // 向所有客户端广播消息
  broadcast(msg) {
    for (const key in ClientSockets) {
      console.log('broadcast', key);
      const dataJson = JSON.stringify({ data: msg });
      ClientSockets[key] && ClientSockets[key].write(dataJson);
    }
  }

  // 关闭服务器
  closeClientSockets() {
    for (const key in ClientSockets) {
      console.log('finish', key);
      ClientSockets[key] && ClientSockets[key].end();
      ClientSockets[key] && ClientSockets[key].destroy();
    }
  }

  // 关闭服务器
  finishServer() {
    this.server.close();
  }
  // 刷新服务器并发数据
  refreshClients() {
    this.server.getConnections(function(err, count) {
      console.log('当前连接客户端个数为：' + count);
    });
  }
}

module.exports = TcpServer;
