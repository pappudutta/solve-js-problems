function reverseWords(str) {
  console.log("Input: " + str);
  // ------------- Easy Answer -----------------
  // const result = str
  //   .split(" ")
  //   .map(item => item.split("").reverse().join(""))
  //   .join(" ");

  // ***************** Clever Answer ***********************
  // str.split("").reverse().join("").split(" ").reverse().join(" ")
  const result = str
    .split("")
    .reverse()
    .join("")
    .split(" ")
    .reverse()
    .join(" ");
  console.log("Output: " + result);
}

reverseWords("this is example!");
