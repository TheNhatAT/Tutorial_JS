function view() {
    setTimeout(testTimeout, 5000);
}

setInterval(view, 1000);

// function myCal(a, b, callback) {
//     let sum = a + b;
//     callback(sum);
// }
//
// myCal(1, 3, view);

function testTimeout() {
    console.log('running....');
}
