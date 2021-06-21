const fs = require('fs')
const path = require('path')

const readable = fs.createReadStream(path.join(__dirname, 'img.png'),
    {highWaterMark: 8 * 1024}); //8k per chunk
const writable = fs.createWriteStream(path.join(__dirname, 'destination.png'));

//-- connect 2 stream with event
// readable.on('data', function (chunk) {
//     console.log(chunk.length);
//     writable.write(chunk)
// })

//-- pipe: connect 2 stream without event
readable.pipe(writable);