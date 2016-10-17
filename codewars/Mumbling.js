function accum(s) {
    // your code
    var a = s.split("");
    var ca = a.map((sc, indx)=>generator(sc, indx+1));
    var res = ca.join("-");
    return res;

    function generator(sc, indx){
        var f = sc.toUpperCase();
        var l = sc.toLowerCase();
        for(var i=1;i<indx;i++){
            f+=l;
        }
        return f;
    }
}


const assert = require('assert');
assert.equal(accum("ZpglnRxqenU"), "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu");