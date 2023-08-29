const user = {
  username: "pappu279",
  age: 27,
  sex: "male",
  exmFunc: function () {
    age = 29;
    console.log(this.age);
  },
};
user.exmFunc();
