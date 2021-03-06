//== read file
const  fs = require('fs');

//-- sync ver for https
const name = fs.readFileSync('./text.txt', 'utf-8');
console.log(name);

//-- async ver
//-- execute when main stack is empty
fs.readFile('./text.txt', ((err, data) => {
    if(err) throw err;
    console.log(data.toString());
}))
console.log('end');

//== write file
//-- sync
fs.writeFileSync('./text.txt', 'Hello nhat', 'utf-8');

//-- async
fs.writeFile('./text.js', 'Hello Nhat', 'utf-8', err => {
    if (err) throw err;
})

