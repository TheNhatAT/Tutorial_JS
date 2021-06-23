const http  = require('http');

const server = http.createServer();

server.on('request', (req, res) => {
    // console.log(server);
    res.writeHead(200, {'content-type': 'text/plain'});
    res.write('nodejs tutor\n');
    res.write('please psp..666\n');
    res.end('Hello nhat');
    //-- serve html
    // res.writeHead(200, {'content-type': 'text/html'});
    // const htmlFile = fs.readFileSync('/index.html');
    // res.end(htmlFile);

    //-- serve huge file | solution 1
    // fs.readFile('./big.file', (err, data) => {
    //     res.end(data);
    // })

    //-- serve huge file | solution 2
    // const src = fs.createReadStream('./big.file');
    // src.on('data', (data) => {
    //     if (!res.write(data)){
    //         src.pause();
    //     }
    // })
    //
    // src.on('drain', () => {
    //     src.resume();
    // })
    //
    // src.on('end', () => {
    //     res.end();
    // })

    //-- serve huge file | solution 3
    // fs.createReadStream('./big.file', {highWaterMark: 1024}).pipe(res);
})

server.listen(3000, () => {
    console.log('server is running on 3000');
    }
)

