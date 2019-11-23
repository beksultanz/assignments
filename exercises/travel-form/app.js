let travelForm = document.getElementById("travelForm");

travelForm.addEventListener("submit", function(event) {
	event.preventDefault();
	let firstName = travelForm.firstName.value;
	let lastName = travelForm.lastName.value;
	let age = travelForm.age.value;
	let gender = travelForm.gender.value;
	let kosherValue = "";
	// travelForm.kosher.checked && (kosherValue = travelForm.kosher.value);
	if (travelForm.kosher.checked) {
		kosherValue = travelForm.kosher.value;
	}

	let halalValue = "";
	if (travelForm.halal.checked) {
		halalValue = travelForm.halal.value;
	}

	let lactoseFreeValue = "";
	if (travelForm.lactoseFree.checked)
		lactoseFreeValue = travelForm.lactoseFree.value;

	alert(
		`First name: ${firstName} \n
         Last name:  ${lastName} \n
         Age: ${age} \n
         Gender: ${gender} \n
         Dietery Restrictions: ${kosherValue} ${halalValue} ${lactoseFreeValue}`
	);
});
