const http = require('http');

http.createServer((req, res) => {
  res.end('Server is running!');
}).listen(3001, "localhost");

