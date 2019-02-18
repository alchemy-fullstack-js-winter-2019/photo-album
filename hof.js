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

module.exports = {
  numCalled,
  partAdd,
  add,
  curryAdd,
  curryMultiply
};
