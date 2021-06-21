const buffer1 = Buffer.alloc(8);
console.log(buffer1);

const buffer2 = Buffer.from([1024, 2, 3, 4]);
console.log(buffer2);

const  buffer3 = Buffer.from('this is nhat', 'utf-8');
console.log(buffer3);
console.log(buffer3.toString());