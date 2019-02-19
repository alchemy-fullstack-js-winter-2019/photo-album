/* eslint-disable no-console */


function counter() {
    let count = null;
    return function() {
        count++;
        return count;
    };
}
const counted = counter();
console.log(counted());
console.log(counted());
console.log(counted());
console.log(counted());



function add(a, b, c) {
    return a + b + c;
}

function newAdd(a, b) {
    return function(c) {
        return add(a, b, c);
    };
}
console.log(newAdd(10, 10)(5));

function multiply(a, b, c, d, e) {
    return a * b * c * d * e;
}
function curryMulti(a) {
    return function(b) {
        return function(c) {
            return function(d) {
                return function(e) {
                    return multiply(a, b, c, d, e);
                };
            };
        };
    };
}
console.log(curryMulti(2)(2)(2)(2)(2));



function memoize(fn) {
    let lastArgs = null;
    let lastResult = null;
    return function memoFn() {
        const args = [...arguments];
        if(lastArgs && lastArgs.every((arg, i) => arg === args[i])) {
            lastResult;
        } 
        lastArgs = args;
        lastResult = fn(...args);
        return lastResult;
    };
}






console.log(memoize());