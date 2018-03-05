function isPrime(num) {
    if (num < 2) {
      return false;
    }
    
    for (var i = 2; i <= num/2; i++) {
      if(num % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  isPrime(2);
  
  function findPrime(num) {
    var primes = [];
    var counter = 2;
    while (primes.length < num) {
      if(isPrime(counter)) {
        primes.push(counter);
      }
      counter++;
    }
    return primes[num - 1];
  }
  
  findPrime(10001);
  
  