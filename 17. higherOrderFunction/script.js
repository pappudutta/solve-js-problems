function x(name) {
  console.log("Hi", name);
}

//Higher Order Function takes another function
function sayName(myName) {
  x(myName);
}

sayName("Neerav");
sayName("Rubi");
