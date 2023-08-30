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
console.log(below30);
