const { counter, curryMultiple, curryFive, partialAdd, threeAdd } = require('./hof');

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
  it('takes three parameters', () => {
    const three2 = threeAdd(3, 2);

    expect(three2(0)).toEqual(5)
  })
  it('multiples two numbers', () => {
    const multi = curryMultiple(2, 4);
    expect(multi(2)).toEqual(16);
    expect(multi(3)).toEqual(24);
    expect(multi(4)).toEqual(32);
  })
})