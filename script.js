var score = 0;
function add() {
  score++
  //We are using the document.getElementById('').innerHTML method
  document.getElementById("score").innerHTML = "Score: " + score; 
  //updates the score every time the button is clicked
}
