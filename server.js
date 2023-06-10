const http = require('http')

const server = http.createServer((req,res) => {
    console.log('Syed Aslam')
})

server.listen(4000)