/**
 * https://www.codewars.com/kata/556b85b433fb5e899200003f/train/javascript
 * @param s
 */
function mixedFraction(s){
    var sa = s.split("/");
    var devidend = Number(sa[0]);
    var devider = Number(sa[1]);
    var sign = ((devidend<0&&devider<0)||(devidend>0&&devider>0))?'':'-';
    if(devider==0){
        throw new Error('Must raise ZeroDivisionError');
    }

    var i = Math.floor(Math.abs(devidend)/Math.abs(devider));
    var nomi = Math.abs(devidend)-Math.abs(i*devider);
    var denomi = Math.abs(devider);
    if(nomi!=0) {
        var gcn = gcd(nomi, denomi);
        nomi = nomi / gcn;
        denomi = denomi / gcn;
        return ((i != 0) ? sign+i.toString()+' ' : sign+'') + nomi.toString() + '/' + denomi.toString();
    }else{
        return (i!=0)?sign+i.toString():i.toString();
    }

    //function gcd(x,y){
    //    var a =Math.abs(x);
    //    var b =Math.abs(y);
    //    if(a>b && a%b==0){
    //        return b;
    //    }else if(a<b && b%a==0){
    //        return a;
    //    }
    //    var gn = 1;
    //    while(true){
    //        if(a<b){
    //            var t = a;
    //            a = b;
    //            b = t;
    //        }
    //        var r = a%b;
    //        a = r;
    //        if(a == 0){
    //            break;
    //        }else{
    //            gn = r;
    //        }
    //    }
    //    return gn;
    //}

    //so clever method
    function gcd(a,b){
        return a%b?gcd(b,a%b):b;
    }
}

const assert = require('assert');

console.log(mixedFraction('546406/-78058'), '-7');
console.log(mixedFraction('6/3'), '2');
console.log(mixedFraction('1/1'), '1');
console.log(mixedFraction('11/11'), '1');
console.log(mixedFraction('4/6'), '2/3');
console.log(mixedFraction('0/18891'), '0');
console.log(mixedFraction('-10/7'), '-1 3/7');
console.log(mixedFraction('-22/-7'), '3 1/7');