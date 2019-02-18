const {
  numCalled,
  partAdd
} = require('./hof');

describe('HOF tests', () => {
  it('counts the number of times it has been called', () => {
    const count = numCalled();
    
    expect(count()).toEqual(1);
    expect(count()).toEqual(2);
    expect(count()).toEqual(3);
    expect(count()).toEqual(4);
  });

  it('partially applies the add function', () => {
    const add2 = partAdd(2);

    expect(add2(3)).toEqual(5);
    expect(add2(5)).toEqual(7);
    expect(add2(7)).toEqual(9);
    expect(add2(9)).toEqual(11);
  });
});
