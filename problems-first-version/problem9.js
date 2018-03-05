// a^2 + b^2 = c^2
// a+b+c = 1000 

// c = 1000-b-a
// c = 1000-(a+b)

// a^2 + b^2 = (1000 - (a+b))^2
// a^2 + b^2 = 1000^2 - 2*1000*(a+b) + (a+b)^2
// a^2 + b^2 = 1000^2 - 2000a - 2000b + a^2 + 2ab + b^2
// 0 = 1000000 - 2000a - 2000b + 2ab
// 0 = 500000 - 1000a - 1000b + ab
// 0 = 1000*(500-a)  - b*(1000-a)
// b = (1000*(500-a)) / (1000-a)
// a,b,c must be positive integers ->
// need to find number a that (1000*(500-a)) % (1000-a) === 0


function findABC() {
	a = findA();
	b = findB(a);
	c = findC(a,b);
	return a * b * c;
  }
  
  function findA(){
	let a = 1;
	for (var i = 1; i < 500; i ++) {
	  if (1000 * (500 - i) % (1000 - i) === 0) {
		a = i;
		break;
	  }
	}
	return a;
  }
  
  function findB(a) {
	let b = 1000 * (500 - a) / (1000 - a);
	return b;
  }
  
  function findC(a,b) {
	let c = 1000 - b - a;
	return c;
  }
  
  
  findABC();