
'use strict';
const net = require('net');
const crypto = require('crypto');

const PORT = 6688;
const encoding = 'utf8';

class TcpServer {
  constructor(type) {
    this.serverType = type || 'normal'; // normal, broadcast
    this.port = type === 'broadcast' ? PORT + 1 : PORT; // 广播的端口单独设置
    // 缓存客户端
    this.ClientSockets = {};
    this.createServer();
  }

  createServer() {
    this.server = net.createServer();
    this.serverId = crypto.randomUUID();
    // 监听 端口
    this.server.listen(this.port, () => {
      console.log(this.serverId + ' TCP服务' + this.serverType + '启动成功，监听端口：' + this.port);
    });

    this.server.on('connection', clientSocket => {
      const clientKey = clientSocket.remoteAddress + ':' + clientSocket.remotePort;
      this.ClientSockets[clientKey] = clientSocket;
      console.log(clientKey + '连接服务器' + this.serverType + ':' + this.serverId);

      this.refreshClients();
      
      if (this.serverType === 'broadcast') {
        setInterval(() => {
          // 广播连接状态
          this.broadcast(clientKey + ', 连接广播服务器状态正常!');
        }, 5000);
      } else {
        // 处理客户端消息
        clientSocket.on('data', data => {
          const dataString = data.toString(encoding);
          const dataJson = JSON.parse(dataString);
          clientSocket.setEncoding(encoding);
          console.log('客户端 %s 请求数据:%j', clientKey, dataJson);
          const result = { clientKey, type: dataJson.type, traceId: dataJson.traceId };
          if (dataJson.type === 'getMachineTemperature') {
            const cpuTemperature = Number(Math.random() * 100).toFixed(2);
            result.data = cpuTemperature;
          } else {
            result.data = '请求成功';
          }
          const resultString = JSON.stringify(result);
          clientSocket.write(resultString);
        });
      }


      // 客户端正常断开时执行
      clientSocket.on('close', () => {
        clientSocket.destroy();
        this.ClientSockets[clientKey] = null;
        delete this.ClientSockets[clientKey];
        console.log('客户端 %s 断开连接 %s %s', clientKey, this.serverType, this.serverId);
        this.refreshClients();
      });
      // 客户端正异断开时执行
      clientSocket.on('error', err => {
        clientSocket.destroy();
        this.ClientSockets[clientKey] = null;
        delete this.ClientSockets[clientKey];
        console.log('客户端 %s 发生错误,并断开连接%s %s, error:', clientKey, this.serverType, this.serverId, err.message);
        this.refreshClients();
      });
    });

    this.server.on('error', e => {
      console.log(this.serverType + ':' + this.serverId + ' TCP服务端异常!', e);
      this.closeClientSockets();
    });

    this.server.on('close', () => {
      console.log(this.serverType + ':' + this.serverId + ' TCP服务端关闭!');
      this.closeClientSockets();
    });
  }

  // 向所有客户端广播消息
  broadcast(msg) {
    for (const key in this.ClientSockets) {
      const dataJson = { type: 'broadcast', data: msg };
      const dataString = JSON.stringify({ dataJson });
      if (this.ClientSockets[key]) {
        this.ClientSockets[key].write(dataString);
      }
    }
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
      console.log(this.serverType + ':' + this.serverId + ' 当前连接客户端个数为：' + count);
    });
  }
}

module.exports = TcpServer;
