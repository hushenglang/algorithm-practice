function solution(S) {
    var wl = S.split("");
    var stack = [];

    for(let i=0;i<wl.length;i++){
        if(stack.length==0 || wl[i]=='('){
            stack.push(wl[i]);
            continue;
        }else{
            stack.pop();
        }
    }
    return (stack.length==0)?1:0;
}