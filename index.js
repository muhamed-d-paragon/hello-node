const http = require('http');

const requestHandler = (req, res) => {
    console.log(req.url);
    res.end('Hello Node Server!');
}

const server = http.createServer(requestHandler);

server.listen(5000);