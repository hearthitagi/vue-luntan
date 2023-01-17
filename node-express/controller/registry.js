const { userModel } = require(process.cwd() + "/model/userList");

//注册
const getRegistry = (req, res) => {
    if (req.body.loginName && req.body.password && req.body.userName) {
        let sex = 0;
        if(req.body.sex == "男"){ sex = 1; }
        else if(req.body.sex == "女"){ sex = 2; }
        else{ sex = 0; }
        let newUser = { 
            loginName: req.body.loginName,
            password: req.body.password,
            userName: req.body.userName,
            sex: sex,
            remark: req.body.remark,
            email: "",
            phone: "",
            avatar: "",
        };
        userModel.insertMany(newUser,(error,docs)=>{
            if(error){ console.log(error); return; }
            sendJson(res, 200, "操作成功", docs)
        })
    }
}
module.exports = {
    getRegistry
}