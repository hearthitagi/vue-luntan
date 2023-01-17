const postsModel = db.model('posts', {
    avatar: { type: String },
    categoryId: { type: Number },
    createTime: { type: String },
    title: { type: String },
    updateTime: { type: String },
    userId: { type: String },
    userName: { type: String },
    content: { type: String },
    coverImgUrl: { type: String },
    readNum: { type: Number },
    zan: { type: Number },
}, 'posts')

// 用户列表的查询
const postList = () => {
    return postsModel.find()
        .then(res => { return res })
        .catch(err => { console.log('查询错误：' + err); return null })
}

module.exports = {
    postList,postsModel
}