const readline = require("readline-sync");

// Constants
const userSelections = ["walk", "print"];
const fightOptions = ["attack", "run"];

const player = {
	name: "",
	health: 100,
	item: []
};

let print = player;

// It tracks game's status
let gameover = false;

// Enemy Constructor
const Enemy = function(name, health, item) {
	this.name = name;
	this.health = health;
	this.item = item;
};
const goblin = new Enemy("Goblin", 100, "arrow");
const vampire = new Enemy("Vampire", 100, "sword");
const monster = new Enemy("Monster", 100, "pen");

const enemies = [goblin, vampire, monster];

function restoreEnemies() {
	for (let i = 0; i < enemies.length; i++) {
		enemies[i].health = 100;
	}
}

//

function askUser() {
	const userChoice = readline.keyInSelect(
		fightOptions,
		"\tWhat would you like to do?: "
	);
	if (userChoice === 0) {
		attack();
	} else if (userChoice === 1) {
		run();
	}
}

/// GenerateRamdomChance

function generateRandomChance(chance) {
	return Math.floor(Math.random() * chance);
}

// function getRandompoints

function getRandomPoints(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

//// Game Functions /////

// function walk
function walk() {
	const randomNum = generateRandomChance(3);
	if (randomNum === 0) {
		console.log("\n\t\tYou get in a fight");
		printEnemy();
		askUser();
	} else {
		console.log("\n\t\tNothing happened");
	}
}

function printEnemy() {
	const randomEnemy = generateRandomChance(3);
	currentEnemy = enemies[randomEnemy];
	console.log(currentEnemy);
}

// Function attack

function attack() {
	const attackEnemy = generateRandomChance(2);
	if (attackEnemy === 0) {
		console.log("You hit the enemy and he is injured");
		const injureCost = getRandomPoints(10, 40);
		currentEnemy.health = currentEnemy.health - injureCost;
		player.health = player.health + injureCost;
		console.log("Your enemy has " + currentEnemy.health + " HPs");
		attackPlayer();

		if (currentEnemy.health <= 0) {
			console.log("\n\n\n CONGRATS! You have killed your enemy\n\n\n");
			restoreEnemies();
			return;
		}
	} else {
		console.log("You have a missed your shot");
		console.log("Your enemy's heath is " + currentEnemy.health + " Hps");
		attackPlayer();
	}

	askUser();
}

//Function attackPlayer

function attackPlayer() {
	const enemyAttack = generateRandomChance(2);
	if (enemyAttack === 0) {
		player.health = player.health - getRandomPoints(10, 40);
		console.log("Enemy hits back");
		console.log("Your health decreases to " + player.health + " Hps");

		if (player.health <= 0) {
			console.log("Enemy has killed you");
			gameover = true;
			console.log("\n\n\n GAME IS OVER\n\n\n\n");
			return;
		}
	} else {
		console.log("Your enemy hit, but you were protected");
		console.log("Your health is " + player.health + " HPs");
	}
	return;
}
// }

//Function run
function run() {
	const runOutcome = generateRandomChance(1);
	if (runOutcome === 0) {
		console.log("You've decided to run but enemy got you");
		attackPlayer();

		while (player.health > 0) {
			askUser();
		}
	} else {
		console.log("You were lucky enough to run away from enemy");
	}
}

//// Game Loop ////

function gameInit() {
	console.log("Hi, Welcome to the interactive RPG game of the century!");
	player.name = readline.question("What is your name?: ");
	console.log("Thank you " + player.name + "\n\n\n\n");

	while (!gameover) {
		const userChoice = readline.keyInSelect(
			userSelections,
			"\tWhat would you like to do?: "
		);
		if (userChoice === 0) {
			walk();
		} else if (userChoice === 1) {
			console.log(print);
		}
		if (userChoice === -1) {
			process.exit();
		}
	}
}

gameInit();
