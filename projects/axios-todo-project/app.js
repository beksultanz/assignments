const toDoList = document.getElementById("todo-list");
const todoForm = document.addForm;

// GET's THE TODO's FROM THE DATABASE

axios.get("https://api.vschool.io/Beksultan/todo")
	.then(response => {
		const todos = response.data;
		for (let i = 0; i < todos.length; i++) {
			listData(todos[i]);
		}
	})

	.catch(err => console.log(err));

//FORM FOR THE POST REQUEST 

todoForm.addEventListener("submit", function(event) {
	event.preventDefault();

	const newTodo = {
		title: addForm.title.value,
		description: addForm.description.value,
		price: addForm.price.value,
		imgUrl: addForm.url.value
	};

	addForm.reset()

	axios.post("https://api.vschool.io/Beksultan/todo", newTodo)
		.then(response => {
			listData(response.data);
		})
		.catch(error => console.log(error));
});

//LISTS THE TODO's TO THE DOM

function listData(todo) {
	const container = document.createElement("div");
	container.classList.add("container");
	const h1 = document.createElement("h1");
	const h2 = document.createElement("h2");
	const h3 = document.createElement("h3");
	const img = document.createElement("img");
	const checkBox = document.createElement("input");
	checkBox.className = "checkbox";
	const deleteBtn = document.createElement("button");
	h1.textContent = todo.title;
	if (todo.completed) {
		h1.style.textDecoration = "line-through";
	}

	checkBox.type = "checkbox";
	checkBox.checked = todo.completed;
	h2.textContent = todo.description;
	h3.textContent = todo.price;
	img.src = todo.imgUrl;
	deleteBtn.textContent = "Delete";

	checkBox.addEventListener("change", e => {
		axios.put("https://api.vschool.io/Beksultan/todo/" + todo._id, {completed: e.target.checked})
        .then(response => {
		    h1.style.textDecoration = response.data.completed ?  "line-through": "none";
			});
	});

	deleteBtn.addEventListener("click", e => {
		axios.delete("https://api.vschool.io/Beksultan/todo/" + todo._id).then(response => {
				container.remove();
			})

			.catch(error => console.log(error));
	});

	//APPEND 
	
	container.appendChild(h1);
	container.appendChild(h2);
	container.appendChild(h3);
	container.appendChild(img);
	container.appendChild(checkBox);
	container.appendChild(deleteBtn);
	toDoList.appendChild(container);
}
