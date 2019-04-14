const http = require('http') //Used to import a required module
const routes = require('./routes')// ./required since this is a local module

const server = http.createServer(routes)
server.listen(3000)