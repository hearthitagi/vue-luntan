var createError = require('http-errors');
var express = require('express');
var path = require('path');
const cors = require('cors');//跨域
const bodyParser = require('body-parser')//post
// const cookieParser = require('cookie-parser');//cookie
const { jwt } = require(process.cwd() + '/common/checkToken')

// 创建app对象
var app = express();
// 配置数据库
require(process.cwd() + '/common/db.js')
require(process.cwd() + '/common/utils.js')

// ***********************************************引擎设置
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');//模板引擎

// ************************************************中间件
app.use(bodyParser.json({limit:'5mb'}));
app.use(bodyParser.urlencoded({ extended:true,limit:'5mb' }));
// app.use(cookieParser("encryption encryption"));//使用cookie解析中间件
app.use(express.static(path.join(__dirname, 'public')));//托管静态文件
app.use(jwt);//token验证

// ************************************************路由配置
// 导入
var saveImageRouter = require('./routes/saveImage');//上传图片
var delImageRouter = require('./routes/delImage');//删除图片
var postsRouter = require('./routes/posts');//帖子列表
var postDetailRouter = require('./routes/postDetail');//帖子详情
var sendPostRouter = require('./routes/sendPost');//帖子发送
var delPostRouter = require('./routes/removePost');//帖子删除
var myPostRouter = require('./routes/myPost');//我的贴子
var topicRouter = require('./routes/topicList');//专题列表
var loginRouter = require('./routes/login');//登录

var registryRouter = require('./routes/registry');//注册
var changeInfoRouter = require('./routes/changeInfo');//修改用户信息
var loginerInfoRouter = require('./routes/loginerInfo');//查看登录用户信息
var friendsRouter = require('./routes/friendsList');//查看好友列表
var commentsRouter = require('./routes/commentList');//查看评论列表
var sendCommentRouter = require('./routes/sendComment');//发送评论
var delCommentRouter = require('./routes/removeComment');//删除评论
// 激活
app.use(cors())//跨域中间件
app.use('/saveImage',saveImageRouter);//上传图片
app.use('/delImage',delImageRouter);//删除图片
app.use('/postList', postsRouter);//帖子列表
app.use('/postDetail', postDetailRouter);//帖子详情
app.use('/sendPost', sendPostRouter);//帖子发送
app.use('/delPost', delPostRouter);//帖子删除
app.use('/myPost',myPostRouter)//我的贴子
app.use('/topicList',topicRouter);//专题列表
app.use('/login', loginRouter);//登录
app.use('/registry',registryRouter);//注册
app.use('/changeInfo',changeInfoRouter);//修改用户信息
app.use('/loginerInfo',loginerInfoRouter);//查看登录用户信息
app.use('/friendsList',friendsRouter);//查看好友列表
app.use('/commentList',commentsRouter);//查看评论列表
app.use('/sendComment',sendCommentRouter);//发送评论
app.use('/delComment',delCommentRouter);//删除评论

// *************************************************错误
// 捕获错误并发送到错误控制
app.use(function (req, res, next) {
  next(createError(404));
});
// 错误控制
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


module.exports = app;
