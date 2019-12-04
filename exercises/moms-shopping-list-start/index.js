let list = document.getElementById("list");

//creating a li within UL
//creating a div within li
//creating two buttons within li

addItem.addEventListener("submit", function(e) {
	e.preventDefault();

	//creating new elements
	let newList = document.createElement("li");
	let newDiv = document.createElement("div");
	let editBtn = document.createElement("button");
	let deleteBtn = document.createElement("button");

	//adding text and class to buttons
	editBtn.innerText = "Edit";
	deleteBtn.innerText = "X";
	deleteBtn.className = "delete-button";

	let input = addItem.title.value;
	newDiv.innerText = input;
	addItem.title.value = "";

	//appending new elements
	list.appendChild(newList);
	newList.appendChild(newDiv);
	newList.appendChild(editBtn);
	newList.appendChild(deleteBtn);

	//selecting delete buttons
	let buttons = list.querySelectorAll("button");

	buttons.forEach(function(deleteButton) {
		if (deleteButton.textContent.includes("X")) {
			deleteButton.className = "delete-button";
		}
		deleteButton.addEventListener("click", function(e) {
			e.target.parentNode.remove();
		});
	});
});
