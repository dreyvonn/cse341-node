const fs = require('fs');

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<body><form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Send</button></form></body>');
        res.write('</html');
        return res.end();
    }

    if (url === '/user') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<ul><li>User 1</li><li>User 2</li></ul>');
        res.write('</html');
        return res.end(); 
    }

    if (url === '/create-user' && method === 'POST') {
        const body = [];

        req.on('data', (chunk) => {
            body.push(chunk);
        });

        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const username = parsedBody.split('=')[1];
            console.log(username);

            res.statusCode = 302;
            res.setHeader('Location', '/');
            return res.end();
        });
        
    }
}

module.exports = requestHandler;