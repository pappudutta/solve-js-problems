// Example: 1
// function x(name) {
//   console.log("Hi", name);
// }

// //Higher Order Function takes another function
// function sayName(myName) {
//   x(myName);
// }

// sayName("Neerav");
// sayName("Rubi");

// Example: 2
const radius = [2, 3, 4];
const radius2 = [2, 5, 4];

function area(radius) {
  return Math.PI * radius * radius;
}

function diameter(radius) {
  return 2 * radius;
}

function circumference(radius) {
  return 2 * Math.PI * radius;
}

Array.prototype.calculator = function (fn) {
  const output = [];
  for (let i = 0; i < this.length; i++) {
    output.push(fn(this[i]));
  }
  return output;
};
console.log(radius);

console.log(typeof radius.map(diameter));

console.log(radius.calculator(diameter));
console.log(radius2.calculator(diameter));

// let num = [23, 32];
// function double(num) {
//   return 2 * num;
// }
// function triple(num) {
//   return 3 * num;
// }

// Array.prototype.mapnew = function (logic) {
//   let newNum = [];
//   for (let i = 0; i < this.length; i++) {
//     newNum.push(logic(this[i]));
//   }
//   return newNum;
// };
// console.log(num.mapnew(double));
// console.log(num.mapnew(triple));
