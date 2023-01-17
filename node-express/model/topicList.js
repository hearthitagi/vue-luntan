const model = db.model('category', {
    categoryId: { type: Number },
    name: { type: String },
    cover: { type: String },
}, 'category')

// 专题列表的查
const topicList = () => model.find()
.then(res => { return res })
.catch(err => { console.log('查询错误：' + err); return null })

module.exports = {
    topicList
}