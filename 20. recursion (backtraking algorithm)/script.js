// Loops vs Recursion

// function multiplyArr(arr) {
//   let product = 1;
//   for (let i = 0; i < arr.length; i++) {
//     product *= arr[i];
//   }
//   return product;
// }

// function multiplyArr(arr) {
//   console.log(arr);

//   if (arr.length <= 1) {
//     return 1;
//   } else {
//     return arr[arr.length - 1] * multiplyArr(arr.slice(0, arr.length - 1));
//   }
// }

// console.log(multiplyArr([1, 2, 4]));

// function addArr(arr) {
//   console.log(arr);
//   if (arr.length < 1) {
//     return 0;
//   } else {
//     return arr[0] + addArr(arr.slice(1));
//   }
// }

// console.log(addArr([1, 2, 3, 4]));

// ! Factorial of n

// function factorial(n) {
//   if (n === 1) {
//     return 1;
//   }
//   console.log(n);
//   return n * factorial(n - 1);
// }

// console.log(factorial(3));

// ! Create an array with range of numbers
// * input: start = 1, end = 5 , output : [1,2,3,4,5]

function rangeOfNumbers(start, end) {
  if (start > end) {
    return [];
  }
  const numbers = rangeOfNumbers(start, end - 1);
  numbers.push(end);
  return numbers;
}
console.log(rangeOfNumbers(1, 3));
