// the main logic is slice the array into 2 part by K shift. also need to consifer the edge valule.
function solution(A, K){
    if(K==0|| A.length==1|| A.length==K)
        return A;
    var shiftNum = K%A.length;
    var N = A.length;
    var lp = A.slice(-shiftNum);
    var rp = A.slice(0,N-shiftNum);
    return lp.concat(rp);
}

var a = [-9,0];
var k = 2;

var r = solution(a,k);
console.log(r);

