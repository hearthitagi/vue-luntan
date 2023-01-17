var express = require('express');
var router = express.Router();

// process.cwd() 表示命令执行的文件路径
const { getPostDetail } = require(process.cwd() + '/controller/postDetail')
router.get('/:id', getPostDetail)

module.exports = router;