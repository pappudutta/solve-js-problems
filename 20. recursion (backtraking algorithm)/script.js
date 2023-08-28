// Loops vs Recursion

// function multiplyArr(arr) {
//   let product = 1;
//   for (let i = 0; i < arr.length; i++) {
//     product *= arr[i];
//   }
//   return product;
// }

function multiplyArr(arr) {
  console.log(arr);

  if (arr.length <= 1) {
    return 1;
  } else {
    return arr[arr.length - 1] * multiplyArr(arr.slice(0, arr.length - 1));
  }
}

console.log(multiplyArr([1, 2, 4]));

function addArr(arr) {
  console.log(arr);
  if (arr.length < 1) {
    return 0;
  } else {
    return arr[0] + addArr(arr.slice(1));
  }
}

// console.log(addArr([1, 2, 3, 4]));
