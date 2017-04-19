function solution(A) {
    var sa = A.sort((a, b) = > a - b
)
    ;
    var max;
    // handle general cases
    for (let i = 0; i < sa.length - 2; i++) {
        let p = sa[i];
        let q = sa[i + 1];
        let r = sa[i + 2];
        let prd = p * q * r;
        if (max == undefined || max < prd) {
            max = prd;
        }
    }
    // if there are 2 negative number
    if (sa[0] < 0 && sa[1] < 0) {
        let prd = sa[0] * sa[1] * sa[sa.length - 1];
        if (max < prd) {
            max = prd
        }
    }
    return max;
}

//better solution.
//def solution(A):
//A = sorted(A)
//return max(A[-1] * A[-2] * A[-3], A[0] * A[1] * A[-1])