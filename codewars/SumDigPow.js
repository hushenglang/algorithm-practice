/**
 * Created by joehu on 17/10/2016.
 */
function sumDigPow(a, b) {
    // Your code here
    var r = [];
    for (var i = a; i <= b; i++) {
        if (isPow(i))
            r.push(i);
    }
    return r;

    function isPow(num) {
        var snums = Number(num).toString().split("");
        var sum = 0;
        snums.forEach(function (e, index) {
            sum += (Math.pow((Number(e)),(index + 1)));
        });
        return (sum == num);
    }
}


const assert = require('assert');


assert(sumDigPow(1, 10), [1, 2, 3, 4, 5, 6, 7, 8, 9])
assert(sumDigPow(1, 100), [1, 2, 3, 4, 5, 6, 7, 8, 9, 89])
assert(sumDigPow(10, 100), [89])
assert(sumDigPow(90, 100), [])
assert(sumDigPow(90, 150), [135])
assert(sumDigPow(50, 150), [89, 135])
assert(sumDigPow(10, 150), [89, 135])

