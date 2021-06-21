const p1 = require('./pattern3')
console.log(p1.getName()); //TheNhatAT
p1.name = 'The Nhat';
console.log(p1.getName()); // The Nhat

const p2 = require('./pattern3');
console.log(p2.getName()); // The Nhat -> because Cached