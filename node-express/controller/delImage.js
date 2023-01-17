const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname,'..','public/images')


//发送帖子
const getDelImage = (req, res) => {
    fs.unlink(path.join(dirPath, req.body.path), (err) => {
        if (err) {
            console.error(err);
            return;
        }else{
            sendJson(res, 200, "操作成功", {});
        }
    }) 
}
module.exports = {
    getDelImage
}

