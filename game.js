// paper > rock > scissors
//paper = 2
//rock = 1
//scissors = 0

//This function allows a random number between 0-2 to be generated and then assigns the number to either rock, paper, or scissors
//I learned here that you can return a string
//Math.random * 3 gets a number from 0 - 2.99 and then Math.floor decreases it to an integer so we get a random number from 0-2!

function computerPlay() {
  function getNumber() {
    return Math.floor(Math.random() * 3);
  }
  if (getNumber() == 0) {
    return "scissors";
  } else if (getNumber() == 1) {
    return "rock";
  } else {
    return "paper";
  }
}
//This function plays a single round of rock paper scissors and then declares a winner

function playRound(playerSelection, computerSelection) {
  computerSelection = computerPlay();
  //Need to somehow change this so that it corresponds with button clicks

  if (playerSelection == computerSelection) {
    return "It's a tie!";
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    return "You win! Paper beats rock!";
  } else if (playerSelection == "rock" && computerSelection == "paper") {
    return "I win! Paper beats rock!";
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    return "You win! Rock beats scissors!";
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    return "I win! Rock beats scissors!";
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    return "You win! Scissors beats paper!";
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    return "I win! Scissors beats paper!";
  } else {
    return "You have to pick rock, paper, or scissors!";
  }
}
const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");

//need to somehow make playerSelection global!

rockButton.addEventListener("click", function (e) {
  let playerSelection = "rock";
  game();
});

paperButton.addEventListener("click", function (e) {
  let playerSelection = "paper";
  game();
});

scissorsButton.addEventListener("click", function (e) {
  let playerSelection = "scissors";
  game();
});

//This function takes the value from playRound and puts it in a variable. That variable is then used to check which result came out and increases either the play or the computer score count by 1 accordingly.
let playerCounter = 0;
let computerCounter = 0;
function game() {
  gameResult = playRound();

  if (
    gameResult == "You win! Paper beats rock!" ||
    gameResult == "You win! Rock beats scissors!" ||
    gameResult == "You win! Scissors beats paper!"
  ) {
    console.log(
      `${gameResult}. You have ${++playerCounter} points and I have ${computerCounter} points.`
    );
  } else if (
    gameResult == "I win! Paper beats rock!" ||
    gameResult == "I win! Rock beats scissors!" ||
    gameResult == "I win! Scissors beats paper!"
  ) {
    console.log(
      `${gameResult}. I have ${++computerCounter} points and you have ${playerCounter} points.`
    );
  } else {
    console.log(
      `${gameResult}. No points are given. I have ${computerCounter} points and you have ${playerCounter} points`
    );
  }
}
//Leave this here for now
