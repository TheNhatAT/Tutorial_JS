const  add = require('mymath'); // find in node_modules
console.log(add(2, 3));


const subs = require('./math/main'); // find in your own modules
console.log(subs(2, 3));

const sub_folder = require('./math')
console.log(sub_folder(3, 5));