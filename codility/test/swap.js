// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    //consider the edge case, like N=1 N=2, they mush be ture;
    const N = A.length;
    if(N<=2)
        return true;

    //1. sorted array A and assign it to new array B;
    var B = A.slice(); // copy A to B;
    B.sort((a,b)=>a-b); // sort B;

    //2. compare each element between A and B, if there are only 2 elements different, it returns true, otherwise it returns false;
    var counter = 0;
    for(let i=0;i<N;i++){
        if(A[i]!=B[i]){
            counter++;
        }
    }
    return counter<=2?true:false;
}