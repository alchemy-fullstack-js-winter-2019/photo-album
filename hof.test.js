// const { 
//   counter, 
//   partialAdd, 
//   add,
//   curryMultiply,
//   memoize
// } = require('./hof');

// describe('counter', () => {
//   it('counts the number of times it is called', () => {
//     const count = counter();
//     //let count = 0
//     const count2 = counter();
//     //let count = 0

//     expect(count()).toEqual(1);
//     expect(count()).toEqual(2);
//     expect(count()).toEqual(3);
//     expect(count()).toEqual(4);
//     expect(count2()).toEqual(1);
//   });
  
//   it('partially applies add', () => {
//     const addPart = partialAdd(2, 3);
    
//     expect(addPart(2)).toEqual(4);
//     expect(addPart(4)).toEqual(6);
//     expect(addPart(1)).toEqual(3);
//   });

//   it('curries a multiply function', () => {
//     expect(curryMultiply(2)(2)(2)(3)(4)(1))
//       .toEqual(48);
//   });

//   it('memoizes a function', () => {
//     cosnt fn = jest(fn);
//     const memoFn = memo(fn);
//     memoFn(1, 2);
//     memoFn(1, 2);
//     expect(fn).toHaveBeenCalledTimes(1);
//   });
// });
