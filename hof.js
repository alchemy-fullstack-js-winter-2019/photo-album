
function counter() {
  let count = 0;
  return function() {
    count++;
    return count;
  }
}

function add(a, b) {
  return a + b;
}

function partialAdd(a) {
  return function(b) {
    return add(a, b);
  }
}
function threeAdd(a, b) {
  return function(c) {
    return add(a, b, c);
    };
}

//another way to write partial add
function curryAdd(a) {
  return function(b) {
    return function(c) {
    return add(a, b, c);
    }
  }
}

function curryMultiple(a, b) {
  return function(c) {
    return a * b * c;
    }
  }

module.exports = {
  counter,
  partialAdd,
  threeAdd,
  curryMultiple
};