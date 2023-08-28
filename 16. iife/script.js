var a = 10;
// Unnamed iife
console.log("Hi 'IIFE'", "I am", name);
(name => {})("Pappu");

var x = 2000;
// named iife

(function () {
  console.log("Named IIFE");
})();
