//count element problem
function solution(X, A) {
    var sec = -1;
    //1. init a zeros step array of the length X. and define a new position counter
    var stepArray = new Array(X).fill(0);
    var counter = 0;
    //2. loop to assign position to step array.
    for(let i=0; i<A.length; i++){
        var pos = A[i];
        if(stepArray[pos-1]==0){
            stepArray[pos-1] = 1;
            counter++;
        }
        if(counter==X){
            sec = i;
            break;
        }
    }
    return sec;
}