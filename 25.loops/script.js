let arr = [1, 2, 3, 4, 5];

// let sum = arr.map(item => item * 2);

// console.log(sum);

let newArr = [];
let returnVal = arr.forEach(item => {
  //   console.log(item * 2);
  newArr.push(item * 2);
});

console.log(newArr);
