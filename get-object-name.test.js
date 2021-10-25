const getObjectName = require ('./get-object-name.js');

describe('getObjectName should take in an object with a Name value, and return only that value', () => {
  const object = { age: 12, name:'cutie' };
  expect(getObjectName(object)).toEqual('cutie');
});
