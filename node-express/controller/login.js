const { userList } = require(process.cwd() + "/model/userList");
const { signToken } = require(process.cwd() + "/common/token");

//登录
const getLogin = async (req, res) => {
    let userListData = await userList()
    if (req.body.loginName && req.body.password) {
        userListData = userListData.filter((value) => {
            return (value.loginName == req.body.loginName) && (value.password == req.body.password)
        })
        if (userListData.length !== 0) {
            // payload,options
            const token  =  signToken({userId: userListData[0]._id},{expiresIn: "6h"})
            sendJson(res, 200, "操作成功", token)
        }else{
            sendJson(res, 404, "用户名/密码错误", { data:req.body })
        }

        // // 设置cookieID
        // res.cookie('USER_ID',userListData[0]._id,{
        //     domain: 'localhost',
        //     maxAge: 1000 * 60 * 60 * 6,//过期时间 6h
        //     signed: true, // 设置签名
        // })
        // res.cookie('USER_ID',userListData[0]._id,{
        //     domain: '59.110.124.95',
        //     maxAge: 1000 * 60 * 60 * 6,//过期时间 6h
        //     signed: true, // 设置签名
        // })
        // // 发送数据
        // sendJson(res, 200, "操作成功", userListData[0])
    }
}

module.exports = {
    getLogin
}