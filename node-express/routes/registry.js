var express = require('express');
var router = express.Router();

// process.cwd() 表示命令执行的文件路径
const { getRegistry } = require(process.cwd() + '/controller/registry')
router.post('/', getRegistry)
module.exports = router;