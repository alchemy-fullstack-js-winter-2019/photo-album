function numCalled() {
  let a = 0;
  return function() {
    a++;
    return a;
  };
}

// very common way to add numbers
function partAdd(a, b) {
  let result = null;
  return function(c) {
    result = a + b + c;
    return result;
  };
}

function add(a, b, c) {
  return a + b + c;
}

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

function curryMultiply(a){
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

// useful in the front end when changing state to allow the value to be cached so that the reloading of the page is not visible to the user
function memoize(fn) {
  let lastArgs = null;
  let lastResult = null;
  return function() {
    const args = [...arguments];
    // if args and lastArgs are the same
    if(lastArgs && lastArgs.every((arg, i) => arg === args[i])) {
      console.log('from last result');
      return lastResult;
    }
    console.log('invoke again');
    // return lastResult

    // otherwise
    // store lastArgs
    lastArgs = args;
    // invoke fn and store lastResult
    // fn.apply(null, args);
    lastResult = fn(... args);
    // return result
    return lastResult;
  };
}

// add any function to the memoize function to cache last results
// const memoAdd = memoize(add);
// memoAdd(1, 2, 3);


module.exports = {
  numCalled,
  partAdd,
  add,
  curryAdd,
  curryMultiply,
  memoize
};
