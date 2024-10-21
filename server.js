// server.js
const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 3333;

const server = http.createServer((req, res) => {
    let filePath = '.' + req.url;
    if (filePath === './' || filePath === './index.html') {
        filePath = './index.html';
    }

    const extname = String(path.extname(filePath)).toLowerCase();
    let contentType = 'text/html';

    const mimeTypes = {
        '.js': 'text/javascript',
        '.css': 'text/css',
    };

    contentType = mimeTypes[extname] || contentType;

    fs.readFile(filePath, (error, content) => {
        if (error) {
            res.writeHead(404);
            res.end('404 Not Found');
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf-8');
        }
    });
});

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
