let travelForm = document.getElementById("travelForm");

travelForm.addEventListener("submit", function(event) {
	event.preventDefault();
	let firstName = travelForm.firstName.value;
	let lastName = travelForm.lastName.value;
	let age = travelForm.age.value;
	let gender = travelForm.gender.value;
	let kosher = travelForm.diet.value;
	// let halal = travelForm.diet.value;
	// let lactoseFree = travelForm.diet.value;

	alert(
		`
        First name: ${firstName} \n
        Last name:  ${lastName} \n
        Age: ${age} \n
        Gender: ${gender} \n
        Dietery Restrictions: ${kosher} 
        `
	);
});
