function gHappy(str) {

    var regexp_str = /[^g]+/g;
    var g_array = str.split(regexp_str);
    //check if any str in g_array's length less than 2, it is not happy, otherwise it is happy.
    var is_happy=true;
    for(var i=0;i<g_array.length;i++){
        if(g_array[i].length<2){
            is_happy = false;
            console.log(str);
            console.log(g_array);
            break;
        }
    }
    return is_happy;
}

var a = "bigger is ggooder";
var res = gHappy(a);
console.log(res);