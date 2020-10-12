import "./styles.css";

function playerSays(pick) {
  const computerPick = computerPlay();
  document.getElementById(
    "computer"
  ).innerText = `Computer says: ${computerPick}`;
  document.getElementById("player").innerText = `Player says: ${pick}`;
  const game = playRound(computerPick, pick);
  document.getElementById("result").innerText = `${game}`;
}

function computerPlay() {
  const rollDice = Math.floor(Math.random() * Math.floor(2));
  let play;
  switch (rollDice) {
    case 0:
      play = "rock";
      break;
    case 1:
      play = "paper";
      break;
    case 2:
      play = "scissors";
      break;
    default:
      play = "pass";
  }
  return play;
}

function playRound(computerSelection, playerSelection) {
  const playerInput = playerSelection.toLowerCase();
  let result;
  if (computerSelection === "paper") {
    if (playerInput === "rock") {
      result = "Computer wins! Paper beats rock!";
    }
    if (playerInput === "scissors") {
      result = "Player wins! Scissors beat paper!";
    }
    if (playerInput === "paper") {
      result = "Draw! Paper & paper";
    }
  }
  if (computerSelection === "scissors") {
    if (playerInput === "rock") {
      result = "Player wins! Rock beats scissors!";
    }
    if (playerInput === "scissors") {
      result = "Draw! Scissors & scissors";
    }
    if (playerInput === "paper") {
      result = "Computer wins! Scissors beat paper!";
    }
  }
  if (computerSelection === "rock") {
    if (playerInput === "rock") {
      result = "Draw! Rock & rock!";
    }
    if (playerInput === "scissors") {
      result = "Computer wins! Rock beats scissors!";
    }
    if (playerInput === "paper") {
      result = "Player wins! Paper beats rock!";
    }
  }
  return result;
}

document.getElementById("app").innerHTML = `
<p id="computer">Computer says:</p>
<p id="player">Player says:</p>
<p id="result">Result:</p></br>
<p>Press a button to play: <button id="rock">Rock</button> <button id="paper">Paper</button> <button id="scissors">Scissors</button></p>
`;

const rock = document.getElementById("rock");
rock.onclick = () => playerSays("rock");

const paper = document.getElementById("paper");
paper.onclick = () => playerSays("paper");

const scissors = document.getElementById("scissors");
scissors.onclick = () => playerSays("scissors");
