// 导入mongoose
const mongoose = require('mongoose');
// 导入配置文件
const configObj = require(process.cwd() + "/common/config.json").db_config

// 连接数据库
const db = mongoose.createConnection(
    `mongodb://${configObj.host}:${configObj.port}/${configObj.dbname}`,
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err) => {
        if (err) { console.log('数据库连接失败：', configObj); return;}
        console.log('数据库连接成功');
    })

// 声明全局变量  全局都可以用
global.db = db