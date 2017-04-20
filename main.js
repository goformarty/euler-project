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
	var array = [];
	if (max === "") {
		return "Uoh-ooh, you forgot to specify a number!";
	}
	if(max > 5000000) {
		return "Please specify a number between 0-5000000";
	}
	for (sum=0; sum<max; sum=x+y) {
		if (sum%2 === 0) {
			total += sum;
			array.push(sum);
		}
		x=y;
		y=sum;
	}
	return total;
}


