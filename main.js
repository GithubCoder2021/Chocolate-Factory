var clicks = 0;

function clicksClick(number){
    clicks = clicks + number;
    document.getElementById("clicks").innerHTML = clicks;
};

var cursors = 0;

function buyCursor(){
    var cursorCost = Math.floor(10 * Math.pow(1.1,cursors));     //works out the cost of this cursor
    if(clicks >= cursorCost){                                   //checks that the player can afford the cursor
        cursors = cursors + 1;                                   //increases number of cursors
    	clicks = clicks - cursorCost;                          //removes the cookies spent
        document.getElementById('cursors').innerHTML = cursors;  //updates the number of cursors for the user
        document.getElementById('clicks').innerHTML = clicks;  //updates the number of cookies for the user
    };
    var nextCost = Math.floor(10 * Math.pow(1.2,cursors));       //works out the cost of the next cursor
    document.getElementById('cursorCost').innerHTML = nextCost;  //updates the cursor cost for the user
};

window.setInterval(function(){
	
	clicksClick(cursors);
	
}, 1000);

var farms = 0;

function buyFarm(){
    var farmCost = Math.floor(10 * Math.pow(1.3,farms));     
    if(clicks >= farmCost){                                  
        farms = farms + 1;                                
    	clicks = clicks - farmCost;                          
        document.getElementById('farms').innerHTML = farms; 
        document.getElementById('cookies').innerHTML = clicks;  
    };
    var nextCost = Math.floor(10 * Math.pow(1.3,farms));       
    document.getElementById('farmCost').innerHTML = nextCost;  
};

window.setInterval(function(){
	
	clicksClick(farms);
	
}, 1000);
