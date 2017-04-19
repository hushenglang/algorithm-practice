//prefix problem
function solution(A) {
    //loop the array reversely. and count the 1' each iteration, if encounter 0, then add sub sum to sum.
    var lastIdx = A.length-1;
    var counter =0;
    var pairNum = 0;
    for(let i=lastIdx; i>=0; i--){
        if(A[i]==1){
            counter++;
        }else{
            pairNum += counter;
        }
    }
    return (pairNum>1000000000)?-1:pairNum;
}