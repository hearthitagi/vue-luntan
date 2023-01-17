const moment = require('moment');
// process.cwd() 表示命令执行的文件路径
const { commentList,commentModel } = require(process.cwd() + "/model/comments");
const { userList } = require(process.cwd() + "/model/userList");
const { verifyToken } = require(process.cwd() + "/common/token");


//发送帖子
const getSendComment = async (req, res) => {
    if (req.body.text && req.body.replyObj && req.body.replyId) {
        // 验证是否为登录用户
        if(req.headers.authorization){
            let userListData = await userList();
            
            verifyToken(req.headers.authorization,(error, decoded)=>{
                if (error) { sendJson(res, 401, "操作成功", error); return; }
                userListData = userListData.filter((value)=>{ 
                    return value._id == decoded.userId;
                })
            })


            
            // 新评论
            let newComment = { 
                avatar: userListData[0].avatar,
                text: req.body.text,
                userId: userListData[0]._id.toString(),
                userName: userListData[0].userName,
                replyId:req.body.replyId,
                replyObj:req.body.replyObj,
            };
            // 插入新帖子
            commentModel.insertMany(newComment,(error,docs)=>{
                if(error){ console.log(error); return; }
                sendJson(res, 200, "操作成功", docs)
            })
        } 
    }
}
module.exports = {
    getSendComment
}