import axios from "axios";


// 删除图片
export function delImage(path) {
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + window.localStorage.getItem('userInfo');
    return axios.post('/recreyed/delImage',{path})
}

//读取所有帖子
export function allPost() {
    return axios.post('/recreyed/postList')
}
//分页读取帖子
export function stagePost(pageSize, pageNum) {
    return axios.post('/recreyed/postList',{pageSize,pageNum})
}
//读取专题帖子
export function topicPost(categoryId,topicPageSize,topicPageNum) {
    return axios.post('/recreyed/postList', {categoryId,topicPageSize,topicPageNum})
}
// 根据ID读取贴子
export function postById(postsId) {
    return axios.post('/recreyed/postList', {postsId})
}
// 读取帖子列表（标题搜索）
export function searchList(title,titlePageSize,titlePageNum) {
    return axios.post('/recreyed/postList', {title,titlePageSize,titlePageNum})
}
// 我的帖子
export function myPost(pageSize, pageNum) {
    return axios.post('/recreyed/myPost',{pageSize,pageNum})
}
// 读取专题列表
export function topicList() {
    return axios.get('/recreyed/topicList')
}
// 读取帖子详情页
export function postDetail(id) {
    return axios.get(`/recreyed/postDetail/${id}`)
}
// 发送帖子
export function addPost(categoryId, title, content, coverImgUrl) {
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + window.localStorage.getItem('userInfo');
    return axios.post('/recreyed/sendPost', {categoryId,title,content,coverImgUrl})
}
// 修改贴子
export function changePost(postId,editCategoryId, editTitle, editContent, editCoverImgUrl) {
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + window.localStorage.getItem('userInfo');
    return axios.post('/recreyed/sendPost', {postId,editCategoryId, editTitle, editContent, editCoverImgUrl})
}
// 删除帖子
export function removePost(postId) {
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + window.localStorage.getItem('userInfo');
    return axios.post(`/recreyed/delPost`,{postId})
}
//读取帖子评论
export function commentList(postId) {
    return axios.post(`/recreyed/commentList`,{postId})
}
//发送评论
export function sendComment(text,replyObj,replyId) {
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + window.localStorage.getItem('userInfo');
    return axios.post(`/recreyed/sendComment`,{text,replyObj,replyId})
}
// 删除评论
export function delComment(commentId) {
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + window.localStorage.getItem('userInfo');
    return axios.post("/recreyed/delComment", {commentId})
}
//登录
export function Login(loginName, password) {
    let data = {loginName,password}
    return axios.post(`/recreyed/login`, data)
}
//注册
export function register(loginName, password, userName, sex, remark) {
    let data = {loginName,password,userName,sex,remark}
    return axios.post(`/recreyed/registry`, data)
}
//查看登录用户信息
export function loginerInfo() {
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + window.localStorage.getItem('userInfo');
    return axios.get("/recreyed/loginerInfo")
}
// 修改个人信息
export function changeUserInfo(userName, email, phone, sex, remark) {
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + window.localStorage.getItem('userInfo');
    let data = {userName, email, phone, sex, remark}
    return axios.post("/recreyed/changeInfo", data)
}
// 修改头像
export function changeUserAvatar(avatar) {
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + window.localStorage.getItem('userInfo');
    return axios.post("/recreyed/changeInfo", {avatar})
}
// 查看好友信息--根据用户ID获取信息
export function friendInfo(friend){
    return axios.post(`/recreyed/friendsList`,{friend})
}
// 查看好友列表
export function friendsList(friendsList){
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + window.localStorage.getItem('userInfo');
    return axios.post(`/recreyed/friendsList`,{friendsList})
}
// 添加好友
export function addFriend(friendLike){
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + window.localStorage.getItem('userInfo');
    return axios.post(`/recreyed/friendsList`,{friendLike})
}
// 删除好友
export function delFriend(friendHeat){
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + window.localStorage.getItem('userInfo');
    return axios.post(`/recreyed/friendsList`,{friendHeat})
}

// 音乐
export function recommendMusic() {
    return axios.get(`/music-api/personalized/newsong?limit=25`)
}
// 音乐播放
export function musicPlay(musicId) {
    return axios.get(`/music-api/song/url?id=${musicId}`)
}
// 推荐MV
export function recommendMv() {
    return axios.get(`/music-api/personalized/mv`)
}
//MV排行
export function topListMv() {
    return axios.get(`/music-api/top/mv?limit=22`)
}
//mv播放
export function mvPlay(mvId) {
    return axios.get(`/music-api/mv/url?id=${mvId}`)
}

//智熄机器人
export function robot(question) {
    return axios.get(`/jiSuApi/iqa/query?appkey=13a3b0932ec70af7&question=${question}`)
}
//忘记密码
// 读取评论回复
// 回复评论

