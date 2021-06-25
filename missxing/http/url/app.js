const url = require('url');
const querystring = require('querystring');

//-- parse and format an url
// const obj = url.parse('https://nhat:nguyen@gmail.google.com:443/web/user/default?page=2&index=10#top',true);
// console.log(obj);
//
// const urlObj = {
//     protocol: 'https:',
//     slashes: true,
//     auth: 'nhat:nguyen',
//     host: 'gmail.google.com:443',
//     port: '443',
//     hostname: 'gmail.google.com',
//     hash: '#hash',
//     search: '?page=3&index=11',
//     pathname: '/web/user/default',
//     path: '/web/user/default?page=2&index=10',
//     href: 'https://nhat:nguyen@gmail.google.com:443/web/user/default?page=2&index=10#top'
// }
//
// console.log('------------\n'+url.format(urlObj));

//-- querystring module
const obj = querystring.parse('username=nhat&pass=xxx');
console.log(obj);

const myurl = querystring.stringify(obj);
console.log(myurl);