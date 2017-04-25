"use strict";

function alignRight(text,width){
    //align text to aforementioned width
    //1. split the text into word.
    var words = text.split(" ");
    var n = words.length;
    //2. group word into line, each line's max length is less than width
    var lines = [];
    var line = [];
    var width_counter = 0;
    for(let i=0;i<n;i++){
        var w_width = words[i].length;
        if(width_counter+w_width<=width){
            line.push(words[i]);
            width_counter += w_width+1;
        }else{
            lines.push(line.join(" "));
            line=[words[i]];
            width_counter = w_width+1;
        }
        if(i==n-1){
            lines.push(line.join(" "));
        }
    }
    console.log(lines);
    //3. fill in the prefix emptys for each line.
    lines = lines.map(function(x){
        var n_empty = width - x.length;
        var empties = new Array(n_empty).fill(" ").join("");
        return empties.concat(x);
    });

    return lines.join("\n")
}

var res = alignRight("I take up the whole line I take up the whole line I take up the whole line",24);
console.log(res);