const commentModel = db.model('comments', {
    userName: { type: String },
    avatar: { type: String },
    text: { type: String },
    userId: { type: String },
    replyId: { type: String },
    replyObj: { type: String }
}, 'comments')

// 评论列表查询
const commentList = () => commentModel.find()
.then(res => { return res })
.catch(err => { console.log('查询错误：' + err); return null })

module.exports = {
    commentList,commentModel
}