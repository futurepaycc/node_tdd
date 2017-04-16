'use strict'

let service = require('./service.js')

module.exports = function (server) {
    server.get('/hello', function (req, res) {
        res.send({ result: true, msg: 'success' })
    })
    server.post('/login',async function(req,res){
        res.send(req.body)
        // let result = service.findUserByNamePassword
    })
}