const { counter, partial } = require('./hof');

describe('counter', () => {
  it('counts the number of times it is called' ,() => {
    const count = counter();
    expect(count()).toEqual(1);
  })
  it('partially applies add', () => {
    const add2 = partial(2);

    expect(add2(2)).toEqual(4);
    expect(add2(5)).toEqual(7);
    expect(add2(9)).toEqual(11);
  })
})
