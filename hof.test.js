const {
  numCalled,
  partAdd,
  add,
  curryMultiply
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
    const addThirdArg = partAdd(2, 3);

    expect(addThirdArg(3)).toEqual(8);
  });
  
  it('can use bind to add', () => {
    const add100 = add.bind(null,  100, 1);
    
    expect(add100(30)).toEqual(131);
  });

  it('can curry multiply', () => {
    const multiply2 = curryMultiply(2);
    const multiply3 = multiply2(3);
    const multiply4 = multiply3(4);
    const multiply5 = multiply4(5);
    const result = multiply5(6);

    const result2 = curryMultiply(1)(2)(3)(4)(1);

    expect(result).toEqual(720);
    expect(result2).toEqual(24);
  });
});
