const { counter, partial, curryMultiply, memoize } = require('./hof');

describe('counter', () => {
  it('counts the number of times it is called' ,() => {
    const count = counter();
    expect(count()).toEqual(1);
  })
  // it('partially applies add', () => {
  //   const add2 = partial(2);
  //   const add5 = partial(5);
  //   const add100 = add.bind(null, 100);
  //   //this for the first parameter, don't need this

  //   expect(add2(2)).toEqual(4);
  //   expect(add2(5)).toEqual(7);
  //   expect(add2(9)).toEqual(11);
  //   expect(add5(5)).toEqual(10);
  //   expect(add100(30)).toEqual(130);
  // })
  it('partially adds', () => {
    const addPart = partial(2,3);

    expect(addPart(5)).toEqual(10);
    expect(addPart(4)).toEqual(9);
    
  }),
  it('currymultiplies', () => {
    const one = curryMultiply(1);
    const oneTwo = one(2);
    const oneTwoThree = oneTwo(3);
    const oneTwoThreeFour = oneTwoThree(4);
    const oneTwoThreeFourFive = oneTwoThreeFour(5);

    expect(oneTwoThreeFourFive).toEqual(120);
  })
  it('memoize', () => {
    const fn = jest.fn();
    const memoFn = memoize(fn);
    memoFn(1, 2);
    memoFn(1, 2);
    expect(fn).toHaveBeenCalledTimes(1);
  })
})
