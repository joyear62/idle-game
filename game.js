var score = 1; // Create a variable to store the score in

postToPage(score);

createButton('Button', btnPress);
createButton('Button', btnPress);
changeTitle('Clicker Game');

function btnPress() {
  score++;
  postToPage(score);
}