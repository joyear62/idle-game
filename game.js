var score = 0; // Create a variable to store the score in

var title = new Title('Ice Cream Enterprise'); // Create a title element
var button = new Button('Make and Sell Ice Cream' , btnPress);   // Create a button element
var hidden = new Button('Get Higher Quality Ice Cream', btnPress1);
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

function btnPress1() { 
  if(btnPress1 = True) {
  score - 100;
  scr.edit(score);
  }
}