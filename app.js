const http = require('http');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
res.writeHead(200, { 'Content-Type': 'text/plain' });
res.end('Hello! My DevOps Internship CI/CD Project is running!');
});

server.listen(PORT, '0.0.0.0', () => {
console.log(`Server running on port ${PORT}`);
});

module.exports = server;
