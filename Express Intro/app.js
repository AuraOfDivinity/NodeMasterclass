const http = require('http')
const express = require('express')

const app = express()

app.use((req, res, next) => {
    console.log('In the middle ware functions')
    next()//next allows to flow to continue to other middleware functions
}); //Allows to add a new middleware function. The function added here will be executed for every incoming request

app.use((req, res, next) => {
    console.log('In another middle ware functions')
});

const server = http.createServer(app)

server.listen(3000)