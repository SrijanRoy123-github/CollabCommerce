
const express = require('express')
const http = require('http')
const { Server } = require('socket.io')

const app = express()
const server = http.createServer(app)
const io = new Server(server, { cors: { origin: '*' }})

io.on('connection', (socket)=>{
  console.log('client connected')
  socket.on('chat', (msg)=> io.emit('chat', msg))
})

server.listen(4010, ()=> console.log('Chat Socket.IO on 4010 (skeleton)'))
