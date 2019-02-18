const { counter } = require('../classwork/hof');

describe('count', () => {
  it('keeps track of the number of times it is called', () => {
    const count = counter();

    expect(count()).toEqual(1);
    expect(count()).toEqual(2);
    expect(count()).toEqual(3);
  });
});
