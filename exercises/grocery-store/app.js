var shopper = {
	name: "fruits",
	quantity: 10,
	isOrganic: true,
	buyList: function() {
		return this.name + " " + this.quantity;
	},
	groceryCart: ["banana", "apple", "orange"]
};

console.log(shopper.buyList());
