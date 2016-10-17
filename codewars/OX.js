/**
 * Created by joehu on 13/10/2016.
 */
function XO(str) {
    //code here
    str = str.toLowerCase();
    var xreg = /x/ig;
    var xl = str.match(xreg);
    var oreg = /o/ig;
    var ol = str.match(oreg);
    xl = (xl==null)?[]:xl;
    ol = (ol==null)?[]:ol;
    return xl.length==ol.length;
}

const assert = require('assert');
assert.equal(XO('xo'),true);
assert.equal(XO("xxOo"),true);
assert.equal(XO("xxxm"),false);
assert.equal(XO("Oo"),false);
assert.equal(XO("ooom"),false);