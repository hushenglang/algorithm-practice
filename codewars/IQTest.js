/**
 * IQ Test
 * https://www.codewars.com/kata/552c028c030765286c00007d/train/javascript
 * the key to solve this problem is to find the which type of number dominate the numbers.
 * @param snumbers
 * @returns {number}
 */
function iqTest(snumbers){
    var numbers = snumbers.split(" ").map(function(item){return Number(item)});
    if(numbers.length<3)
        return;
    var isEvenDominate = false;
    var evenAmount = 0;
    for(var i=0;i<3;i++){
        if(numbers[i]%2==0){
            evenAmount++;
        }
    }
    if(evenAmount>=2){
        isEvenDominate = true;
    }

    var eindex = 0;
    for(var i=0;i<numbers.length;i++){
        if((isEvenDominate&&numbers[i]%2!=0) || (!isEvenDominate&&numbers[i]%2==0)){
            eindex = i;
            break;
        }
    }
    return eindex+1;
}

const assert = require('assert');

assert.equal(iqTest("2 4 7 8 10"),3);
assert.equal(iqTest("1 2 2"), 1);
assert.equal(iqTest("1 1 1 2 1 1 1 1"), 4);