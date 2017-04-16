"use strict"

const SERVER_PORT = 8080

let restify = require('restify')

let server = restify.createServer()

server.listen(SERVER_PORT,function(){
    console.log(`server start up at http://localhost:${SERVER_PORT}`)
})

server.use(restify.bodyParser({ mapParams: false }))

require('./controller.js')(server)

module.exports = server