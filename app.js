const http = require('http')
const fs = require('fs');
const { runInNewContext } = require('vm');

const server = http.createServer((req,res) => {
    const url = req.url;
    const method = req.method;
    if(url === '/'){
        fs.readFile('message.txt', (err,data) => {
            if(err) throw err;

        res.write('<html>')
        res.write('<head><title>Enter Message</title></head>')
        res.write(`<body>${data}</body>`)
        res.write('<body><form action="/message" method="POST"><input type = "text" name="message"><button type = "submit">Send</buttom></form></body>')
        res.write('')
        res.write('</html>')
        return res.end()
        })
        
    }
    if(url === '/message' && method === 'POST'){
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk)
            body.push(chunk)
        });
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            fs.writeFileSync('message.txt', message)
        })
        
        res.statusCode = 302;
        res.setHeader('Location', '/')
        return res.end();
    }
})

server.listen(4000)