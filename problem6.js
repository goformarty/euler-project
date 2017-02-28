function sumSquareDifference() {
  var sumOfSquares = 0; 
  var sum = 0;
  
  for (var i=1; i<101; i++) {
  sumOfSquares += i * i;
}
  for (var j=1; j<101; j++) {
  sum += j;
}
  var squareOfSum = sum * sum;
  return squareOfSum - sumOfSquares;
  
}

sumSquareDifference();