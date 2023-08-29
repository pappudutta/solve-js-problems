// ! Palindrome Number

function isPalindrome(num) {
  let revNum = parseInt(num.toString().split("").reverse().join(""));
  if (num === revNum) {
    return true;
  }
  return false;
}
console.log(isPalindrome(121));

//! Reverse a string

function reverseString(str) {
  if (str === "") {
    return "";
  }
  return reverseString(str.substr(1)) + str.charAt(0);
  // call stack = ello = h+ 'olle'
  // call stack = llo = e+ 'oll'
  // call stack = lo = l+ 'ol'
  // call stack = o = l + 'o'
  // return "" = ''
}

console.log(reverseString("hello"));

// "hello"
