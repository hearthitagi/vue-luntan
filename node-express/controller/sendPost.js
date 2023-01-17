const moment = require('moment');
// process.cwd() 表示命令执行的文件路径
const { postsModel } = require(process.cwd() + "/model/posts");
const { userList } = require(process.cwd() + "/model/userList");
const { verifyToken } = require(process.cwd() + "/common/token");


//发送帖子
const getSendPost = async (req, res) => {

    // 验证是否为登录用户
    if (req.headers.authorization) {
        let userListData = await userList();

        verifyToken(req.headers.authorization, (error, decoded) => {
            if (error) { sendJson(res, 401, "操作成功", error); return; }
            userListData = userListData.filter((value) => {
                return value._id == decoded.userId;
            })
        })

        if (req.body.categoryId && req.body.title && req.body.content && req.body.coverImgUrl) {
            // 新帖子
            let newPost = {
                avatar: userListData[0].avatar,
                categoryId: req.body.categoryId,
                createTime: moment().format('YYYY-MM-DD hh:mm:ss'),
                title: req.body.title,
                updateTime: '',
                userId: userListData[0]._id.toString(),
                userName: userListData[0].userName,
                content: req.body.content,
                coverImgUrl: req.body.coverImgUrl,
                readNum: 0,
                zan: 0,
            };
            // 插入新帖子
            postsModel.insertMany(newPost, (error, docs) => {
                if (error) { console.log(error); return; }
                sendJson(res, 200, "操作成功", docs)
            })
        }
        if (req.body.postId && req.body.editCategoryId && req.body.editTitle && req.body.editContent && req.body.editCoverImgUrl) {
            postsModel.updateOne({ _id: req.body.postId }, { categoryId: req.body.editCategoryId, title: req.body.editTitle, content: req.body.editContent, coverImgUrl: req.body.editCoverImgUrl },
                (error, docs) => {
                    if (error) { console.log(error); return; }
                    sendJson(res, 200, "操作成功", docs)
                })
        }
    }

}
module.exports = {
    getSendPost
}