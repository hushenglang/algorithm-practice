//solution 1
function sortByValueAndIndex(array) {
    //1. build the position*value value;
    var i = 0;
    console.log(array);
    console.log(array.length);
    pv_array = array.map(x => (++i) * x);

    //2. build map which mapping pv_array and array;
    var map = {};
    pv_array.forEach(function (cur, idx) {
        if (cur in map) {
            map[cur].push(array[idx]);
        } else {
            map[cur] = [array[idx]];
        }
    });

    //3. sort pv_array;
    pv_array.sort((a, b) => a - b);

    //4. mapping back from pv_array to array;
    var result = [];
    console.log(map);
    pv_array.forEach(function (cur, idx) {
        if (cur in map) {
            result = result.concat(map[cur]);
            delete map[cur];
        }
    });

    return result;
}

//solution 2
function sortByValueAndIndex2(array) {
    var new_array = array.map((x,idx)=>[x, x*(idx+1)])
                         .sort((a,b)=>a[1]-b[1])
                         .map(x=>x[0]);

    return new_array;
}
//var a = [-26, -28, -16, -18, -19, -9, -21, -5, -9, 29, 8, 29];
var a = [ 29, -9, -21, -19, 29, 8, -9, -18, -28, -26, -16, -5 ];
var res = sortByValueAndIndex2(a);
console.log(JSON.stringify(res));
console.log(res.length);