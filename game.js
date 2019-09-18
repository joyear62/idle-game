var score = 0;

postToPage(score);

createButton('Button', btnPress);
createButton('Button', btnPress);
changeTitle('Clicker Game');

function btnPress() {
  score++;
  postToPage(score);
}