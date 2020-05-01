const enhancer = require('./enhancer.js');

const { repair, succeed, fail } = require('./enhancer.js');

const item = {
  name: 'Burt',
  enhancement: 18, // number from 0 to 20
  durability: 76   // number from 0 to 100
}
// test away!

describe('repair', () => {
  it('increases durability to 100', () => {
    expect(repair({...item})).toEqual({...item, durability: 100})
  })
});

describe('succeed', () => {
  it('increases enhancement by 1 if < 20', () => {
    expect(succeed({...item})).toEqual({...item, enhancement: 19});
  })

  // it('does not change enhancement if >= 20', () => {
  //   expect(succeed({...item, enhancement: 22})).toEqual({...item, enhancement: 22});
  // })

  it('does not change durability', () => {
    expect(succeed({...item})).toEqual({...item, enhancement: 19, durability: 76});
  })
});

describe('fail', () => {
  it('decreases durability - 5, if enhancement is < 15', () => {
    const expectedResult = fail({...item, enhancement: 13});
    const actualResult = {...item, enhancement: 13, durability: 71};

    expect(expectedResult).toEqual(actualResult);
  })

  it('decreases durability - 10, if enhancement is >= 15', () => {
    const expectedResult = fail({...item});
    const actualResult = {...item, durability: 66};

    expect(expectedResult).toEqual(actualResult);
  })

  it('decreases enhancement - 1, if enhancement is > 16', () => {
    const expectedResult = fail({...item});
    const actualResult = {...item, enhancement: 17};

    expect(expectedResult).toEqual(actualResult);
  })
});