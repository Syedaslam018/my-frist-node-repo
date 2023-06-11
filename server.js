const http = require('http')

const server = http.createServer((req,res) => {
    // console.log(req.headers, req.url, req.method)
    res.setHeader('Content-Type', 'text/html')
    res.write('<html>')
    res.write('<head><title>some page i created for my server</title></head>')
    res.write('<body><h1>Hello from my node js server<h1></body>')
    res.write('')
    res.write('</html>')
    res.end()
})

server.listen(4000)