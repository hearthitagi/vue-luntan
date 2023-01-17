var express = require('express');
var router = express.Router();

// process.cwd() 表示命令执行的文件路径
const { getChangeInfo } = require(process.cwd() + '/controller/changeInfo')
router.post('/', getChangeInfo)
module.exports = router;