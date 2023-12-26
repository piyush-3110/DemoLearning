/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  // Your code here

  let str1 = str.match(/[aeiou]/gi);
  if (str1 == null) return 0;
  return str1.length;
}

module.exports = countVowels;
