// process.cwd() 表示命令执行的文件路径
const { postList, postsModel } = require(process.cwd() + "/model/posts");


//删除帖子
const getDelPost = async (req, res) => {

    if (req.body.postId) {
        // 删除帖子
        postsModel.deleteOne({ _id: req.body.postId }, (error, docs) => {
            if (error) { console.log(error); return; }
            sendJson(res, 200, "操作成功", docs)
        });
    }

}
module.exports = {
    getDelPost
}