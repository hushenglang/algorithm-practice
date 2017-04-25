"use strict";
function strangeCoach(players) {
    //coding and coding..
    //1. map to get the first letters array;
    var p_sur_array = players.map(p => p[0]);

    //2. count the letters's occurence;
    var counter = {};
    p_sur_array.forEach(function(sur){
        if(sur in counter){
            counter[sur] += 1;
        }else{
            counter[sur] = 1;
        }
    });

    //3. get the surname which name exceed 5;
    var res_surnames = Object.keys(counter).filter(x=>counter[x]>=5);
    var res = res_surnames.sort().join("");
    return (res=="")?"forfeit":res;
}


var a = [
    "michael",
    "jordan",
    "lebron",
    "james",
    "kobe",
    "bryant"];
var res = strangeCoach(a);
console.log(res);