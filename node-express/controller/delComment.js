// process.cwd() 表示命令执行的文件路径
const { commentModel } = require(process.cwd() + "/model/comments");


//删除评论
const getDelComment = async (req, res) => {
    if (req.body.commentId) {
        // 删除评论
        commentModel.deleteOne({ _id: req.body.commentId }, (error, docs) => {
            if (error) { console.log(error); return; }
            sendJson(res, 200, "操作成功", docs)
        });
    }

}
module.exports = {
    getDelComment
}