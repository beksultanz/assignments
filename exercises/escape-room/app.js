var question = require("readline-sync");

var options = ["Put your hands in hole", "Find the key,or", "Open the door"];

console.log(
	"\n\n\nImagine you're locked in a very dark room. It's scary and of course you desire to get out there immediately. You will find in that room a door and a hole on the wall\n\n\n"
);

var respond = question.keyInSelect(options, "Now you decide what to do:");

while (respond !== 1) {
	if (respond === 0) {
		console.log(
			"\n\n\nOooopsss... You'd better keep your hands with you. You almost died. Try another thing\n\n\n"
		);
		var respond = question.keyInSelect(options, "Now you decide what to do: ");
	}
	if (respond === 2) {
		console.log(
			"\n\n\nOooopsss... This door is locked and you will need to find a key first\n\n\n"
		);
		var respond = question.keyInSelect(options, "Now you decide what to do: ");
	}
	if (respond === -1) {
		console.log(
			"\n\n\nIf you decide to cheat... You will stay here forever\n\n\n"
		);
		var respond = question.keyInSelect(options, "Now you decide what to do: ");
	}
}

console.log(
	"\n\n\nWell Done. You have found a treasure, which will help you get out from here. Since you have a key make a last move\n\n\n"
);
options.splice(0, 2);
var respond = question.keyInSelect(options, "Now you decide what to do: ");

while (respond !== 0) {
	if (respond === -1)
		console.log("\n\n\nWrong door, you have one last chance\n\n\n");
	var respond = question.keyInSelect(options, "Now you decide what to do: ");
}

console.log("\n\n\nGreat Job. You did it. Congrats! Now go and eat sth\n\n\n");
