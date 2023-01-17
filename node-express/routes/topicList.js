var express = require('express');
var router = express.Router();

// process.cwd() 表示命令执行的文件路径
const { getTopicList } = require(process.cwd() + '/controller/topicList')
router.get('/', getTopicList)

module.exports = router;