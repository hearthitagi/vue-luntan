const userModel = db.model('users', {
    loginName: { type: String },
    password: { type: String },
    userName: { type: String },
    sex: { type: Number },
    remark: { type: String },
    email: { type: String },
    phone: { type: String },
    avatar: { type: String },
    friends:{ type: Array }
}, 'users')

// 用户列表查询
const userList = () => userModel.find()
.then(res => { return res })
.catch(err => { console.log('查询错误：' + err); return null })

module.exports = {
    userList,userModel
}