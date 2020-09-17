const http = require('http');

const routes = require('./sec3routes');

const server = http.createServer(routes);

server.listen(3000);