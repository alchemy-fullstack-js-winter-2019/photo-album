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


module.exports = { counter, partialAdd };
