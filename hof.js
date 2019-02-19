function counter() {
  let count = 0;
  return function() {
    count++;
    return count;
  };
}

function add(a, b) {
  return a + b;
}

function partialAdd(a) {
  return function(b) {
    return add(a, b);
  };
}
function threeAdd(a, b) {
  return function(c) {
    return add(a, b, c);
  };
}
// spread 
function multiply(...args) {
  // eslint-disable-next-line no-undef
  return args.reduce(acc, num => acc * num, 1);
}

//another way to write partial add
// eslint-disable-next-line no-unused-vars
function curryAdd(a) {
  return function(b) {
    return function(c) {
      return multiply(a, b, c);
    };
  };
}

function curryMultiple(a, b) {
  return function(c) {
    return a * b * c;
  };
}

function memo(fn) { 
  let lastArgs = null;
  let lastResult = null;
  return function() {
    const args = [...arguments];
    if(lastArgs && lastArgs.every((arg, i) => arg === args[i])) {
      return lastResult;
    }
    lastArgs = args;
    lastResult = fn(...args);

    return lastResult;
  };
}


// eslint-disable-next-line no-undef
module.exports = {
  counter,
  partialAdd,
  threeAdd,
  curryMultiple,
  memo
};
