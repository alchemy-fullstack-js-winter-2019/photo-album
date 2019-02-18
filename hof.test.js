const { counter, partial } = require('./hof');

describe('counter', () => {
  it('counts the number of times it is called', () => {
    const count = counter();
    //let count = 0
    const count2 = counter();
    //let count = 0

    expect(count()).toEqual(1);
    expect(count()).toEqual(2);
    expect(count()).toEqual(3);
    expect(count()).toEqual(4);
    expect(count2()).toEqual(1);
  });
});

describe('partial', () => {
  it('creates an add function', () => {
    const add = partial();
    // const add2 = partial();

    expect(add()).toEqual(2);
   
  });
});
