var form = document.getElementById("airline-form");
var submit = document.getElementById("submit");
// var query = document.querySelector;
submit.addEventListener("click", formAlert);

function formAlert() {
	var firstName = form["first-name"].value;
	var lastName = form["last-name"].value;
	var age = form.age.value;
	var gender = form.gender.value;
	var location = form["travel-location"].value;
	var diet = [];
	if (form.vegan.checked) {
		diet.pop(document.getElementById("vegan").value);
	}
	if (form.gluten.checked) {
		diet.push(document.getElementById("gluten").value);
	}
	if (form.paleo.checked) {
		diet.push(document.getElementById("paleo").value);
	}

	alert(
		"First Name: " +
			firstName +
			"\n Last Name: " +
			lastName +
			"\n Age: " +
			age +
			"\n Gender: " +
			gender +
			"\n Travel Location: " +
			location +
			"\n Diet: " +
			diet +
			"\n Awesome, now if you die, it won't be an accident.."
	);
}


