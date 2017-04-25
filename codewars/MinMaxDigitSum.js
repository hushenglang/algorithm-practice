"use strict";
function minAndMax(l, d, x) {

    // loop from the l to d, and sum each number and compare with x.
    var min=0,max=0;
    for(let i=l,j=d; i<=d && j>=l; i++,j--){
        if(min==0){
            var i_array = i.toString().split("").map(x=>parseInt(x));
            var i_sum = i_array.reduce((cur,acc)=>cur+acc);
            if(i_sum==x){
                min = i;
            }
        }
        if(max==0){
            var j_array = j.toString().split("").map(x=>parseInt(x));
            var j_sum = j_array.reduce((cur,acc)=>cur+acc);
            if(j_sum==x){
                max = j;
            }
        }
    }
    return [min, max];

}

console.log(minAndMax(500, 505, 10))