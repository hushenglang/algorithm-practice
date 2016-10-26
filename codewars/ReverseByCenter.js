/**
 * https://www.codewars.com/kata/5516ab668915478845000780/train/javascript
 */
function reverseByCenter(s){
    var midIndx = parseInt(s.length/2);
    var isOdd = (s.length%2)>0;
    var first = s.slice(0,midIndx);
    var last = s.slice((isOdd)?midIndx+1:midIndx, s.length);
    if(isOdd) {
        return last + s.slice(midIndx, midIndx + 1) + first;
    }else{
        return  last+first;
    }
}

//function reverseByCenter(s){
//    var n = s.length / 2
//    return s.slice(Math.ceil(n)) + s.slice(Math.floor(n), Math.ceil(n)) + s.slice(0, Math.floor(n))
//}

const assert = require('assert');
s1 = "agent"
s2 = "secret"
assert.equal(reverseByCenter(s1), "nteag")
assert.equal(reverseByCenter(s2), "retsec")