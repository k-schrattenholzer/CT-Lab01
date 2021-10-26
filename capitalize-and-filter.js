const capitalizeAndFilter = (arr) => {
  const newArr = [];
  arr.forEach (item => {
    newArr.push(item.toUpperCase());
  });
  return newArr;
};
module.exports = capitalizeAndFilter;
