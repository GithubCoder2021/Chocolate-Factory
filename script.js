var chocolates = 0;
var chocoPerSecond = 0;
var chocoPerClick = 1;

function increment() {
	chocolates += chocoPerClick; // adds the number of chocolates per click to your total books
	document.getElementById("showChocolates").innerText = chocolates
}
var workers = 0;
var workersCost = 25;

setInterval(function() {
  chocolates += chocoPerSecond;
	
  document.getElementById("showChocolates").innerText = chocolates;
}, 1000)
	
function buyWorker() {
   
 if (chocolates >= workersCost) { 
		
		chocolates -= workersCost; // subtracts cost apples 

		document.getElementById("showChocolates").innerText = chocolates; 

		workers++;

		document.getElementById("workersNum").innerText = workers;
	 
	        workersCost *=2; // doubles price of that item 

	document.getElementById("workersCost").innerText = workersCost;

	chocoPerSecond += 1; // increases number of apples per second

	document.getElementById("showChocolatesPerSecond").innerText = chocoPerSecond;	

	}	else { 
		alert("Get more Chocolates!") 
	}
}
