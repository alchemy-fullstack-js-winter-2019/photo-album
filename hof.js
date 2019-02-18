function counter() {
  let count = 0;
  return function() {
    return ++count;
  };
}

// function add(a) {
//   let lastResult = null;
//   return function(b) {
//     console.log('before', lastResult);
//     lastResult = a + b;
//     console.log('after', lastResult);
//     return lastResult;
//   };
// }

function add(a, b, c) {
  return a + b + c;
}

function partialAdd(a, b) {
  return function(c) {
    return add(a, b, c);
  };
}

function curryAdd(a) {
  return function(b) {
    return function(c) {
      return add(a, b, c);
    };
  };
}

// create multiply with 5 parameters
function multiply(...args) {
  return args.reduce((acc, num) => acc * num);
}
// create curryMultiply
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

module.exports = {
  add,
  curryAdd,
  counter,
  partialAdd,
  curryMultiply
};
