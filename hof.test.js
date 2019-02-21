const { counter, partialAdd } = require('./hof');

describe('counter', () => {
  it('counts the number of times it is called', () => {
    const count = counter();

    expect(count()).toEqual(1);
    expect(count()).toEqual(2);
    expect(count()).toEqual(3);
    expect(count()).toEqual(4);
  });

  it('applies the add function', () => {
    const add2 = partialAdd(2);

    expect(add2(2)).toEqual(4);
    expect(add2(4)).toEqual(6);
    expect(add2(6)).toEqual(8);
  });

  it('adds a third', () => {
    const addAnother = partialAdd(2, 3);
    const add4 = partialAdd(2, 2);

    expect(addAnother(0)).toEqual(5);
    expect(add4(2)).toEqual(6);
  });
});
