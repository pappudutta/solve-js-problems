function x(name) {
  console.log("Hi", name);
}

//Higher Order Function takes another function
function sayName(myName, x) {
  x(myName);
}

sayName("pappu", x);
