const { add, counter, partialAdd, partialApply } = require('./hOf');

describe('counter function', () => {
  it('counts number of times it was called', () => {
    const count = counter();
    expect(count()).toEqual(1);
    expect(count()).toEqual(2);
    expect(count()).toEqual(3);
    expect(count()).toEqual(4);
  });

  it('has a partial application add function', () => {
    const add2 = partialAdd(2);
    const add5 = partialAdd(5);
    const add100 = add.bind(null, 100);

    expect(add2(5)).toEqual(7);
    expect(add2(3)).toEqual(5);
    expect(add5(3)).toEqual(8);
    expect(add5(100)).toEqual(105);
    expect(add100(30)).toEqual(130);
  });

  it('partially applies addd', () => {
    const add5 = partialApply(2, 3);
    expect(add5(5)).toEqual(10);
  });
});
