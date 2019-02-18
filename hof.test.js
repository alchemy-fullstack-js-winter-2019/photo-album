const { counter, add } = require('./hof');

describe('counter', () => {
  it('counts the number of times called', () => {
    const count = counter ();
    const count2 = counter();
  
    expect(count()).toEqual(1);
    expect(count()).toEqual(2);
    expect(count2()).toEqual(1);

  });

  it('partial application', () => {
    const add2 = partialAdd(2); //this will always add to
    const add5 = partialAdd(5);
    const add100 = add.bind(null, 100); //JS built in partially app

    expect(add2(2)).toEqual(4);
    expect(add2(4)).toEqual(6);
    expect(add2(1)).toEqual(3);

    expext(add5(100)).toEqual(105);

    expect(add100(30)).toEqual(130); //a=100 b = 30
  });

  it('partial applies add', () => {
    const addPart = partialAdd(2, 3);
    const add4 = partialAdd(2,2);

    expect(addPart(0)).toEqual(5);

    expect(add4(2)).toEqual(6);
  });

  // it('curry add', () => {
  //   const add4 = curryAdd(4);
  //   const add4And6 = add4(6);
  //   const add4And5 = add4(5);
  //   const result = add4And5(10);

  // });

  it('curray multiply', () => {
    // const multiply = curryMultiply(2);

    expect(curryMultiply(2)(2)(3)(4)(1)).toEqual(48);
  });

  it('memoize function', () => {
    const fn = jest.fn();

    const memoFn = memo(fn);
    memoFn(1, 2);
    memoFn(1, 2); 

    expect(fn).toHaveBeenCalledTimes(1);
  })
})