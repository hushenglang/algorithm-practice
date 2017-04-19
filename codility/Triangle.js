function solution(A) {
    if(A.length<3){
        return 0;
    }
    var sortA = A.sort((a,b)=>a-b);
    var res = 0;
    for(let i=0; i<sortA.length-2; i++){
        let p = sortA[i];
        let q =sortA[i+1];
        let r = sortA[i+2];
        if(p+q>r && p+r>q && q+r>p){
            res = 1;
            break;
        }
    }
    return res;
}