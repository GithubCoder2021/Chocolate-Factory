var chocolates = 0;

function clicksClick(number){
    chocolates = chocolates + number;
    document.getElementById("chocolates").innerHTML = chocolates;
};

var cursors = 0;

function buyCursor(){
    var cursorCost = Math.floor(10 * Math.pow(1.1,cursors));     //works out the cost of this cursor
    if(chocolates >= cursorCost){                                   //checks that the player can afford the cursor
        cursors = cursors + 1;                                   //increases number of cursors
    	chocolates = chocolates - cursorCost;                          //removes the chocolates spent
        document.getElementById('cursors').innerHTML = cursors;     //updates the number of cursors for the user
	document.getElementById('chocolates').innerHTML = chocolates 
    };
    var nextCost = Math.floor(10 * Math.pow(1.1,cursors));       //works out the cost of the next cursor
    document.getElementById('cursorCost').innerHTML = nextCost;  //updates the cursor cost for the user
};

window.setInterval(function(){
	
	chocolatesClick(cursors);
	
}, 1000);

var farms = 0;

function buyCursor(){
    var farmCost = Math.floor(10 * Math.pow(1.5,farms));     //works out the cost of this cursor
    if(chocolates >= farmCost){                                   //checks that the player can afford the cursor
        farms = farms + 1;                                   //increases number of farms
    	chocolates = chocolates - farmCost;                          //removes the chocolates spent
        document.getElementById('farms').innerHTML = farms;  //updates the number of farms for the user
        document.getElementById('chocolates').innerHTML = chocolates;  //updates the number of cookies for the user
    };
    var nextCost = Math.floor(10 * Math.pow(1.1,farms));       //works out the cost of the next farm
    document.getElementById('farmCost').innerHTML = nextCost;  //updates the farm cost for the user
};

window.setInterval(function(){
	
	chocolatesClick(farms);
	
}, 1000);
