function solution(A) {
    //1. find the leader
    var leader = findLeader(A);

    //2. record the leader number's indexs
    var result = -1;
    for(var i=0;i<A.length;i++){
        if(A[i]==leader){
            result=i;
            break;
        }
    }
    return result;

    function findLeader(a){
        var al = a.slice();
        al.sort((a,b)=>a-b);
        var counter=0;
        var candidate;
        var threshold = Math.floor(al.length/2)+1;
        for(var i=0;i<al.length;i++){
            if(al[i]==candidate){
                counter++;
                continue;
            }else{
                if(counter>=threshold){
                    break;
                }else{
                    counter = 1;
                    candidate = al[i];
                    continue;
                }
            }
        }
        return (counter>=threshold)?candidate:undefined;
    }
}