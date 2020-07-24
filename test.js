//scoreboard
let pScore = 0;
let cScore = 0;
function updateScore() {
  const playerScore = document.querySelector(".playerScore");
  const computerScore = document.querySelector(".computerScore");
  playerScore.textContent = pScore;
  computerScore.textContent = cScore;
}

//Implement player selection with buttons

function playRound() {
  const buttons = document.querySelectorAll(".buttonContainer button");
  const computerOptions = ["Rock", "Paper", "Scissors"];

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      //computer choice
      const computerNumber = Math.floor(Math.random() * 3);
      computerSelection = computerOptions[computerNumber];

      //call compare hands her;
      compareHands(this.textContent, computerSelection);

      //call score counter;
    });
  });
}

const compareHands = (playerSelection, computerSelection) => {
  const winner = document.querySelector(".winner");

  if (playerSelection == computerSelection) {
    winner.textContent = "It's a tie!";
  } else if (playerSelection == "Paper" && computerSelection == "Rock") {
    winner.textContent = "You win! Paper beats rock!";
    pScore++;
    updateScore();
  } else if (playerSelection == "Rock" && computerSelection == "Paper") {
    winner.textContent = "I win! Paper beats rock!";
    cScore++;
    updateScore();
  } else if (playerSelection == "Rock" && computerSelection == "Scissors") {
    winner.textContent = "You win! Rock beats scissors!";
    pScore++;
    updateScore();
  } else if (playerSelection == "Scissors" && computerSelection == "Rock") {
    winner.textContent = "I win! Rock beats scissors!";
    cScore++;
    updateScore();
  } else if (playerSelection == "Scissors" && computerSelection == "Paper") {
    winner.textContent = "You win! Scissors beats paper!";
    pScore++;
    updateScore();
  } else if (playerSelection == "Paper" && computerSelection == "Scissors") {
    winner.textContent = "I win! Scissors beats paper!";
    cScore++;
    updateScore();
  } else {
    winner.textContent = "You have to pick rock, paper, or scissors!";
  }

  //Ends the game after round 5
  if (pScore == 5) {
    winner.textContent = "Game Over! You win!";
    let buttons = document.querySelector(".buttonContainer");
    buttons.classList.add("gameOver");
    return;
  } else if (cScore == 5) {
    winner.textContent = "Game Over! I win!";
    let buttons = document.querySelector(".buttonContainer");
    buttons.classList.add("gameOver");
    return;
  }
};

playRound();
