function reverseWords(str) {
  console.log("Input: " + str);
  const result = str
    .split(" ")
    .map(item => item.split("").reverse().join(""))
    .join(" ");
  console.log("Output: " + result);
}

reverseWords("this is example!");
