const { counter, add, memoize, curryMultiply, partialAdd } = require('../classwork/hof');

describe('higher order functions', () => {
  it('keeps track of the number of times it is called', () => {
    const count = counter();

    expect(count()).toEqual(1);
    expect(count()).toEqual(2);
    expect(count()).toEqual(3);
  });

  it('partially applies the add function', () => {
    const add3 = partialAdd(3, 10);
    const add100 = add.bind(null, 100, 50);

    expect(add3(2)).toEqual(15);
    expect(add3(3)).toEqual(16);
    expect(add100(30)).toEqual(180);
  });

  it('can curryMultiply', () => {
    const mult1 = curryMultiply(1);
    const mult2 = mult1(2);
    const mult3 = mult2(3);
    const mult4 = mult3(4);

    expect(mult4(5)).toEqual(120);
  });

  it('can memoize', () => {
    const fn = jest.fn();
    const memoFn = memoize(fn);
    memoFn(1, 2);
    memoFn(1, 2);

    expect(fn).toHaveBeenCalledTimes(1);
  });
});
