let multer = require('multer');//multer插件

// 磁盘存储
let storage = multer.diskStorage({
    destination:(req, file, cb)=>{
    cb(null, './public/images')//目标文件夹
    },
    filename:(req, file, cb)=> {
    cb(null, `${Date.now()}-${file.originalname}`)//重命名
    }
  })
const upload = multer({ storage:storage })


//
const getSaveImage =  (req, res) => {
    let url = `http://59.110.124.95:3000/images/${req.file.filename}`
    sendJson(res, 200, "上传成功", Object.assign(req.file,{ url }))
}

module.exports = {
    getSaveImage,upload
}