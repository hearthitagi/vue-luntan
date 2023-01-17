const { postList } = require(process.cwd() + "/model/posts")


//用户列表
const getPostList = async (req, res) => {
    let postData = await postList();
    if(req.body.postsId){ //根据贴子id查询
        postData = postData.filter((value)=>{ return value._id == req.body.postsId })[0]
    }
    if (req.body.title) { //根据贴子标题查询
        postData = postData.filter((value)=>{ return value.title.includes(req.body.title) })
        if(req.body.titlePageSize && req.body.titlePageNum){
            postData = postData.reverse().splice( (req.body.titlePageNum-1)*req.body.titlePageSize,req.body.titlePageSize )  
        }
    }
    if (req.body.categoryId) { //根据专题分类查询
        postData = postData.filter((value)=>{ return value.categoryId == req.body.categoryId })
        if(req.body.topicPageSize && req.body.topicPageNum){
            postData = postData.reverse().splice( (req.body.topicPageNum-1)*req.body.topicPageSize,req.body.topicPageSize )  
        }
    }
    if (req.body.pageNum && req.body.pageSize) { //根据页码查询
        postData = postData.reverse().splice( (req.body.pageNum-1)*req.body.pageSize,req.body.pageSize )
    }
    sendJson(res, 200, "操作成功", {total:postData.length,rows:postData})
}

module.exports = {
    getPostList
}