function counter() {
  let count = 0; // is the same as let count = null, if 0 could be a result you can make it a 0
  return function () {
    count++;
    return count; // could combine return ++count 
  };
}

// function add(a,b) {
//   return a + b + c;
// }

// function partialAdd(a) {

//   return function (b){
//     return add(a, b); 

    
//   };
// }

function add(a, b, c) {
  return a + b + c;
}

//you can parital apply with one argument and only have one return function
function partialAdd(a,b) {
  return function (c) {
    return add(a, b, c)
  }
}

//curry function takes one function per argument
//higher order function for each argument that your original function requires
function curryAdd(a) {
  return function(b) {
    return function(c) {
      return add(a, b, c);
    }
  }
}
//Another way to write multiply function
// function multiply(...args) {
  //return args.reduce((acc,num) => acc * num, 1);
// }
function multiply (a, b, c) { 
  return a * b * c;
}
//reduce multipleware is a curray function
function curryMultiply(a) {
  return function (b) {
    return function (c) {
      return multiply(a, b, c);
    }
  }
}

function memoize(fn) {
  let lastArguments = null;
  let lastResult = null;
  return function() {
    const args = [...arguments];
    //if args and lastArgs are the same
    //if lastArgs = [1, 2]
    //args = [1, 2]
    //arg = 1 and i = 0 -> args [0] = 1 arg === args[0] is true
    if(lastArgs && lastArgs.every((arg, i) => arg === args[i])) {
      return lastResult;
    } 
    //return lastResult
    //otherwise
    //store lastArgs
    lastArgs = args; //storing lastArgs
    //invoke fn and store lastResult
    lastResult = fn(...args);
    //return result
    return lastResult;
  }
 
}

function expensiveOperation(seconds) {
  return new Promise(resolve => { //setTimeout takes a function with no arguments, but want to call a function with .bind to always pass the number of seconds
    setTimeout(resolve.bind(null, seconds), seconds); //this will always retun the time of seconds
  //setTimeout(() => resolve(secnods), seconds) //settimeout invokes with no arguments, function invoked until timeout is out
  })
}

expensiveOperation(1000)
  .then(expensiveOperation.bind(null,1000));

const memoExpensive






module.exports = {
  counter,
  add,
  partialAdd,
  curryAdd,
  multiply,
  memoize
};

// const add3 = add(3);
//add3(5)

// console.log(add(3,5));