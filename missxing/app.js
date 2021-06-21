const add = require('mymath'); // find in node_modules
console.log(add(2, 3));


const sub = require('./math/main'); // find in your own modules
console.log(sub(2, 3));

const sub_folder = require('./math')
console.log(sub_folder(3, 5));

console.log(__filename);
console.log(__dirname);
console.log(typeof module.exports);
console.log(typeof exports);
//console.log(require);
