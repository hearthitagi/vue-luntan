const { commentList,commentModel } = require(process.cwd() + "/model/comments");

// 查询好友列表
const getCommentList = async (req, res) => {
    let commentListData = await commentList();
    if (req.body.postId) {
        commentListData = commentListData.filter(value=>{
            return value.replyObj == "post" && value.replyId == req.body.postId;
        })
        sendJson(res, 200, "操作成功", commentListData)
    }
}
module.exports = {
    getCommentList
}