const { counter } = require('./hOf');

describe('counter function', () => {
  it('counts number of times it was called', () => {
    const count = counter();
    expect(count()).toEqual(1);
    expect(count()).toEqual(2);
    expect(count()).toEqual(3);
    expect(count()).toEqual(4);
  });
});
