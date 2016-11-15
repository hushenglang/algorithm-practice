//
//function solution(string) {
//    var subStrs = string.split(/[A-Z]/g);
//    var uppercaseChars = string.match(/[A-Z]/g);
//    if(subStrs.length>1){
//        subStrs = subStrs.map(function(subStr, index){
//            if(index!=0)
//                return uppercaseChars[index-1]+subStr;
//            else
//                return subStr;
//        });
//    }
//    return subStrs.join(" ");
//}

function solution(string) {
    return string.replace(/[A-Z]/g, ' $&');
}

console.log(solution('camelCasing'));