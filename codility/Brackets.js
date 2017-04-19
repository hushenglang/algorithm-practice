function solution(S) {
    var sa = S.split("");
    var stack = [];
    var lw = ["(","[","{"];
    var rw = [")","]","}"];
    for(let i=0;i<sa.length;i++){
        if(i==0 || lw.indexOf(sa[i])!=-1){
            stack.push(sa[i]);
            continue
        }else{
            var w = stack.pop();
            if(!checkIfPair(w, sa[i])){
                stack.push(w);
                stack.push(sa[i]);
            }
        }
    }
    return (stack.length == 0)?1:0;

    function checkIfPair(a,b){
        var len = lw.length;
        for(let i=0;i<len;i++){
            if(lw[i]==a && rw[i]==b)
                return true;
        }
        return false;
    }
}