let sum = document.getElementById("addition");
console.log(addForm);

addForm.addEventListener("submit", function(e) {
	// It prevents browser from refreshing
	e.preventDefault();

	// It gets input values
	// - addForm selects the whole form
	// addForm.addNum1 select the whole input element
	// addForm.addNum1.value, finally gets the value from selected input element.
	let input1 = parseInt(addForm.addNum1.value);
	let input2 = parseInt(addForm.addNum2.value);

	// It creates new DIV element. But, it does not render(show) in DOM(browser)
	let sumResult = document.createElement("div");

	// It add class result to newly created DIV element
	sumResult.className = "result";

	// Untill now, we have DIV with class name Result. But our DIV is empty. So, we need to insert value into it. For use value is the result of adding two input values.
	// So, .textContent adds text to DIV
	sumResult.textContent = input1 + input2;

	// So, we have div, we have class name, we have value in it. But this does not show in browser yet.

	// This adds this new created DIV into DOM to show in browser
	sum.appendChild(sumResult);
});

let substract = document.getElementById("subtraction");

subtractForm.addEventListener("submit", function(e) {
	e.preventDefault();
	let input3 = parseInt(subtractForm.subtractNum1.value);
	let input4 = parseInt(subtractForm.subtractNum2.value);
	let subResult = document.createElement("div");
	subResult.className = "subResult";

	subResult.textContent = input3 - input4;
	subtraction.appendChild(subResult);
});

let multiply = document.getElementById("multiplication");

multiplyForm.addEventListener("submit", function(e) {
	e.preventDefault();
	let input5 = parseInt(multiplyForm.num1.value);
	let input6 = parseInt(multiplyForm.num2.value);
	let multResult = document.createElement("div");
	multResult.className = "multResult";

	multResult.textContent = input5 * input6;
	multiply.appendChild(multResult);
});
