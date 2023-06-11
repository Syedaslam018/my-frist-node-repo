const http = require('http')

const server = http.createServer((req,res) => {
    // console.log(req.headers, req.url, req.method)
    const url = req.url;
    if(url === '/home'){
    res.setHeader('Content-Type', 'text/html')
    res.write('<html>')
    res.write('<head><title>Homepage</title></head>')
    res.write('<body><h1>Welcome Home<h1></body>')
    res.write('')
    res.write('</html>')
    return res.end()
    }
    if(url === '/about') {
        res.setHeader('Content-Type', 'text/html')
    res.write('<html>')
    res.write('<head><title>About Us</title></head>')
    res.write('<body><h1>Welcome to about us page<h1></body>')
    res.write('')
    res.write('</html>')
    return res.end()
    }
    if(url === '/node'){
        res.setHeader('Content-Type', 'text/html')
    res.write('<html>')
    res.write('<head><title>My Node JS Project</title></head>')
    res.write('<body><h1>Welcome to my node js Project<h1></body>')
    res.write('')
    res.write('</html>')
    return res.end()
    }
    res.setHeader('Content-Type', 'text/html')
    res.write('<html>')
    res.write('<head><title>some page i created for my server</title></head>')
    res.write('<body><h1>Hello from my node js server<h1></body>')
    res.write('')
    res.write('</html>')
    res.end()
})

server.listen(4000)