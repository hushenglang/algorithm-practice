//https://www.codewars.com/kata/55fd2d567d94ac3bc9000064/solutions/javascript
'use strict';
function rowSumOddNumbers(n) {
    //1.get the first number of specific row
    var first_num = 1;
    var base_num = 2;
    for(let i=1;i<n;i++){
        first_num+=base_num*i;
    }

    //2.get the whole row numbers and sum them;
    var n_sum = 0;
    var row_num = first_num;
    for(let i=0;i<n;i++){
        n_sum+=row_num;
        row_num+=2;
    }

    return n_sum;
}


//solution2
function rowSumOddNumbers2(n) {
    return Math.pow(n, 3);
}

var res = rowSumOddNumbers(42);
console.log(res);