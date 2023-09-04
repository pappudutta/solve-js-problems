// function mul(num) {
//   return num * 2;
// }
// mul.power = 2;

// console.log(mul(3));
// console.log(mul.power);
// console.log(mul.prototype);

//! Create a constructor function

function menu(name, price) {
  this.name = name;
  this.price = price;
}

menu.prototype.print = function () {
  console.log(`${this.name} is ${this.price}`);
};

const chai = new menu("chai", 10);
const coffee = new menu("coffee", 30);

//* chai.print();
//* coffee.print();

// ! Prototype

// let myName = "pappu    ";
// console.log(myName.trueLength);

// let heroPower = {
//   thor: "Hammer",
//   hulk: "sling  ",

//   getPower: function () {
//     console.log(`${this.hulk}`);
//   },
// };

// let zeroPower = {
//   krish: "fly",
//   beast: "snach",
// };

// Object.prototype.pappu = function () {
//   console.log("pappu");
// };

// heroPower.getPower();
// heroPower.pappu();
// zeroPower.pappu();

// let arr = [];

// Array.prototype.name = function () {
//   console.log("array pappu");
// };

// arr.name();
// heroPower.name();
// const User = {
//   myName: "jay",
//   email: "jay@gmail.com",
// };

// const Teacher = {
//   isAvailable: true,
// };

// const TeachingSupport = {
//   isAbailable: false,
// };

// const TaSupport = {
//   makeAsignment: "JS asignment",
//   fullTime: true,
//   __proto__: TeachingSupport,
// };

// Teacher.__proto__ = User;
let name = "Dutta ";

String.prototype.trueLength = function () {
  console.log(this);

  console.log(this.trim().length);
};

name.trueLength();
