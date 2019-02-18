function counter() {
  let count = 0;
  return function() {
    return ++count;
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

function addd(a, b, c) {
  return a + b + c;
}
function partialApply(a, b) {
  return function(c) {
    return addd(a, b, c);
  };
}


module.exports = { add, counter, partialAdd, partialApply };
