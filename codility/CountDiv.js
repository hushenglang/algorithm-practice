function solution(A, B, K) {
    //B/K - A/K, if A%K==0, then +1.  this is Prefix Sums problem
    var i = Math.floor(B/K) - Math.floor(A/K);
    if(A%K==0){
        i++
    }
    return i;
}