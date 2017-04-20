function smallestMultiple(max) {
  var n = max;
  var counter = 0;
  var evenlyDivided = true;
  
  while (evenlyDivided) {
    for (var i=1; i<=max; i++) {
      if(n%i===0) {
      counter += 1;
        if(counter===max) {
          evenlyDivided = false;
        }
      }
      else {
        counter=0;
        n++;
      }
    }
  }
  return n;
}
smallestMultiple(10);
