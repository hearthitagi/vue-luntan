var express = require('express');
var router = express.Router();

// process.cwd() 表示命令执行的文件路径
const { getPostList } = require(process.cwd() + '/controller/posts')
router.post('/', getPostList)
module.exports = router;