const http = require('http')

const server = http.createServer((req, res)=>{
    console.log(req)

    res.writeHead(200, {"Content-Type": "text/plain"});

    res.end("Hello, Node.js!")
})

const PORT = 3000

server.listen(PORT, ()=>{
    console.log(`server is running on http://localhost:${PORT}`)
})
