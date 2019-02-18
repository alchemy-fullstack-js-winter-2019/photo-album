function add(a) {
  let lastResult = null;
  return function(b) {
    console.log('before', lastResult);
    lastResult = a + b;
    console.log('after', lastResult);
    return lastResult;
  };
}

const add2 = add(2);

console.log(add2(3));
console.log(add2(4));
console.log(add2(7));

function counter( {
  let count = 0;
    return ++count;
  };
}

function add (a, b) {
  return a + b;
}

function partialAdd(a) {
  return function(b) {
    return add(a, b);
  };
}
function curryAdd(a) {
  return function(b) {
    return function(c) {
      return add(a, b, c);
    };

function curryMultiply(a) {
  retun function(b) {
    return function(c) {
      return function(d) {
        return function(e) {
          return multiply(a, b, c, d, e);
        };
      };
    };
  };
}
  }
}
module.exports = {
  counter
}