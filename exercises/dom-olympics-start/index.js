// <h1></h1>
let h1 = document.createElement("h1");
let h2 = document.createElement("h2");

// <h1>JavaScript Made This!!</h1>
h1.textContent = "JavaScript Made This!!";

// <h1 class="header">JavaScript Made This!!</h1>
h1.className = "header";

h2.className = "sub-title";
h2.innerHTML = "<span>Sultan</span> wrote the JavsScript";

document.getElementById("header").appendChild(h1);

document.getElementById("header").appendChild(h2);
