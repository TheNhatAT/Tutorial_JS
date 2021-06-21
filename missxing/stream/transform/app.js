const fs = require('fs');
const gzip = require('zlib');

const readStream = fs.createReadStream('./app.js');
const writeStream = fs.createWriteStream('./des.txt.gz');

//-- gzip is transform stream
readStream.pipe(gzip.createGzip()).pipe(writeStream);