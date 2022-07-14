var chocolates = 0;
var chocoPerSecond = 0;
var chocoPerClick = 1;

function increment() {
	chocolates += chocoPerClick; // adds the number of chocolates per click to your total books
	document.getElementById("showChocolates").innerText = chocolates
}
