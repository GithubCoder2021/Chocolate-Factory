var chocolates = 0;
var chocoPerSecond = 0;
var chocoPerClick = 1;

function increment() {
	chocolates += chocoPerClick; // adds the number of chocolates per click to your total books
	document.getElementById("showChocolates").innerText = chocolates
}
var workers = 0;
var workersCost = 25;
var cursors = 0;
var cursorsCost = 0;

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

function buyCursor() {
   
 if (chocolates >= cursorsCost) { 
		
		chocolates -= cursorsCost; 

		document.getElementById("showChocolates").innerText = chocolates; 

		cursors++;

		document.getElementById("cursorsNum").innerText = cursors;
	 
	        cursorsCost *=3; 

	        document.getElementById("cursorsCost").innerText = cursorsCost;

	        chocoPerClick *= 2; 

	        document.getElementById("showChocolatesPerClick").innerText = chocoPerClick;	

	}	else { 
		alert("Get more Chocolates!") 
	}
}
