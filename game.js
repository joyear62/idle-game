var score = 0; // Create a variable to store the score in

var title = new Title('Idle Game'); // Create a title element

var button = new Button('Press', btnPress);         // Create a button element

function intervalDecrease() {
if(score > 99) {
var button1 = new Button1('I am a button'); // Create a button element and place it on the screen
  }
}

var scr = new Text(score);                     // Create a text element

setInterval(btnPress, 1000);   // Set up a loop

function btnPress() {
  score++;         // Increase the score
  scr.edit(score); // Update the page with the new score
}