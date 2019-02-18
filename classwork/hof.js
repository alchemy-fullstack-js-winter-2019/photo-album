//any function that takes a fn as one of its parameters
// [1, 2, 3, 4].map(() => {});
// function myHigherOrderFunction(fn) {}
// function findById(id, callback) {}
 
// functions that return other functions
// function add(a) { 
//   return function(b) { 
//     return a + b;
// }};
// console.log(add(2)(3));


function counter() {
  let count = 0;
  return function() {
    return ++count;
  };
}

function add(a, b, c) {
  return a + b + c;
}

function partialAdd(a, b) {
  return function(c) {
    return add(a, b, c);
  };
}

// function curryAdd(a) {
//   return function(b) {
//     return function(c) {
//       return add(a, b, c);
//     };
//   };
// }

function multiply(...args) {
  return args.reduce((acc, num) => acc * num);
}

function curryMultiply(a) {
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

function memoize(fn) {
  let lastArgs = null;
  let lastResult = null;
  return function() {
    const args = [...arguments];
    //if args and lastArgs are the same.
    if(lastArgs && lastArgs.every((arg, i) => arg === args[i])) {
      //return last result
      return lastResult;
    }

    // store lastArgs
    lastArgs = args;
    // invoke fn and store lastResult
    lastResult = fn(...args);
    //return result
    return lastResult;
  };
}

module.exports = { counter, add, curryMultiply, memoize, partialAdd };
