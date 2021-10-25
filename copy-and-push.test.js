const copyAndPush = require('./copy-and-push.js');


describe('copyAndPush', () => {
    
  it('should take in an array, and return a copy of that array with a given item added to the end of that array', () => {

    const originalArr = ['treats', 'tuna loin', 'bugs', 'naps'];

    const newItem = 'hair-ties';

    expect(copyAndPush(originalArr, newItem)).toEqual(expect.arrayContaining('hair-ties'));  
  }); 
});
