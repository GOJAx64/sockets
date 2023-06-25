const express = require('express'); 
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

app.use( express.static( __dirname + '/public') );

io.on('connection', ( socket ) => {
    console.log('Conectado');

    // socket.on('message-to-server', (data) => {
    //     console.log(data);
    // });

    // socket.emit('message-from-server', { msg: 'Hello client' });
});

server.listen(8080, () => {
    console.log('Server running at port 8080');
})