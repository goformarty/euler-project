/* 
PROJECT EULER
Problem 3: Largest prime factor

The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ? 
*/

function largestPrimeFactor(number) {
  for (var i=2; i<= number; i++) {
    if (!(number % i)) {
      number /= i;
      i--;
    }
  }
  return i;
}

largestPrimeFactor(600851475143);
