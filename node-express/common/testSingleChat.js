const WebSocket = require('ws');
const wss = new WebSocket.Server({
    port:8001
})
let user={};//存储连接用户
// let online=0;//存储在线人数

let chatList = [];//记录聊天记录

wss.on('connection',function(ws,req){
    // online =wss._server._connections;
    // ws.send('当前在线' + online+'个连接');

    let i = req.url;//提取网址参数
    //提取我是谁,这部分代码只有第一次连接的时候运行,如果后面连接的m值相同,前面的连接会被覆盖身份
    let m = i.match(/(?<=\?)[^:]+?(?=:|$)/);
    if(m){
        user[m] = ws;
    };
    //提取发给谁
    let u = i.match(/(?<=:).+?$/);

    user[m].send(chatList)

    ws.on('message',function(msg){      
        if(u){
            if (user[u]){
                if (user[u].readyState===1){
                    user[u].send(msg);
                    chatList.push(msg);
                }else{
                    ws.send('对方掉线');
                }
            }else{
                ws.send('找不到对象');
            }
        }
        // else{//广播
        //     wss.clients.forEach(function each(client) {
        //         if (client !== ws && client.readyState === WebSocket.OPEN) {
        //             client.send(msg);
        //         }
        //     });
        // }
        // if (online != wss._server._connections){
        //     online = wss._server._connections;
        //     ws.send('当前在线' + online + '个连接');
        // }       
    })
})



[
    '/saveImage',
    '/delImage',
    '/postList',
    '/postDetail',
    '/sendPost',
    '/delPost',
    '/myPost',
    '/topicList',
    '/login',
    '/logout',
    '/registry',
    '/changeInfo',
    '/loginerInfo',
    '/friendsList',
    '/commentList',
    '/sendComment',
    '/delComment',
    /^\/public\/.*/
]