var express = require('express');
var router = express.Router();

// process.cwd() 表示命令执行的文件路径
const { getCommentList } = require(process.cwd() + '/controller/commentList')
router.post('/', getCommentList)
module.exports = router;