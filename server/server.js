import http from 'http'
import socket from 'socket.io';
import app from './app';
import './config/env/db'; // connect to mongo

let server = http.Server(app);
let io = socket(server);
io.on('connection', function (socket) {
    console.log('socket connected');

    socket.on('chat message', function (msg) {
        io.emit('chat message', msg);
    });
});
export default server;