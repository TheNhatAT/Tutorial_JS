const fs = require('fs');

const file = fs.createWriteStream('./big.file');

for (let i = 0; i <= 100; i++) {
    file.write('I Love You!!!\n funcking JS \n');
}