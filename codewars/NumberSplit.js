function splitExp(n) {
    var res_array = [];

    //1. split by dot, get 2 number groups
    var groups = n.split(".");
    var int_group, decimal_group;
    int_group = groups[0].split("");
    if (groups.length > 1)
        decimal_group = groups[1].split("");

    //2. handle int group, get the result number for each digit number;
    const int_n = int_group.length;
    int_group.forEach(function (num, i) {
        if (num == 0)
            return;
        if (int_n - i > 1) {
            res_array.push(num + new Array(int_n - i - 1).fill("0").join(""));
        } else {
            res_array.push(num);
        }
    });
    //3. handle decimal group.
    //note: for decimal, it is better to use zero characters to do it.
    if (decimal_group) {
        decimal_group.forEach(function (num, i) {
            if (num == 0)
                return;
            if (i > 0) {
                res_array.push("." + new Array(i).fill("0").join("") + num);
            } else {
                res_array.push("." + num);
            }

        });
    }

    return res_array;
}


console.log(splitExp("123332.23"));