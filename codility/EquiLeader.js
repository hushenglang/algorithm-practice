function solution(A) {
    //find the leader in A
    var result = findLeader(A);
    var leader = result[0];
    var totalCounter = result[1];
    if(leader==undefined){
        return 0;
    }

    //calculate the equi leader
    var lrtleaderCount=0;
    var equiCounter = 0;
    for(var i=0;i<A.length;i++){
        if(A[i]==leader){
            lrtleaderCount++;
        }
        var lrtThrehold = Math.floor((i+1)/2)+1;
        var rtThrehold = Math.floor((A.length-i-1)/2)+1;
        if(lrtleaderCount>=lrtThrehold && (totalCounter-lrtleaderCount)>=rtThrehold){
            equiCounter++;
        }
    }

    return equiCounter;


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
        return [(counter>=threshold)?candidate:undefined, counter];
    }
}