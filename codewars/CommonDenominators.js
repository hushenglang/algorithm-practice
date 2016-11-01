/**
 * Created by joehu on 1/11/2016.
 */

function convertFrac(lst){
    //Your code here
    var lnl = lst.map(a => a[1]);
    var lcmNumber = lnl.reduce((pre,cur) => LCM(pre, cur));
    var nfnl = lst.map(a => lcmNumber/a[1]*a[0]);
    var res = nfnl.map(a => "("+a+','+lcmNumber+')').join("");
    return res;
}


function GCD(a, b) {
    return a % b == 0 ? b : GCD(b, a % b);
}
function LCM(a, b) {
    return a * b / GCD(a, b);
}


var lst = [ [1, 2], [1, 3], [1, 4] ];
var re = convertFrac(lst);
console.log(re);


// best practice
//const gcd = (a, b) => b ? gcd(b, a % b) : a;
//const lcm = (a, b) => a * b / gcd(a, b);
//
//function convertFrac(arr) {
//    const cd = arr.reduce((a, [_, d]) => lcm(d, a), 1);
//    return arr.map(([n, d]) => `(${n * cd/d},${cd})`).join('');
//}