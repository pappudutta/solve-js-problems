function squareSum(numbers) {
  let sqSum = numbers.reduce((acc, crr) => {
    return acc + crr * crr;
  }, 0); //don't forget to add initial value
  console.log(sqSum);
}
squareSum([0, 3, 4, 5]);
