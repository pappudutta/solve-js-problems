// let numR = [2, 3, 4];

// let accValus = [];
// let result = numR.reduce((acc, crr) => {
//   accValus.push(acc);
//   return (acc += crr);
// });

// console.log(accValus);

// ! Dom elements

// let title = document.getElementById("title");

// console.log(title.id);
// console.log(title.className);

// title.style.padding = "20px";
// title.style.border = "2px solid";
// title.style.borderRadius = "100px";

// console.log(title.textContent);
// console.log(title.innerHTML);
// console.log(title.innerText);
// console.log(title.outerHTML);
// console.log(title.outerText);

// ! query selectors

let selector1 = document.getElementsByClassName("list-item");

selectorM = Array.from(selector1);
console.log(selectorM);
let arrSelector = selectorM.map(item => {
  return item.innerText;
});
console.log(arrSelector);
