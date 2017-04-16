"use strict"

const SERVER_PORT = 8080

let restify = require('restify')

let server = restify.createServer()

server.get('/hello',function(req,res){
    res.send({result:true,msg:'success'})
})

server.listen(SERVER_PORT,function(){
    console.log(`server start up at http://localhost:${SERVER_PORT}`)
})