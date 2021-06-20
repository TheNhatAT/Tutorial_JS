//== form ==//
let testPromise = new Promise(function (resolve, reject) {
    /** Producing code */
    resolve(); // when successful
    reject(); // when error occur
})

/** Consuming code
 * Waiting for a fulfilled Promise */
testPromise.then(value => {
    /** code if successful */
}, error => {
    /** code if error */
})

//== practice ==//
function view(some) {
   console.log(some);
}
// function sum(a, b) {
//     return a + b;
// }
// let promise = new Promise((resolve, reject) => {
//     let x = sum(2, 3);
//
//     if(x == 5) {
//         resolve(true);
//     }
//     else reject(false);
// });
//
// promise.then(value => {
//     view(value)
// }, error => {
//     view(error)
// });

//== this function now is a promise object
async function testFn(a) {
    return a;
}
testFn(3).then(value => {
    view(value);
})

let check = () => {
    console.log('checking');
}
console.log( typeof testFn(3));
setTimeout(check, 1);