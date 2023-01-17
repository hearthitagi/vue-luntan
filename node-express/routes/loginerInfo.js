var express = require('express');
var router = express.Router();

// process.cwd() 表示命令执行的文件路径
const { getLoginerInfo } = require(process.cwd() + '/controller/loginerInfo')
router.get('/', getLoginerInfo)
module.exports = router;