'use strict'

const NEED_PARSE_JSON = true
let service = require('./service.js')

module.exports = function (server) {
    server.get('/hello', function (req, res) {
        res.send({ result: true, msg: 'success' })
    })
    server.post('/login',async function(req,res){
        let reqObj = {}
        if(NEED_PARSE_JSON){/**/
            reqObj = JSON.parse(req.body)
        }
        // res.send(req.body)
        let result  = await service.findUserByNamePassword(reqObj.name,reqObj.password)

        if(result && result.attributes){
            res.send({result:true,msg:'登录成功'})
        }else{
            res.send({result:false,msg:'用户名或者密码不正确'})
        }
    })
}