// function add(a, b, c) {
//     return a + b + c;
// }
// function partialAdd(a, b) {
//     return function(c) {
//         return add(a, b, c)
//     }
// }
// const add2 = partialAdd(2, 2);
// console.log(add2(3));


function multiply(a, b, c, d, e) {
    return a * b * c * d * e;
}

function curryMultiply(a) {
    return function(b) {
        return function(c) {
            return function(d) {
                return function(e) {
                    return multiply(a, b, c, d, e);
                }
            }
        }
    }
}

const stephCurry = curryMultiply(2);
console.log(stephCurry(2)(3)(4)(5));
