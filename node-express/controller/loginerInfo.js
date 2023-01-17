const { userList } = require(process.cwd() + "/model/userList");
const { verifyToken } = require(process.cwd() + "/common/token");

//登录用户
const getLoginerInfo = async (req, res) => {
    let userListData = await userList()

    if (req.headers.authorization) {
        verifyToken(req.headers.authorization,(error, decoded)=>{
            if (error) {
                console.log(error); 
                sendJson(res, 401, "操作成功", error); return; }
            userListData = userListData.filter((value) => {
                return value._id == decoded.userId;
            })
            sendJson(res, 200, "操作成功", userListData[0])
        })
    }
    else{
        sendJson(res, 404, "无token请求", null)
    }
}
module.exports = {
    getLoginerInfo
}