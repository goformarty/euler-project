/* 
PROJECT EULER
Problem 4: Largest palindrome product

A palindromic number reads the same both ways. 
The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers.
*/

var x = 999;
var y = 999; 



/*
// FIRST: reverse a string!
function reverseString(str) {
  // split() method to return a new array
  var splitString = str.split("");

  // reverse() method to reverse the new array 
  var reverseArray = splitString.reverse();

  // join() method to join the reversed array
  var joinArray = reverseArray.join("");
  return joinArray;
}
*/


//chained:

function reverseString(str) {
    return str.split("").reverse().join("");
}
reverseString("hello");