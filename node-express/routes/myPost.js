var express = require('express');
var router = express.Router();

// process.cwd() 表示命令执行的文件路径
const { getMyPost } = require(process.cwd() + '/controller/myPost')
router.post('/', getMyPost)
module.exports = router;