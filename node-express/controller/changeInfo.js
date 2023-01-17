const { userList, userModel } = require(process.cwd() + "/model/userList");
const { commentModel } = require(process.cwd() + "/model/comments");
const { postsModel } = require(process.cwd() + "/model/posts");

const { verifyToken } = require(process.cwd() + "/common/token");

//修改用户信息
const getChangeInfo = async (req, res) => {
    if (req.headers.authorization) {
        let userListData = await userList();

        verifyToken(req.headers.authorization,(error, decoded)=>{
            if (error) { sendJson(res, 401, "操作成功", error); return; }
            userListData = userListData.filter((value) => {
                return value._id == decoded.userId;
            })[0];
        })

        if (req.body.userName || req.body.email || req.body.phone || req.body.sex || req.body.remark) {
            let sex = 0;
            if (req.body.sex == "男") { sex = 1; }
            else if (req.body.sex == "女") { sex = 2; }
            else { sex = 0; }
            userModel.updateOne({ _id: userListData._id },
                { userName: req.body.userName, email: req.body.email, phone: req.body.phone, sex: sex, remark: req.body.remark },
                (error, writeOpResult) => {
                    if (error) { console.log(error); return; }
                    sendJson(res, 200, "操作成功", writeOpResult)
                })
        }
        if (req.body.avatar) {
            userModel.updateOne({ _id: userListData._id },
                { avatar: req.body.avatar },
                (error, writeOpResult) => {
                    if (error) { console.log(error); return; }
                    sendJson(res, 200, "操作成功", writeOpResult)
                })
            commentModel.updateMany({ userId: userListData._id }, { avatar: req.body.avatar },
                (error, docs) => {
                    if (error) { console.log(error); return; }
                    sendJson(res, 200, "操作成功", docs)
                })
            postsModel.updateMany({ userId: userListData._id }, { avatar: req.body.avatar },
                (error, docs) => {
                    if (error) { console.log(error); return; }
                    sendJson(res, 200, "操作成功", docs)
                })

        }
    }

}
module.exports = {
    getChangeInfo
}