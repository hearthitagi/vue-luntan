var express = require('express');
var router = express.Router();

// process.cwd() 表示命令执行的文件路径
const { getSendPost } = require(process.cwd() + '/controller/sendPost')
router.post('/', getSendPost)
module.exports = router;