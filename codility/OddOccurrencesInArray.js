// use dict to record the occurrence of numbers and find the even occurrence one.
function solution(A) {
    var dict = {};
    for(var i=0;i<A.length;i++){
        var key = Number(A[i]).toString();
        if(key in dict){
            dict[key]++;
        }else{
            dict[key] = 1;
        }
    }
    for(key in dict){
        if(dict[key]%2!=0)
            return parseInt(key);
    }
}