const capitalizeAndFilter = (arr) => {
  const newArr = [];
  arr.forEach(string => {
    newArr.push(string.toUpperCase());
  });
  return newArr.filter(string => !string.startsWith('F'));
};
module.exports = capitalizeAndFilter;
