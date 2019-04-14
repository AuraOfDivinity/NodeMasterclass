const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
    const url = req.url
    const method = req.method
    if(url == '/create-users' && method === 'POST'){
        const messageBody = []
        req.on('data', (dataChunk) => {
            console.log(dataChunk)
            messageBody.push(dataChunk)
        });

        req.on('end', () => {
            const parsedMessage = Buffer.concat(messageBody).toString()
            console.log(parsedMessage.split('=')[1])
        })

        res.write('<html>')
        res.write('<head><title>assignment1</title></head>')
        res.write('<body><ul><li>Asel</li><li>Thanuka</li><li>Jehan</li></ul></body>')
        res.write('</html>')
        return res.end()
    }
    res.write('<html>')
    res.write('<head><title>assignment1</title></head>')
    res.write('<body><h1>Welcome to assignment 1</h1><form action="/create-users" method= "POST"><input type ="text" name = "message"><button type = "submit">Send</button></form></body>')
    res.write('</html>')
    return res.end()



})

server.listen(3000)