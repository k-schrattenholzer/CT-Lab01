const copyAndPush = (arr, item) => {
  const originalArr = [...arr];
  originalArr.push(item);

  return originalArr;
};

module.exports = copyAndPush;
