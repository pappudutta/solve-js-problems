//! basic user object

// const user = {
//   username: "pappu279",
//   age: 27,
//   sex: "male",
//   exmFunc: function () {
//     age = 29;
//     console.log(this.age);
//   },
// };
// user.exmFunc();

console.log("------------------");

//! Constructor function

function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  this.greet = function () {
    console.log(this.username);
  };
  return this;
}

const userOne = new User("P", 1, true);
const user2 = new User("Lipi", 2, true);
console.log(userOne.username);
