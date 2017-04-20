function sumSquareDifference(n) {
  var sum = sumOfSquares = 0;
  
  for (var i=1; i<=n; i++) {
  sumOfSquares += Math.pow(i,2);
}
  for (var j=1; j<=n; j++) {
  sum += j;
}
  var squareOfSum = Math.pow(sum,2);
  return squareOfSum - sumOfSquares;
}

sumSquareDifference(100);