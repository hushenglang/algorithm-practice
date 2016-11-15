function sortArray(array) {
    var odds = array.filter(n => (n%2)!=0).sort((a,b) => a-b);
    for(var i=0; i<array.length; i++){
        if(array[i]%2!=0){
            array[i]= odds.shift();
        }
    }
    return array;
}


function sortArray2(array) {
    const odd = array.filter((x) => x % 2).sort((a,b) => a - b);
    return array.map((x) => x % 2 ? odd.shift() : x);
}


sortArray([5, 3, 2, 8, 1, 4]);
sortArray([5, 3, 1, 8, 0]);


