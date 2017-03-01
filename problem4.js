/* 
PROJECT EULER
Problem 4: Largest palindrome product

A palindromic number reads the same both ways. 
The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers.
*/


function reverseString(str) {
  return str.split("").reverse().join("");
}

function palindrome() {
  var palindromeArray = [];
  for (var x=999; x>99; x--) {
  for (var y = 999; y>99; y--) {
    var multiply = x * y;
    var stringMultiply = multiply.toString();
    var reversedMultiply = reverseString(stringMultiply);
    if (reversedMultiply === stringMultiply) {
      palindromeArray.push(multiply);
    }
  }
}
return Math.max.apply(null, palindromeArray);
}

palindrome();