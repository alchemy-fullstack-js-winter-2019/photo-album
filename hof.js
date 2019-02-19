// function counter() {
//   let count = 0;
//   return function() {
//     return ++count;
//   };
// }

// function add(a, b, c) {
//   return a + b + c;
// }

// function partialAdd(a, b) {
//   return function(c) {
//     return add(a, b, c);
//   };
// }

// function curryAdd(a) {
//   return function(b) {
//     return function(c) {
//       return add(a, b, c);
//     };
//   };
// }

// function multiply(...args) {
//   return args.reduce((acc, num) => acc * num);
// }

// function curryMultiply(a) {
//   return function(b) {
//     return function(c) {
//       return function(d) {
//         return function(e) {
//           return multiply(a, b, c, d, e);
//         };
//       };
//     };
//   };
// }

// function memoize(fn){
//   let lastArgs = null;
//   let lastResult = null;
//   return function() {
//     const args = [...arguments];
//     if(lastArgs && lastArgs.every((arg, i) => === arg[i])) {
//     }
//   }
//   lastArgs = args;
//   lastResult = fn(...args);
//   return lastResult;
// }

// module.exports = {
//   counter,
//   partialAdd,
//   add,
//   curryAdd,
//   curryMultiply,
//   memoize
// };
