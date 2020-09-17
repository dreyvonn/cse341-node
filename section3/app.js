const http = require('http');

const routes = require('./routes');

//create the server, passed a requestListener 
const server = http.createServer(routes);

server.listen(3000);