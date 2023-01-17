const webSocket = require('ws');

const ws = new webSocket.Server({ port: 8000 }); //创建服务器,端口为8000

let userNum = 0; //统计在线人数
let chatList = [];//记录聊天记录

//调用 broadcast 广播，实现数据互通和实时更新
ws.broadcast = function (msg) {
  ws.clients.forEach((client) => {
    client.send(msg);
  });
};

ws.on("connection", (client) => {

  //给客户端编号,也就是参与聊天的用户
  userNum++;
  ws.broadcast(JSON.stringify({ funName: 'userCount', users: userNum, chat: chatList })); //建立连接成功广播一次当前在线人数

  //接收前端发送过来的数据
  client.on('message', function (e) {
    var resData = JSON.parse(e)
    chatList.push({ userId: resData.userId,avatar:resData.avatar, msg: resData.msg });//每次发送信息，都会把信息存起来，然后通过广播传递出去，这样此每次进来的用户就能看到之前的数据
    ws.broadcast(JSON.stringify({ userId: resData.userId,avatar:resData.avatar, msg: resData.msg })); //每次发送都相当于广播一次消息
  });
  // 下线
  client.on('close', function (e) {
    userNum--;//建立连接关闭在线人数 -1
    ws.broadcast(JSON.stringify({ funName: 'userCount', users: userNum, chat: chatList }));//建立连接关闭广播一次当前在线人数
  })
  //报错信息
  client.on("error", (err) => {
    if (err) {
      console.log(err);
    }
  });
});
