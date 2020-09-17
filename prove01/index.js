const http = require('http');
const express = require('express');

const routes = require('./routes/prove01');

const server = http.createServer(routes);

server.listen(3000);