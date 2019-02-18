const { counter, partialAdd } = require('./hof');

describe ('counter', () => {
  it('counts the number of times', () => {
    const count = counter();


    expect(count()).toEqual(1);
    expect(count()).toEqual(2);
    expect(count()).toEqual(3);
    expect(count()).toEqual(4);
  })
  it('return partially Adds', () => {
    const add2 = partialAdd(2);
    expect(add2(2)).toEqual(4);
    expect(add2(4)).toEqual(6);
    expect(add2(1)).toEqual(3);
  })
})