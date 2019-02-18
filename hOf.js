function counter() {
  let count = 0;
  return function() {
    return ++count;
  };
}

// partially applied functions; one return function
function add(a, b) {
  return a + b;
}
function partialAdd(a) {
  return function(b) {
    return add(a, b);
  };
}

function addd(a, b, c) {
  return a + b + c;
}
function partialApply(a, b) {
  return function(c) {
    return addd(a, b, c);
  };
}

// currying; higher order function for each arg
function curryAdd(a) {
  return function(b) {
    return function(c) {
      return add(a, b, c);
    };
  };
}

function multiply(a, b, c, d, e) {
  return a * b * c * d * e;
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
/*
Memoize is a function that takes a function as an argument (let's call this `fn`).
It then returns a function (let's call this `memoFn`). When `memoFn` is invoked it will invoke `fn`.
However, if the same arguments are passed to `memoFn` it will not invoke `fn` and instead
return the last result.

HINT: You'll need a closure.
HINT: for testing you can use `jest.fn()`
*/
function memoize(fn) {
  let lastArgs = null;
  let lastResult = null;
  return () => {
    const args = [...arguments];
    if(lastArgs && lastArgs.every((arg, i) => arg === args[i])) {
      return lastResult;
    } else {
      lastArgs = args;
      lastResult = fn(...args);
      //or: lastResult = fn.apply(null, args);
      return lastResult;
    }
  };
}

module.exports = {
  add,
  counter,
  partialAdd,
  partialApply,
  curryAdd,
  curryMultiply,
  memoize
};
