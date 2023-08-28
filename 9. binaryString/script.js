// let n = 150545555550;
// let result = n.toString(2).split("1").join("").length;

// console.log(result);

"use strict";

let numbers = [];

let result = numbers.reduce((a, b) => {
  return (a += b);
}, 0);

console.log(result);
