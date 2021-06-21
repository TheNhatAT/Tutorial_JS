const http = require('http');

const server = http.createServer();

server.on('request', (req, res) => {
    // console.log(server);
    res.writeHead(200, {'content-type': 'text/plain'});
    res.write('nodejs tutor\n');
    res.write('please psp..666\n');
    res.end('Hello nhat');
})

server.listen(3000, () => {
    console.log('server is running on 3000');
    }
)

