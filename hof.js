/*eslint-disable no-console*/
function numCalled() {
  let a = 0;
  return function() {
    console.log('before: ', a);
    a++;
    console.log('after', a);
    return a;
  };
}

function partAdd(a) {
  let result = null;
  return function(b) {
    console.log('before', result);
    result = a + b;
    console.log('after', result);
    return result;
  };
}

module.exports = {
  numCalled,
  partAdd
};
