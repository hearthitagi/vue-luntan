var express = require('express');
var router = express.Router();

// process.cwd() 表示命令执行的文件路径
const { getDelComment } = require(process.cwd() + '/controller/delComment')
router.post('/', getDelComment)
module.exports = router;