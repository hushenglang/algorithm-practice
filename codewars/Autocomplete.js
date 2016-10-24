/**
 * Created by joehu on 20/10/2016.
 */
function autocomplete(input, dictionary){
    //1.sort the dictionary;
    var pdictionary = dictionary.sort();
    //2.match input's first latter against dictionary' first latter. then match against the remaining latter.
    input = input.replace(/[^a-zA-Z]/g, "");
    var chars = input.split("");
    chars.forEach(function(w, indx){
        var tmpArray = [];
        for(var i=0;i<pdictionary.length;i++){
            if(w == pdictionary[i].split("")[indx]){
                tmpArray.push(pdictionary[i]);
            }else{
                break;
            }
        }
        pdictionary = tmpArray;
    });
    return pdictionary;
}


var input = "aha";
var dict = ['ahao', 'alid', 'apple', 'appefdf','sdf'];
var res = autocomplete(input, dict);
console.log(res);