//这是运行在node.js上的
const WebSocket = require('ws');
const wss = new WebSocket.Server({
    port: 8001
})

let user = {};//存储连接用户
let chatList = [];
wss.on('connection', function (ws, req) {

    let m = req.url.match(/(?<=\?)[^:]+?(?=:|$)/);    //提取我是谁,这部分代码只有第一次连接的时候运行,如果后面连接的m值相同,前面的连接会被覆盖身份
    if (m && user.m == undefined) {
        user[m] = ws;
    };
    let u = req.url.match(/(?<=:).+?$/);              //提取发给谁
    
    user[m].send(JSON.stringify({ funName: 'history', hisList: chatList }))

    ws.on('message', function (e) {
        if (u) {
            var resData = JSON.parse(e);
            if (user[u]) {
                chatList.push({ user: m, userAvatar: resData.userAvatar, target: u, targetAvatar: resData.targetAvatar, msg: resData.msg })
                user[u].send(JSON.stringify({ user: m, userAvatar: resData.userAvatar, target: u, targetAvatar: resData.targetAvatar, msg: resData.msg }));
                user[m].send(JSON.stringify({ user: m, userAvatar: resData.userAvatar, target: u, targetAvatar: resData.targetAvatar, msg: resData.msg }));
                // if (user[u].readyState===1){    
                //     ws.send('发送成功');
                // }else{
                //     ws.send('对方掉线');
                // }
            }
        }
    })
})