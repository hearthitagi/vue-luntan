const jsonWebToken = require('jsonwebtoken');
var signkey = 'adafD_asjdhk^%213&jkasasdh)&*981jkasd123`~qwdeqe';

// Payload 部分，官方提供七个字段这边省略，可以携带一些可以识别用户的信息。例如 userId。
let signToken = (payload,options)=>{
    return jsonWebToken.sign(payload,signkey,options)
}
let verifyToken = (token,callback)=>{
    let needToken = token.split(' ')[1];
    return jsonWebToken.verify(needToken,signkey,callback)
}
module.exports = {signToken,verifyToken}