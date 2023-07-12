function sum(numbers) {
  "use strict";

  let result = numbers.reduce((acc, crr) => {
    console.log("acc: " + acc, "crr: " + crr);
    let result = acc + crr;
    return result;
  }, 0);
  console.log(result);
  return result;
}
// sum([]);
sum([1, 2, 4, 5]);
