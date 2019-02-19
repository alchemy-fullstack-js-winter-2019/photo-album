function counter() {
  let count = 0;
  return function() {
    count++;
    return count;
  };
}

function add(a, b, c){
  return a + b + c;
}

function partialAdd(a, b) {
  return function(c) {
    return add(a, b, c);
  };
}

module.exports = {
  add,
  counter,
  partialAdd
};
