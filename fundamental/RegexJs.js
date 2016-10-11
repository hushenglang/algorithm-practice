//
//var myRe = /ab*/g;
//var str = 'bcdabefabbh';
//var sarr = myRe.exec(str);
//console.log(sarr);



//var str = 'For more information, see Chapter 3.4.5.1';
//var re = /see (chapter \d+(\.\d)*)/i;
//var found = str.match(re);
//
//console.log(found);



var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
var regexp = /[A-E]/gi;
var matches_array = str.match(regexp);
console.log(matches_array);