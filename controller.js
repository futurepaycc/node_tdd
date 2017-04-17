'use strict'

let service = require('./service.js')

module.exports = function (server) {
    //测试接口
    server.get('/hello', function (req, res) {
        res.send({ result: true, msg: 'success' })
    })
    //登录接口
    server.post('/login',async function(req,res){
        let reqObj = req.body
        let result  = await service.findUserByNamePassword(reqObj.name,reqObj.password)
        if(result && result.attributes){
            res.send({result:true,msg:'登录成功'})
        }else{
            res.send({result:false,msg:'用户名或者密码不正确'})
        }
    })
}