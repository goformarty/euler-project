/* PROJECT EULER
Problem 1: Multiples of 3 and 5

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
Find the sum of all the multiples of 3 or 5 below 1000. */

var sum = 0;
var array = [];

for (i=1; i<1000; i++) {
  if (i%3 === 0 || i%5 === 0) {
    sum += i;
    array.push(i);
  }
}

console.log("All natural numbers below 1000 that are multiples of 3 or 5 are: " + array);
console.log("The sum of these multiples is: " + sum);
