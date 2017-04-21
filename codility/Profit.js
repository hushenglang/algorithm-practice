function solution(A) {
    // store the localMin, and use the current i value - localMin, and max-compare with maxProfit.
    var n = A.length;
    var localMin = A[0];
    var maxProfit = 0;
    for(var i=1;i<n;i++){
        if(A[i]<localMin){
            localMin = A[i];
            continue;
        }
        maxProfit = Math.max(A[i]-localMin,maxProfit);
    }
    return maxProfit;
}