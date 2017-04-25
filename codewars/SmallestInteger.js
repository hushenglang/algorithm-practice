'use strict';
function smallestInteger(matrix) {
    // reshape the 2-d matrix to 1-d vector;
    var vector = [].concat(...matrix);

    // sort the 1-d vector, and filter out the negative number, and replicated number;
    vector = vector.filter(x=>x>=0);
    vector = [...new Set(vector)];
    vector.sort((a,b)=>a-b);

    // loop from 0 to find the minium number.
    var min = 0;
    const n = vector.length;
    for(let i=0;i<n;i++){
        if(i!=vector[i]){
            min = i;
            break;
        }
        if(i==n-1){
            min = i+1;
            break;
        }
    }

    return min;
}

var m = [[4,5,3,-4,3,8],
    [2,0,6,5,4,9],
    [7,5,6,8,2,6],
    [1,4,7,8,9,11],
    [1,3,10,5,5,1],
    [12,7,3,4,4,3]];
var res = smallestInteger(m);
console.log(res);