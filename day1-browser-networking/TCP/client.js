var net = require('net');

var client = new net.Socket();
client.connect(3002, '127.0.0.1', function() {
	console.log('Connected');
	client.write('Hello Node.js');
});

client.on('data', function(data) {
	console.log('Received: ' + data);
	client.destroy();
});

client.on('close', function() {
	console.log('Connection closed');
});