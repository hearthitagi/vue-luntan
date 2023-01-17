var express = require('express');
var router = express.Router();

// process.cwd() 表示命令执行的文件路径
const { getFriendList } = require(process.cwd() + '/controller/friendsList')
router.post('/', getFriendList)
module.exports = router;