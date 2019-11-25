let totalSum = 0;
let totalBox = document.getElementById("baddies__total");

function getTotal(formName, inputName) {
	let baddyFormName = document.getElementById(formName);
	baddyFormName.addEventListener("submit", function(e) {
		e.preventDefault();
		let input = parseInt(baddyFormName[inputName].value);
		totalSum = totalSum + input * 11;
		totalBox.textContent = totalSum;
		baddyFormName[inputName].value = "";
	});
}
getTotal("goombasForm", "goombas");
getTotal("bobombsForm", "bobombs");
getTotal("cheepscheepsForm", "cheepscheeps");

// let goombasForm = document.getElementById("goombasForm");
// goombasForm.addEventListener("submit", function(e) {
// 	e.preventDefault();
// 	let input = parseInt(goombasForm.goombas.value);
// 	totalSum = totalSum + input * 5;
// 	totalBox.textContent = totalSum;
// 	goombasForm.goombas.value = "";
// });

// let bobombsForm = document.getElementById("bobombsForm");
// bobombsForm.addEventListener("submit", function(e) {
// 	e.preventDefault();
// 	let input = parseInt(bobombsForm.bobombs.value);
// 	totalSum = totalSum + input * 7;
// 	totalBox.textContent = totalSum;
// 	bobombsForm.bobombs.value = "";
// });

// let cheepscheepsForm = document.getElementById("cheepscheepsForm");
// cheepscheepsForm.addEventListener("submit", function(e) {
// 	e.preventDefault();
// 	let input = parseInt(cheepscheepsForm.cheepscheeps.value);
// 	totalSum = totalSum + input * 11;
// 	totalBox.textContent = totalSum;
// 	cheepscheepsForm.cheepscheeps.value = "";
// });
