/**
 * Created by joehu on 26/10/2016.
 */

function solution(N) {
    // write your code in JavaScript (Node.js 6.4.0)
    var zerosList = Number(N).toString(2).split("1");
    var zerosLengthList = zerosList.map(s=>s.length);
    var max = 0;
    while(true){
        max = Math.max(...zerosLengthList);
        var index = zerosLengthList.indexOf(max)
        if(index==zerosLengthList.length-1){
            zerosLengthList[index]=0;
            max = 0;
        }else{
            break;
        }
    }
    return max;
}



console.log(solution(6));
console.log(solution(148));