let reg_1 = /nhat/i; // use flag: i for case-sensitive

let reg_3 = new RegExp('xxx')

let reg_2 = /ngoc/;

/** test() method to test if a string contains a match of the
 * pattern or not */
console.log(reg_1.test('Nhat nguyen'));
console.log(reg_2.test('ngoc van'));
console.log(reg_3.test('xxx nnn'));

/** searching and replacing string */
let str = "how are you ? i'm you and you";
let result_search = str.match(/you/gi);

console.log(result_search);

let result_replace = str.replace(/you/gi, 'Nhat');
console.log(result_replace);

// src: https://www.w3schools.com/js/js_regexp.asp