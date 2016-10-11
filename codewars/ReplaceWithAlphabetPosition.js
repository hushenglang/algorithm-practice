/**
 * Replace With Alphabet Position
 * https://www.codewars.com/kata/546f922b54af40e1e90001da/solutions/javascript
 * the key to solve this problem is to find the which type of number dominate the numbers.
 * @param snumbers
 * @returns {number}
 */
function alphabetPosition(text) {
    var sourceAlphs = text.toLowerCase().match(/[a-z]/g);
    return sourceAlphs.map(al => al.charCodeAt(0)-96).join(" ");
}


//function alphabetPosition(text) {
//    var alphabetText = "abcdefghijklmnopqrstuvwxyz";
//    var alphabetArray = alphabetText.split("");
//    var alphabetMap = {};
//    for(i=1; i<=26; i++){
//        alphabetMap[alphabetArray[i-1]] = i;
//    }
//    var sourceAlphaArray = text.split("");
//    var tartgetPosArray = [];
//    for(i=0;i<sourceAlphaArray.length;i++){
//        var pos = alphabetMap[sourceAlphaArray[i].toLowerCase()];
//        if(pos!=undefined){
//            tartgetPosArray.push(pos);
//        }
//    }
//    text = tartgetPosArray.join(" ");
//    return text;
//}

console.log(alphabetPosition("The sunset sets at twelve o' clock."));