let gameActive = true;
let hasStar = false;

class Player {
	constructor(name, totalCoins, status, hasStar, gameActive) {
		this.name = name;
		this.totalCoins = totalCoins;
		this.status = status;
		this.hasStar = hasStar;
		this.gameActive = gameActive;
	}

	setName(namePicked) {
		if (namePicked === "Mario") {
			this.name = "Mario";
		} else {
			this.name = "Luigi";
		}
	}

	gotHit() {
		if (this.status === "Small") {
			this.status = "Dead";
			this.gameActive = false;
		} else if (this.status = "Big") {
			this.status = "Small";
		} else if (this.status === "Powered Up") {
			this.status = "Big";
		}
	}

	gotPowerup() {
		if (this.status === "Small") {
			this.status = "Big";
		} else if (this.status === "Big") {
			this.status = "Powered Up";
		} else if (this.status === "Powered Up") {
            this.hasStar = true;
            console.log("You have a star!")
		}
	}

	addCoin() {
		this.totalCoins += 1;
	}

	print() {
		console.log(
			`
            Name: ${this.name}
            Status: ${this.status}
            Total coins: ${this.totalCoins}
		
			`
		);
	}
}

function generateRandomNumber(number) {
	return Math.floor(Math.random() * number);
}



const player = new Player("Ali", 0, "Powered up", false, true);



const gameLoop = setInterval(() => {
	const random = generateRandomNumber(3);
	if (random === 0) {
		player.gotHit();
	} else if (random === 1) {
		player.gotPowerup();
	} else {
		player.addCoin();
	}
	player.setName()
	player.print();
	if (player.gameActive === false) {
		clearInterval(gameLoop);
	}
}, 1000);
