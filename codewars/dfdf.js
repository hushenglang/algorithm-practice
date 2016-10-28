/**
 * Created by joehu on 27/10/2016.
 */
function gcd(a,b){
    var gn = 1;
    while(true){
        if(a<b){
            var t = a;
            a = b;
            b = t;
        }
        var r = a%b;
        a = r;
        if(a == 0){
            break;
        }else{
            gn = r;
        }
    }
    return gn;
}

console.log(gcd(5767,4453))

