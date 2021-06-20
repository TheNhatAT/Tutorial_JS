function view() {
    setTimeout(testTimeout, 1000);
}

//== gọi chồng chất mỗi 1s
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
