// let arr = [1, 2, 3, 4];
// function double(n) {
//   return n % 2 === 1;
// }
// let result = arr.reduce((acc, cur) => {
//   return (acc %= cur);
// });

// console.log(result);
// console.log(arr);

// ! Find Max

// Solution - 1

const arr = [1, 2, 5, 6, 34];

function findMax(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (sum < arr[i]) {
      sum = arr[i];
    }
  }
  console.log(sum);
}
// findMax(arr);

// Solution - 2

function findMaxRoyal(arr) {
  let max = arr.sort((a, b) => b - a);
  console.log(max[0]);
}
// findMaxRoyal(arr);

//! Find particular age

const users = [
  { firstname: "Akshy", age: 27 },
  { firstname: "Mrinal", age: 26 },
  { firstname: "Ajoy", age: 27 },
  { firstname: "Monika", age: 32 },
  { firstname: "Ronika", age: 18 },
];

// {27: 2, 26: 1, 32: 1, 18: 1}
// acc = {}

const output = users.reduce((acc, cur) => {
  if (acc[cur.age]) {
    acc[cur.age] = ++acc[cur.age];
  } else {
    acc[cur.age] = 1;
  }
  return acc;
}, {});

// console.log(output);

// ! first name < 30 age

const below30 = users.filter(user => user.age < 30).map(a => a.firstname);
// console.log(below30);

//! Given an array of numbers, use the map function to double each number in the array.
// Input:
let nums = [1, 2, 3, 4, 5];
// Output: [2, 4, 6, 8, 10]

function doubleNum(nums) {
  let result = [];
  result = nums.map(num => num * 2);
  return result;
}
doubleNum(nums);

// ! Convert an array of Celsius temperatures to Fahrenheit using the formula (C * 9/5) + 32.
// Input: [0, 10, 20, 30]
// Output: [32, 50, 68, 86]

function celToFah(c) {
  return c.map(temp => (temp * 9) / 5 + 32);
}
celToFah([0, 10, 20, 30]);

// !Filter an array of objects representing books to get only books published after the year 2000.
let Books = [
  { title: "Book 1", year: 1998 },
  { title: "Book 2", year: 2005 },
  { title: "Book 3", year: 2010 },
  { title: "Book 4", year: 1995 },
];

function pubBooks(Books) {
  return Books.filter(book => book.year > 2000).map(book => {
    return book;
  });
}
// console.log(pubBooks(Books));
