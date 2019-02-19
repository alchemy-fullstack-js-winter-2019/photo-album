function add(a) {
  return function(b) {
    return a + b;
  };
}

let add10 = add(10);
let add20 = add(20);

console.log(add10(2));
console.log(add20(4));



function added(a, b, c) {
  return a + b + c;
}

function partialAdd(a) {
  return function(b, c) {
    return added(a, b, c);
  };
}

let partialAdd10 = partialAdd(10);

console.log(partialAdd10(3, 12));



function counting() {
  let count = 0;
  return function() {
    count += 1;
    return count;
  };
}

console.log(counting());



function curryAdd(a) {
  return function(b) {
    return function(c) {
      return added(a, b, c);
    };
  };
}

console.log(curryAdd(3)(4)(8));



function multiply(...args) {
  return args.reduce((acc, num) => acc * num, 1);
  // return a * b * c * d * e
}

function curryMultiply(a) {
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

console.log(curryMultiply(4)(3)(2)(5)(2));



function memoize(fn) {
  let lastArgs = null;
  let lastResult = null;
  return function() {
    const args = [...arguments];
    if(lastArgs && lastArgs.every((arg, i) => arg === args[i])) {
      return lastResult;
    } else {
      lastArgs = args;
      lastResult = fn(...args);
      return lastResult;
    }
  };
}

console.log(memoize());
