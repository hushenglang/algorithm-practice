function solution(A) {

    var max_slice_sum = A[0];
    var pre_sum = A[0];
    for(var i=1;i<A.length;i++){
        pre_sum = Math.max(A[i],pre_sum+A[i]);
        max_slice_sum = Math.max(pre_sum,max_slice_sum);
    }
    return max_slice_sum;
}