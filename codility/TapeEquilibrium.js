//count element problem
function solution(A) {
    //1. calculate total sum of array;
    var sumOfArray = A.reduce((accu, val)=>accu+val);

    //2. loop to calculate "P's pre-sum", which is equal to "last P's pre-sum + current index of array number", then calculate "P's surfix-sum" by "total sum - P's pre-sum". finally got all P vaules, and find the min P.
    var presumPs = [];
    var minP;
    for(let i=0;i<A.length-1;i++){
        var surfsumP;
        if(presumPs.length==0){
            presumPs.push(A[i]);
            surfsumP=(sumOfArray - presumPs[i]);
            minP = Math.abs(presumPs-surfsumP);
            continue;
        }else{
            presumPs.push(A[i]+presumPs[i-1]);
            surfsumP=(sumOfArray - presumPs[i]);
        }

        var pval = Math.abs(presumPs[i]-surfsumP);
        if(pval<minP){
            minP = pval;
        }
    }

    return minP;
}