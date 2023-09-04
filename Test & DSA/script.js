// // Input: nums1 = [1,3], nums2 = [2]
// // Output: 2.00000

// // Input: nums1 = [1,2], nums2 = [3,4]
// // Output: 2.50000

// // var findMedianSortedArrays = function (nums1, nums2) {
// //   let arr = nums1.concat(nums2);
// //   if (arr.length < 2) {
// //     return arr[0];
// //   }
// //   let sortedArr = arr.slice().sort((a, b) => a - b); // 2,3
// //   if (arr.length < 3) {
// //     return (arr[0] + arr[1]) / 2;
// //   }
// //   let length = sortedArr.length;

// //   let middleIndex = Math.floor(arr.length / 2);

// //   if (length / 2 === 1) {
// //     return sortedArr[middleIndex];
// //   } else {
// //     return (sortedArr[middleIndex] + sortedArr[middleIndex - 1]) / 2;
// //   }

// //   let nums = nums1.concat(nums2);
// //   let numsLength = nums.length; //3

// //   if (numsLength < 2 || numsLength < 1) {
// //     return nums[0];
// //   }

// //   let sortedNum = nums.slice().sort((a, b) => a - b); // 1,2,3,4
// //   let middleIndex = Math.floor(numsLength / 2);

// //   if (numsLength % 2 === 1) {
// //     return sortedNum[middleIndex];
// //   } else {
// //     return (sortedNum[middleIndex - 1] + sortedNum[middleIndex]) / 2;
// //   }
// // };
// // // findMedianSortedArrays([-1], [3, -2]);
// // console.log(findMedianSortedArrays([1, 2], [3, 4]));
// // console.log(findMedianSortedArrays([], [1, 2, 3, 4, 5]));
// // console.log("(2.5)", findMedianSortedArrays([1, 2], [3, 4]));
// // console.log("output: (1) ", findMedianSortedArrays([3], [-2, -1]));

// // let arr = [1, 2, 3, 4];
// // let newarr = arr.slice(0, arr.length - 1);
// // console.log(newarr);

// console.log("--");
// //! 2634. Filter Elements from Array

// let arr = [0, 10, 20, 30];
// let fn = function greaterThan10(n) {
//   return n > 10;
// };
// // Input:
// // let arr = [1, 2, 3];
// // let fn = function firstIndex(n, i) {
// //   return i === 0;
// // };
// // Input:
// // let arr = [-2, -1, 0, 1, 2];
// // let fn = function plusOne(n) {
// //   return n + 1;
// // };

// // Output: [1]

// var filter = function (arr, fn) {
//   return arr.filter((value, index) => fn(value, index));
// };

// const arr1 = [0, 10, 20, 30];
// const filteredArr1 = customFilter(arr1, n => n > 10);
// console.log(filteredArr1); // Output: [20, 30]

// const arr2 = [1, 2, 3];
// const filteredArr2 = customFilter(arr2, (n, i) => i === 0);
// console.log(filteredArr2); // Output: [1]

// const arr3 = [-2, -1, 0, 1, 2];
// const filteredArr3 = customFilter(arr3, n => n + 1);
// console.log(filteredArr3); // Output: [-2, 0, 1, 2]

// Input:
// let nums = [];
// let fn = function sum(accum, curr) {
//   return 0;
// };
// let init = 25;

// var reduce = function (nums, fn, init) {
//   let val = init;

//   nums.forEach(num => {
//     val = fn(val, num);
//   });

//   return val;
// };

// console.log(reduce(nums, fn, init));

// let fn = [x => x + 1, x => x * x, x => 2 * x],
//   x = 4;

// var compose = function (functions) {
//   return function (x) {
//     let result;
//     functions.reverse().forEach(element => {
//       x = element(x);
//     });
//     return (result = x);
//   };
// };
// let comp = compose(fn);

// console.log(comp(x));
console.log("-");
//! 2703. Return Length of Arguments Passed

// let argsArr = [8, 2, 2];

// var argumentsLength = function (...args) {
//   return args.length;
// };
// console.time();
// console.log(argumentsLength(...argsArr));
// console.timeEnd();
let fn = (a, b, c) => a + b + c;
// calls = [
//   [1, 2, 3],
//   [2, 3, 6],
// ];

// var once = function (fn) {
//   let hasCalled = false; // Move the variable outside of the returned function

//   return function (...args) {
//     if (hasCalled) {
//       console.log("fn was not called again");
//       return undefined; // Return undefined if fn was already called
//     }
//     console.log("test");
//     let result = fn(...args);
//     hasCalled = true;
//     return result;
//   };
// };
// let onceFn = once(fn);
// console.log(onceFn(1, 2, 3));

let s1 = "abcd";
let s2 = "cdab";

let s11 = "bnxw";
let s22 = "xwbn";

// ! false
let s3 = "abcd";
let s4 = "dacb";

var canBeEqual = function (s1, s2) {
  arrS1 = s1.split("");
  arrS2 = s2.split("");

  let pairS1a = arrS1[0] + arrS1[2];
  let pairS1b = arrS1[1] + arrS1[3];
  let pairS2a = arrS2[0] + arrS2[2];
  let pairS2b = arrS2[1] + arrS2[3];

  let sortedPairS1 =
    pairS1a.split("").sort().join("") + pairS1b.split("").sort().join("");
  let sortedPairS2 =
    pairS2a.split("").sort().join("") + pairS2b.split("").sort().join("");

  return sortedPairS1 === sortedPairS2;
};

console.log(canBeEqual("abcd", "cdab")); // output: true
console.log(canBeEqual("bnxw", "xwbn")); // output: true
console.log(canBeEqual("abcd", "dacb")); // output: true
