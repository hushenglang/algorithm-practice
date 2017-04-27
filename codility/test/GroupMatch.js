'use strict';
function solution(s){
    //1.split string into array by ",";
    var lr_pairs = s.split(",");
    var n = lr_pairs.length;
    // edge case for only one lr.
    if(n==1){
        return 1;
    }

    //2.define group_len_list stored each group's pairs length;
    var group_len_list = [];
    var group_len=1;
    for(let i=0;i<n-1;i++){
        var r = lr_pairs[i].split("-")[1];
        var l = lr_pairs[i+1].split("-")[0];
        if(r==l){
            group_len++;
            if(i==n-2){
                group_len_list.push(group_len);
                break;
            }
        }else{
            group_len_list.push(group_len);
            group_len=1;
            continue;
        }
    }

    //3.find the max group length;
    var max_len = Math.max(...group_len_list);
    return max_len;
}

var s="3-2,2-1,1-4,4-4,5-4,4-2,2-1";
var res = solution(s);
console.log(res);



//
//"1-1" => 1
//"1-2,1-2" => 1
//"3-2,2-1,1-4,4-4,5-4,4-2,2-1" => 4
//"5-5,5-5,4-4,5-5,5-5,5-5,5-5,5-5,5-5,5-5" => 7
//
//"1-1,3-5,5-5,5-4,4-2,1-3" => 4
//\-/*\-/*\-/*\-/
// 4
// "1-2,2-2,3-3,3-4,4-5,1-1,1-2" => 3
// \-/*\-/ \_/*\_/*\_/ \_/*\_/
// 2         3         2