var express = require('express')
const bodyParser = require('body-parser')
var app = express()
var http = require('http').Server(app)
var io = require('socket.io')(http)
//para servir contenido estatico
app.use(express.static(__dirname))

//body parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

var server = http.listen(3000, ()=>{
    console.log("servidor corriendo en puerto:",
    server.address().port)
})