var express = require('express');
var router = express.Router();

// process.cwd() 表示命令执行的文件路径
const { getLogin } = require(process.cwd() + '/controller/login')
router.post('/', getLogin)
module.exports = router;