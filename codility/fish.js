function solution(A, B) {
    //define downstream fish counter
    var dscounter = 0;
    var stack = [];

    for(let i=0;i<A.length;i++){
        if(B[i]==0&&dscounter==0){
            stack.push(A[i]);
            continue;
        }
        if(B[i]==1){
            stack.push(A[i]);
            dscounter++;
            continue;
        }
        if(B[i]==0&&dscounter>0){
            var q = A[i];
            while(dscounter>0){ //consider if upstream is larger than downstream, need loop to compare the rest of downstream fish.
                var p = stack.pop();
                if(p>q){
                    stack.push(p);
                    break;
                }else{
                    dscounter--;
                    if(dscounter==0){
                        stack.push(q);
                        break;
                    }
                }
            }

        }
    }
    return stack.length;
}