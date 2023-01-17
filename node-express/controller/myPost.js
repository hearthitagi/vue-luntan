const { postList } = require(process.cwd() + "/model/posts");
const { verifyToken } = require(process.cwd() + "/common/token");
//我的贴子
const getMyPost = async (req, res) => {

    if(req.headers.authorization){
        let postListData = await postList();        

        verifyToken(req.headers.authorization,(error, decoded)=>{
            if (error) { sendJson(res, 401, "操作成功", error); return; }
            postListData = postListData.filter((value) => {
                return value.userId == decoded.userId;
            })
            if (req.body.pageNum && req.body.pageSize) { //根据页码查询
                postListData = postListData.reverse().splice( (req.body.pageNum-1)*req.body.pageSize,req.body.pageSize )
            }
            sendJson(res, 200, "操作成功", {total:postListData.length,rows:postListData});
        })
    }else{
        sendJson(res, 200, "操作失败", res);
    }  
}
module.exports = {
    getMyPost
}