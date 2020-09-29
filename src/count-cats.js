module.exports = function countCats(backyard) {
  let counter = 0;
  backyard.forEach((array) => {
    array.forEach((element) => {
      element === '^^' && counter++;
    });
  });
  return counter;
};
