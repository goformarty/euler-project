// PROBLEM 1: DOM
var btn1 = document.getElementById("btn1");
btn1.onclick = function() {
	document.getElementById("answer1").innerHTML = problem1();
};

// PROBLEM 1: FUNCTION
function problem1() {
	var max = document.getElementById('input1').value;
	var sum = 0;
	if (max === "") {
		return "Uoh-ooh, you forgot to specify a number!";
	}
	if(max > 10000) {
		return "Please specify a number between 0-10000";
	}
	for(var i = 1; i< max; i++){
		if(i % 3 === 0 || i % 5 === 0){
			sum += i;
		}
	}
	return sum;
}

// PROBLEM 2: DOM
var btn2 = document.getElementById("btn2");
btn2.onclick = function() {
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
	if(max > 5000000) {
		return "Please specify a number between 0-5000000";
	}
	for (sum=0; sum<max; sum=x+y) {
		if (sum%2 === 0) {
			total += sum;
		}
		x=y;
		y=sum;
	}
	return total;
}


// PROBLEM 3: DOM
var btn3 = document.getElementById("btn3");
btn3.onclick = function() {
	document.getElementById("answer3").innerHTML = problem3();
};

// PROBLEM 3: FUNCTION
function problem3() {
	var max = document.getElementById('input3').value;
	if (max === "") {
		return "Uoh-ooh, you forgot to specify a number!";
	}
	if(max > 5000000) {
		return "Please specify a number between 0-5000000";
	}
	for (var i=2; i<=max; i++) {
		if (!(max % i)) {
			max /= i;
			i--;
		}
	}
	return i;
}

// PROBLEM 4: DOM
var btn4 = document.getElementById("btn4");
btn4.onclick = function() {
	document.getElementById("answer4").innerHTML = problem4();
};

// PROBLEM 4: FUNCTION
function problem4() {
	var max = document.getElementById('input4').value;

	// function to get the number range
	var a = function(max) {
		var digits = [];
		for (var i = 0; i<max; i++) {
			digits.push(9);
		}
		return [Number(digits.join('')), Number(digits.slice(0, -1).join(''))];
	};
	var b = a;

	var palindromeArray = [];
	if (max === "") {
		return "Uoh-ooh, you forgot to specify both numbers!";
	}
	if(max > 10) {
		return "Please specify numbers between 0-10";
	}
	for (var x=a[0]; x>a[1]; x--) {
		for (var y = b[0]; y>b[1]; y--) {
			var multiply = x * y;
			var stringMultiply = multiply.toString();
			var reversedMultiply = reverseString(stringMultiply);
			if (reversedMultiply === stringMultiply) {
				palindromeArray.push(multiply);
			}
		}
	}
	return Math.max.apply(null, palindromeArray);
}