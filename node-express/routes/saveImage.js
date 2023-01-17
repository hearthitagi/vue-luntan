var express = require('express');
var router = express.Router();
// process.cwd() 表示命令执行的文件路径
const { getSaveImage,upload } = require(process.cwd() + '/controller/saveImage');

router.post('/',upload.single('file'), getSaveImage);

module.exports = router;