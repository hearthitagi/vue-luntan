var express = require('express');
var router = express.Router();

// process.cwd() 表示命令执行的文件路径
const { getDelPost } = require(process.cwd() + '/controller/delPost')
router.post('/', getDelPost)
module.exports = router;