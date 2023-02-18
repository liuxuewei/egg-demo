'use strict';

const net = require('net');
// 指定连接的tcp server ip，端口
const options = {
  host: '127.0.0.1',
  port: 6688,
};
const tcp_client = net.Socket();
const encoding = 'utf8';
tcp_client.setEncoding(encoding);
// 连接 tcp server
tcp_client.connect(options, function() {
  console.log('开始连接服务器...');
  const data = { type: 'getMachineTemperature', tab: '获取设备温度' };
  setInterval(() => { // 定时向服务器获取数据
    if (!tcp_client.destroyed) { // 没有被销毁才继续推消息
      console.log('发送数据', data);
      tcp_client.write(JSON.stringify(data), encoding);
    }
  }, 2000);
});

// 接收数据
tcp_client.on('data', function(data) {
  const dataString = data.toString(encoding);
  const dataJson = JSON.parse(dataString);
  console.log('接收到数据: %j', dataJson);
});

// 超时
tcp_client.on('timeout', () => {
  console.error('连接超时！');
  tcp_client.end();
});

tcp_client.on('end', function() {
  console.log('数据传输完成!');
  tcp_client.end();
});


tcp_client.on('error', function(err) {
  console.error('客户端出错!', err.message);
  tcp_client.end();
});
