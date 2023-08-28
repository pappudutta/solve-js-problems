// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000

// Input: nums1 = [1,2], nums2 = [3,4]
// Output: 2.50000

var findMedianSortedArrays = function (nums1, nums2) {
  //   let arr = nums1.concat(nums2);
  //   if (arr.length < 2) {
  //     return arr[0];
  //   }
  //   let sortedArr = arr.slice().sort((a, b) => a - b); // 2,3
  //   if (arr.length < 3) {
  //     return (arr[0] + arr[1]) / 2;
  //   }
  //   let length = sortedArr.length;

  //   let middleIndex = Math.floor(arr.length / 2);

  //   if (length / 2 === 1) {
  //     return sortedArr[middleIndex];
  //   } else {
  //     return (sortedArr[middleIndex] + sortedArr[middleIndex - 1]) / 2;
  //   }

  let nums = nums1.concat(nums2);
  let numsLength = nums.length; //3

  if (numsLength < 2 || numsLength < 1) {
    return nums[0];
  }

  let sortedNum = nums.slice().sort((a, b) => a - b); // 1,2,3,4
  let middleIndex = Math.floor(numsLength / 2);

  if (numsLength % 2 === 1) {
    return sortedNum[middleIndex];
  } else {
    return (sortedNum[middleIndex - 1] + sortedNum[middleIndex]) / 2;
  }
};
// findMedianSortedArrays([-1], [3, -2]);
console.log(findMedianSortedArrays([1, 2], [3, 4]));
console.log(findMedianSortedArrays([], [1, 2, 3, 4, 5]));
console.log("(2.5)", findMedianSortedArrays([1, 2], [3, 4]));
console.log("output: (1) ", findMedianSortedArrays([3], [-2, -1]));
