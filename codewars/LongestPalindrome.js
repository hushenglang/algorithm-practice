/**
 * https://www.codewars.com/kata/54bb6f887e5a80180900046b/train/javascript
 */
function longestPalindrome(s){
    if(s.length==1){
        return 1;
    }
    var longest = 0;
    var cl = s.split("");
    var len = cl.length;
    for(var i=0; i<len; i++){
        for(var j=len-1; j>0; j--){
            if(cl[i]==cl[j]){
                var sub = s.substring(i,j+1);
                var subrev = sub.split("").reverse().join("");
                if(sub==subrev && sub.length>longest){
                    longest = sub.length;
                }
            }else{
                continue;
            }
        }
    }
    return longest;
}



const assert = require('assert');

assert.equal(longestPalindrome("a"), 1)
assert.equal(longestPalindrome("aa"), 2)
assert.equal(longestPalindrome("baa"), 2)
assert.equal(longestPalindrome("aab"), 2)
assert.equal(longestPalindrome("baabcd"), 4)
assert.equal(longestPalindrome("baablkj12345432133d"), 9)