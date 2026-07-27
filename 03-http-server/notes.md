# HTTP Server in Node.js

## What is the HTTP module?

The `http` module is a built-in Node.js module used to create web servers.

No installation is required.

```javascript
const http = require("http");
```

## Creating a Server

```javascript
const server = http.createServer((req, res) => {
    res.end("Hello, Node.js!");
});
```

## Starting the Server

```javascript
server.listen(3000, () => {
    console.log("Server running...");
});
```

## Running the Server

```bash
node server.js
```

or

```bash
npm start
```

## Visit

```
http://localhost:3000
```

## Concepts Learned

- `http` module
- `createServer()`
- Request (`req`)
- Response (`res`)
- `writeHead()`
- `res.end()`
- `server.listen()`
- Port numbers
    | Status Code | Meaning               |
| ----------- | --------------------- |
| 200         | OK                    |
| 201         | Created               |
| 301         | Moved Permanently     |
| 400         | Bad Request           |
| 401         | Unauthorized          |
| 403         | Forbidden             |
| 404         | Not Found             |
| 500         | Internal Server Error |
