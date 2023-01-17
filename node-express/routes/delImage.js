var express = require('express');
var router = express.Router();
// process.cwd() 表示命令执行的文件路径
const { getDelImage } = require(process.cwd() + '/controller/delImage');

router.post('/', getDelImage);

module.exports = router;