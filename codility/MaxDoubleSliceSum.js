//this solution is not originated by me, i think this solution is not right, but it got 100% score on codility.
function solution(A) {

    var n = A.length;
    var k1 = new Array(n).fill(0);
    var k2 = new Array(n).fill(0);

    for (var i = 1; i < n - 1; i++) {
        k1[i] = Math.max(k1[i - 1] + A[i], 0);
    }
    for (var i = n - 2; i > 0; i--) {
        k2[i] = Math.max(k2[i + 1] + A[i], 0);
    }

    var max = 0;
    for (var i = 1; i < n - 1; i++) {
        max = Math.max(max, k1[i - 1] + k2[i + 1]);
    }

    return max;
}

//this solution is made by me, but it got only 55% score on codility.
function solution(A) {

    var n = A.length;
    var k1 = new Array(n).fill(0);
    var k2 = new Array(n).fill(0);

    for (var i = 1; i < n - 1; i++) {
        k1[i] = Math.max(k1[i - 1] + A[i], A[i]);
    }
    for (var i = n - 2; i > 0; i--) {
        k2[i] = Math.max(k2[i + 1] + A[i], A[i]);
    }

    var max = k1[0]+k2[2];
    for (var i = 1; i < n - 1; i++) {
        max = Math.max(max, k1[i - 1] + k2[i + 1]);
    }

    return max;
}