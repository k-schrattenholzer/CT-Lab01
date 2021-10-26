const capitalizeAndFilter = require('./capitalize-and-filter.js');


describe('capitalizeAndFilter', () => {
  it('should take an array of strings, filter out any strings that start with F/f and return the filtered array', () => {

    const arrOfStrings = ['hair-ties', 'snuggles', 'fancy feast', 'fish fillet'];

    expect(capitalizeAndFilter(arrOfStrings))
      .toEqual(['HAIR-TIES', 'SNUGGLES']);
  });
});
