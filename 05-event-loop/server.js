/*exit event loop*/

const http = require('http')

const server = http.createServer((req, res)=>{
    console.log(req.method, req.url, req.headers)
    process.exit()
})

const PORT = 3001

server.listen(PORT, ()=>{
    console.log(`server is running on http://localhost:${PORT}`)
})