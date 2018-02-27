// PROBLEM 1: DOM
var btn1 = document.getElementById("btn1");
btn1.onclick = function () {
	document.getElementById("answer1").innerHTML = problem1();
};

// PROBLEM 1: FUNCTION
function problem1() {
	var max = document.getElementById('input1').value;
	var sum = 0;
	if (max === "") {
		return "Uoh-ooh, you forgot to specify a number!";
	}
	if (max > 10000) {
		return "Please specify a number between 0-10000";
	}
	for (var i = 1; i < max; i++) {
		if (i % 3 === 0 || i % 5 === 0) {
			sum += i;
		}
	}
	return sum;
}

// PROBLEM 2: DOM
var btn2 = document.getElementById("btn2");
btn2.onclick = function () {
	document.getElementById("answer2").innerHTML = problem2();
};

// PROBLEM 2: FUNCTION
function problem2() {
	var max = document.getElementById('input2').value;
	var x = 0;
	var y = 1;
	var sum;
	var total = 0;
	if (max === "") {
		return "Uoh-ooh, you forgot to specify a number!";
	}
	if (max > 5000000) {
		return "Please specify a number between 0-5000000";
	}
	for (sum = 0; sum < max; sum = x + y) {
		if (sum % 2 === 0) {
			total += sum;
		}
		x = y;
		y = sum;
	}
	return total;
}


// PROBLEM 3: DOM
var btn3 = document.getElementById("btn3");
btn3.onclick = function () {
	document.getElementById("answer3").innerHTML = problem3();
};

// PROBLEM 3: FUNCTION
function problem3() {
	var max = document.getElementById('input3').value;
	if (max === "") {
		return "Uoh-ooh, you forgot to specify a number!";
	}
	if (max > 5000000) {
		return "Please specify a number between 0-5000000";
	}
	for (var i = 2; i <= max; i++) {
		if (!(max % i)) {
			max /= i;
			i--;
		}
	}
	return i;
}

// PROBLEM 4: DOM
var btn4 = document.getElementById("btn4");
btn4.onclick = function () {
	document.getElementById("answer4").innerHTML = problem4();
};

// PROBLEM 4: FUNCTION
function problem4() {
	var max = document.getElementById('input4').value;
	if (max === "") {
		return "Uoh-ooh, you forgot to specify both numbers!";
	}
	if (max > 5) {
		return "Please specify a number between 0-5";
	}
	var i, n, m, d, inf, sup, limit, number = 0;
	for (i = 1; i < max; i += 1) {
		number = 10 * number + 9;
	}
	inf = number;
	sup = 10 * number + 9;

	function isPalindromic(n) {
		var p = 0,
			q = n,
			r;
		while (n > 0) {
			r = n % 10;
			p = 10 * p + r;
			n = Math.floor(n / 10);
		}
		return p === q;
	}

	for (n = sup * sup, m = inf * inf; n > m; n -= 1) {
		if (isPalindromic(n)) {
			limit = Math.ceil(Math.sqrt(n));
			d = sup;
			while (d >= limit) {
				if (n % d === 0 && n / d > inf) {
					return n;
				}
				d -= 1;
			}
		}
	}
	return NaN;
}

// PROBLEM 5: DOM
var btn5 = document.getElementById("btn5");
btn5.onclick = function () {
	document.getElementById("answer5").innerHTML = problem5();
};

// PROBLEM 5: FUNCTION
function problem5() {
	var max = document.getElementById('input5').value;
	if (max === "") {
		return "Uoh-ooh, you forgot to specify a number!";
	}
	if (max > 100) {
		return "Please specify a number between 0-100";
	}


	var i, n = 1;

	function largestPower(n, max) {
		var p, e = 2,
			largest = n;
		while ((p = Math.pow(n, e)) <= max) {
			largest = p;
			e += 1;
		}
		return largest;
	}

	function isPrime(n) {
		var i, max = Math.ceil(Math.sqrt(n));
		// since the main loop generates odd numbers only
		// we can start testing primality dividing by 3
		for (i = 3; i <= max; i += 2) {
			if (n % i === 0) {
				return false;
			}
		}
		return true;
	}

	for (i = 3; i <= max; i += 2) {
		if (isPrime(i)) {
			n *= largestPower(i, max);
		}
	}

	return n * largestPower(2, max);
}

// PROBLEM 6: DOM
var btn6 = document.getElementById("btn6");
btn6.onclick = function () {
	document.getElementById("answer6").innerHTML = problem6();
};

// PROBLEM 6: FUNCTION
function problem6() {
	var max = document.getElementById('input6').value;
	if (max === "") {
		return "Uoh-ooh, you forgot to specify a number!";
	}
	if (max > 200) {
		return "Please specify a number between 0-200";
	}

	function squareSum(max) {
		var i, s = 1,
			e = Math.log(max) / Math.LN10;
		// special case: max is a power of 10
		if (e - (e << 0) === 0) {
			s = max * (max >> 1) + (max >> 1);
		} else {
			for (i = 2; i <= max; i += 1) {
				s += i;
			}
		}
		return s * s;
	}

	function sumSquare(max) {
		var i, s = 1;
		for (i = 2; i <= max; i += 1) {
			s += i * i;
		}
		return s;
	}

	return squareSum(max) - sumSquare(max);
}
// PROBLEM 7: DOM
var btn7 = document.getElementById("btn7");
btn7.onclick = function () {
	document.getElementById("answer7").innerHTML = problem7();
}

// PROBLEM 6: FUNCTION
function problem7() {

	var num = document.getElementById('input7').value;
	var primes = [];
	var counter = 2;

	while (primes.length < num) {
		if (isPrime(counter)) {
			primes.push(counter);
		}
		counter++;
	}
	return primes[num - 1];

	function isPrime(num) {
		if (num < 2) {
			return false;
		}

		for (var i = 2; i <= num / 2; i++) {
			if (num % i === 0) {
				return false;
			}
		}
		return true;
	}
}