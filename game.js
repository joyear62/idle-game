var section = new Section();
var text = new Text();
section.add(text);
section.addBorder();

var upgrade = 1;
var score = 0; // Creates a variable to store the score in
var title = new Title('Ice Cream Enterprise'); // Creates a title element
var button = new Button('Make and Sell Ice Cream' , btnPress);   // Create a button element
var hidden = new Button('Upgrade', upgradeClick);
hidden.hide();
var scr = new Text(score);                    // Creates a text element
//changes
setInterval(btnPress, 1000);   // Sets up a loop

function btnPress() {
  score = score + upgrade;         // Increases the score
  scr.edit(score); // Updates the page with the new score
  if(score > 249) {
    hidden.show(); // Shows the button
  } else {
    if(score < 250) 
    hidden.hide()  // Hides the button
  }
}

function upgradeClick() {  // Upgrades btnPress
  score = score - 250;
  upgrade = upgrade + 5;  // Increases upgrade by 5
  scr.edit(score);  // Updates the page with the new score
}

// WORK IN PROGRESS!!!!

// function endGame() {
//   if(score < 0) {
//     clearInterval
//   }
// }