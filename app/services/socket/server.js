let socket = require('socket.io');

export default (server) => {
    let io = socket(server);
    io.on('connection', function (socket) {
        console.log('socket connected');

        socket.on('chat message', function (msg) {
            io.emit('chat message', msg);
        });
    });
};