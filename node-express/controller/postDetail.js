const { postList } = require(process.cwd() + "/model/posts");

//用户列表
const getPostDetail = async (req, res) => {
    let postData = await postList();
    postData = postData.filter((value)=>{ return value._id.toString() == req.params.id })
    sendJson(res, 200, "操作成功", postData[0])
}

module.exports = {
    getPostDetail
}