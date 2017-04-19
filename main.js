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
	for(var i = 1; i< max; i++){
		if(i % 3 === 0 || i % 5 === 0){
			sum += i;
		}
	}
	return sum;
}

