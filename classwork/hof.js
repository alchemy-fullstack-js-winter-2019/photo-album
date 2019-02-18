//any function that takes a fn as one of its parameters
// [1, 2, 3, 4].map(() => {});
// function myHigherOrderFunction(fn) {}
// function findById(id, callback) {}
 
// functions that return other functions
// function add(a) { 
//   return function(b) { 
//     return a + b;
// }};
// console.log(add(2)(3));


function counter() {
  let count = 0;
  return function() {
    return ++count;
  };
}

module.exports = { counter };
