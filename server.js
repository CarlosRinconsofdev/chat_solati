const express = require('express')
const app = express()

const http = require('http')
const server = http.createServer(app)

const {Server} = require('socket.io')
const io = new Server(server)

io.on('connection', (socket)=>{
    /*console.log('Usuario conectado')
    */
    /*socket.on('chat', (mensaje)=>{
        console.log('MSG: '+mensaje)
    })
    */

    socket.on('chat', (mensaje) => {
        io.emit('chat', mensaje)
    })
})


app.get('/', (req, res)=>{
    //res.send('<h1>Aplicacion de CHAT</h1>')
    //console.log(__dirname)
    res.sendFile(`${__dirname}/cliente/index.html`)    
})

server.listen(3000, ()=>{
    console.log('servidor corriendo en http://localhost:3000')
})