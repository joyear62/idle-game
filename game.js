var score = 0; // Create a variable to store the score in

var title = new Title('Ice Cream Enterprise'); // Create a title element
var button = new Button('Press', btnPress);   // Create a button element
var hidden = new Button('Press', btnPress);
hidden.hide();
var scr = new Text(score);                    // Create a text element
//changes
setInterval(btnPress, 1000);   // Set up a loop

function btnPress() {
  score++;         // Increase the score
  scr.edit(score); // Update the page with the new score
  if(score > 99) {
    hidden.show(); // Shows the button
  }
}
