const path = require('path');
const http = require('http');
const express = require('express');
const socketio = require('socket.io')
const formatMessage = require('./utils/messages')

const app = express();
const server = http.createServer(app);
const io = socketio(server)

//Set static folder
app.use(express.static(path.join(__dirname,'public')))



//Run when client connects
io.on('connection', socket => {


    //Welcome current user
    socket.emit('message',formatMessage(botName,'welcome to ChatApp!'))


})
const PORT = 3000 || process.env.PORT;

server.listen(PORT,() => console.log('Server running on port 3000'));