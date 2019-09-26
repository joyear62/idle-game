var section = new Section();
var text = new Text();
section.add(text);
section.addBorder();

var score = 0; // Creates a variable to store the score in
var title = new Title('Ice Cream Enterprise'); // Creates a title element
var button = new Button('Make and Sell Ice Cream' , btnPress);   // Create a button element
var hidden = new Button('Get Higher Quality Ice Cream', btnPress);
hidden.hide();
var scr = new Text(score);                    // Creates a text element
//changes
setInterval(btnPress, 1000);   // Sets up a loop

function btnPress() {
  score++;         // Increases the score
  scr.edit(score); // Updates the page with the new score
  if(score > 99) {
    hidden.show(); // Shows the button
  } else {
    if(score < 100) 
    hidden.hide()  // Hides the button
  }
}