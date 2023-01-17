const { userList, userModel } = require(process.cwd() + "/model/userList");
const { verifyToken } = require(process.cwd() + "/common/token");

// 查询好友列表
const getFriendList = async (req, res) => {
    if (req.headers.authorization) {
        let userListData = await userList();

        // 根据id查用户信息--查看好友信息
        if (req.body.friend) {
            userListData = userListData.filter((value) => {
                return value._id.toString() == req.body.friend;
            });
            sendJson(res, 200, "操作成功", userListData[0])
        }
        // 根据id数组查用户信息--查看好友列表
        if (req.body.friendsList) {
            userListData = userListData.filter((value) => {
                if (req.body.friendsList.includes(value._id.toString())) {
                    return true;
                }
            });
            sendJson(res, 200, "操作成功", userListData)
        }
        // 添加好友
        if (req.body.friendLike) {
            verifyToken(req.headers.authorization, (err, decoded) => {
                userModel.updateOne({ _id: decoded.userId }, { $addToSet: { friends: req.body.friendLike } },
                    (error, docs) => {
                        if (error) { sendJson(res, 401, "操作成功", error); return; }
                        sendJson(res, 200, "操作成功", docs)
                    })
            })
        }
        // 删除好友
        if (req.body.friendHeat) {
            verifyToken(req.headers.authorization, (err, decoded) => {
                userModel.updateOne({ _id: decoded.userId }, { $pull: { friends: req.body.friendHeat } },
                    (error, docs) => {
                        if (error) { sendJson(res, 401, "操作成功", error); return; }
                        sendJson(res, 200, "操作成功", docs)
                    })
            })
        }
    }

}
module.exports = {
    getFriendList
}