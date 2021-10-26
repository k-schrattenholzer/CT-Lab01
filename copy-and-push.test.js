const copyAndPush = require('./copy-and-push.js');


describe('copyAndPush', () => {
    
  it('should take in an array, and return a copy of that array with a given item added to the end of that array', () => {

    const arr = ['miss vanjie', 'hair-ties', 'my big pink bed', 'snuggles (but not too much)'];

    const newItem = 'watching cat-tv out the window';

    expect(copyAndPush(arr, newItem))
      .toEqual(expect.arrayContaining([newItem]));  
  }); 
});
