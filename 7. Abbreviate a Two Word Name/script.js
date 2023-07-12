/* 

let myName = "munna Dutta";

let result = myName.split(" ");
let abb =
  result[0].charAt(0).toUpperCase() + "." + result[1].charAt(0).toUpperCase();
console.log(abb);

*/

let myName = "munna Dutta patra";

let result = myName
  .split(" ")
  .map(a => a.charAt(0).toUpperCase())
  .join(".");

console.log(result);
