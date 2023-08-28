/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function (arr, fn) {
  //   let result = [];

  //   for (let i = 0; i < arr.length; i++) {
  //     let value = fn(arr[i], i);
  //     result.push(value);
  //   }

  //   return result;

  for (let i = 0; i < arr.length; i++) {
    arr[i] = fn(arr[i], i);
    // console.log(arr[i]);
  }
  return arr;
};

console.log(
  map(
    [1, 2, 3],
    (fn = function plusone(n) {
      return n + 1;
    })
  )
);
console.log(
  map(
    [1, 2, 3],
    (fn = function plusI(n, i) {
      return n + i;
    })
  )
); // output: [1,3,5]

//* Input: arr = [1,2,3], fn = function plusone(n) { return n + 1; }
//* Output: [2,3,4]
