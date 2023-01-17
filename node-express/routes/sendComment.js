var express = require('express');
var router = express.Router();

// process.cwd() 表示命令执行的文件路径
const { getSendComment } = require(process.cwd() + '/controller/sendComment')
router.post('/', getSendComment)
module.exports = router;