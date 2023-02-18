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
  const data =  '{\"HeartBeat\":8}{\"HeartBeat\":9}{\"Kvalue\":\"1.00\",\"Bvalue\":\"-6.00\",\"Linesnum\":\"20\",\"EncUpper\":\"190.00\",\"EncLower\":\"186.00\",\"EncTarget\":\"188.00\",\"hddata1\":\"0.00\",\"hddata2\":\"0.00\",\"hddata3\":\"0.00\",\"hddata4\":\"0.00\",\"hddata5\":\"0.00\",\"hddata6\":\"0.00\",\"hddata7\":\"0.00\",\"hddata8\":\"0.00\",\"hddata9\":\"0.00\",\"hddata10\":\"0.00\",\"hddata11\":\"0.00\",\"hddata12\":\"0.00\",\"hddata13\":\"0.00\",\"hddata14\":\"0.00\",\"hddata15\":\"0.00\",\"hddata16\":\"0.00\",\"hddata17\":\"0.00\",\"hddata18\":\"0.00\",\"hddata19\":\"0.00\",\"hddata20\":\"0.00\",\"hddata21\":\"0.00\",\"hddata22\":\"0.00\",\"hddata23\":\"0.00\",\"hddata24\":\"0.00\",\"hddata25\":\"0.00\",\"hddata26\":\"0.00\",\"hddata27\":\"0.00\",\"hddata28\":\"0.00\",\"hddata29\":\"0.00\",\"hddata30\":\"0.00\",\"hddata31\":\"0.00\",\"hddata32\":\"0.00\",\"hddata33\":\"0.00\",\"hddata34\":\"0.00\",\"hddata35\":\"0.00\",\"hddata36\":\"0.00\",\"hddata37\":\"0.00\",\"hddata38\":\"0.00\",\"hddata39\":\"0.00\",\"hddata40\":\"0.00\",\"hddata41\":\"0.00\",\"hddata42\":\"0.00\",\"hddata43\":\"0.00\",\"hddata44\":\"0.00\",\"hddata45\":\"0.00\",\"hddata46\":\"0.00\",\"hddata47\":\"0.00\",\"hddata48\":\"0.00\",\"hddata49\":\"0.00\",\"hddata50\":\"0.00\",\"hddata51\":\"0.00\",\"hddata52\":\"0.00\",\"hddata53\":\"0.00\",\"hddata54\":\"0.00\",\"hddata55\":\"0.00\",\"hddata56\":\"0.00\",\"hddata57\":\"0.00\",\"hddata58\":\"0.00\",\"hddata59\":\"0.00\",\"hddata60\":\"0.00\",\"hddata61\":\"0.00\",\"hddata62\":\"0.00\",\"hddata63\":\"0.00\",\"hddata64\":\"0.00\",\"hddata65\":\"0.00\",\"hddata66\":\"0.00\",\"hddata67\":\"0.00\",\"hddata68\":\"0.00\",\"hddata69\":\"0.00\",\"hddata70\":\"0.00\",\"hddata71\":\"0.00\",\"hddata72\":\"0.00\",\"hddata73\":\"0.00\",\"hddata74\":\"0.00\",\"hddata75\":\"0.00\",\"hddata76\":\"0.00\",\"hddata77\":\"0.00\",\"hddata78\":\"0.00\",\"hddata79\":\"0.00\",\"hddata80\":\"0.00\",\"hddata81\":\"0.00\",\"hddata82\":\"0.00\",\"hddata83\":\"0.00\",\"hddata84\":\"0.00\",\"hddata85\":\"0.00\",\"hddata86\":\"0.00\",\"hddata87\":\"0.00\",\"hddata88\":\"0.00\",\"hddata89\":\"0.00\",\"hddata90\":\"0.00\",\"hddata91\":\"0.00\",\"hddata92\":\"0.00\",\"hddata93\":\"0.00\",\"hddata94\":\"0.00\",\"hddata95\":\"0.00\",\"hddata96\":\"0.00\",\"hddata97\":\"0.00\",\"hddata98\":\"0.00\",\"hddata99\":\"0.00\",\"hddata100\":\"0.00\"}{\"HeartBeat\":10}';
  setInterval(() => { // 定时向服务器获取数据
    if (!tcp_client.destroyed) { // 没有被销毁才继续推消息
      console.log('发送数据', data);
      tcp_client.write(JSON.stringify(data), encoding);
    }
  }, 2000);
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
