function sumSquareDifference(n) {
  var sum = 0;
  var sumOfSquares = 0;
  
  for (var i=1; i<=n; i++) {
  sumOfSquares += i * i;
}
  for (var j=1; j<=n; j++) {
  sum += j;
}
  var squareOfSum = sum * sum;
  return squareOfSum - sumOfSquares;
  
}

sumSquareDifference(100);