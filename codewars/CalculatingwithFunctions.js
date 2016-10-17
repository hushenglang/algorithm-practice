function zero(oprobj) {
    const num = '0';
    return common(oprobj, num);
}
function one(oprobj) {
    const num = '1';
    return common(oprobj, num);
}
function two(oprobj) {
    const num = '2';
    return common(oprobj, num);
}
function three(oprobj) {
    const num = '3';
    return common(oprobj, num);
}
function four(oprobj) {
    const num = '4';
    return common(oprobj, num);
}
function five(oprobj) {
    const num = '5';
    return common(oprobj, num);
}
function six(oprobj) {
    const num = '6';
    return common(oprobj, num);
}
function seven(oprobj) {
    const num = '7';
    return common(oprobj, num);
}
function eight(oprobj) {
    const num = '8';
    return common(oprobj, num);
}
function nine(oprobj) {
    const num = '9';
    return common(oprobj, num);
}

function common(oprobj, num){
    if(oprobj){
        return eval(num+oprobj.operator+oprobj.num);
    }else{
        return num;
    }
}


function plus(num) {
    return {
        operator: '+',
        num: num
    };
}
function minus(num) {
    return {
        operator: '-',
        num: num
    };
}
function times(num) {
    return {
        operator: '*',
        num: num
    };
}
function dividedBy(num) {
    return {
        operator: '/',
        num: num
    };
}


const assert = require('assert');
assert(seven(times(five())), 35);
assert(four(plus(nine())), 13);
assert(eight(minus(three())), 5);
assert(six(dividedBy(two())), 3);