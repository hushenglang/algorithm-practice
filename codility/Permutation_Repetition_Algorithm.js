'use strict';

// permutationsWithRepetition :: Int -> [a] -> [[a]]
var permutationsWithRepetition = function (n, as) {
    return as.length > 0 ? (
        foldl1(curry(cartesianProduct)(as), replicate(n, as))
    ) : [];
};


// GENERIC FUNCTIONS -----------------------------------------------------

//catesian product. exp: [1,2],[3,4] => [[1,3],[1,4],[2,3],[2,4]]
var cartesianProduct = function (xs, ys) {
    return [].concat.apply([], xs.map(function (x) {
        return [].concat.apply([], ys.map(function (y) {
            return [
                [x].concat(y)
            ];
        }));
    }));
};

// replicate: copy the array a n times.
var replicate = function (n, a) {
    var v = [a],
        o = [];
    if (n < 1) return o;
    while (n > 1) {
        if (n & 1) o = o.concat(v);
        n >>= 1;
        v = v.concat(v);
    }
    return o.concat(v);
};


// foldl1 :: (a -> a -> a) -> [a] -> a
var foldl1 = function (f, xs) {
    return xs.length > 0 ? xs.slice(1)
        .reduce(f, xs[0]) : [];
};



// curry :: ((a, b) -> c) -> a -> b -> c
var curry = function (f) {
    return function (a) {
        return function (b) {
            return f(a, b);
        };
    };
};


var a = permutationsWithRepetition(4, ['R','G','B']);

console.log(a);