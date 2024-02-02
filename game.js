const Player = document.querySelector(".player-moves");
const Computer = document.querySelector(".computer-moves");
const Result = document.querySelector(".result");
const PlayerScoreDisplay = document.querySelector("#playerScoreDisplay");
const ComputerScoreDisplay = document.querySelector("#computerScoreDisplay");
const Reset = document.querySelector("#reset");
let PlayerScore = 0;
let ComputerScore = 0;
const choices = ["rock", "paper", "sissor"];

function playgame(playerChoice) {
  const Computerchoices = choices[Math.floor(Math.random() * 3)];
  let result = "";

  if (playerChoice === Computerchoices) {
    result = "IT'S A TIE!";
  } else {
    switch (playerChoice) {
      case "rock":
        result = Computerchoices === "sissor" ? "YOU WIN!" : "YOU LOSE!";
        break;

      case "paper":
        result = Computerchoices === "rock" ? "YOU WIN!" : "YOU LOSE!";
        break;

      case "sissor":
        result = Computerchoices === "paper" ? "YOU WIN!" : "YOU LOSE!";
        break;
    }
  }
  Player.textContent = `Player:${playerChoice}`;
  Computer.textContent = `Computer:${Computerchoices}`;
  Result.textContent = result;
  


  Result.classList.remove("greenText", "redText")
  switch (result) {
    case "YOU WIN!":
        Result.classList.add("greenText");
      PlayerScore++;
      PlayerScoreDisplay.textContent = `Player Score : ${PlayerScore}`;
      break;
    case "YOU LOSE!":
        Result.classList.add("redText");
      ComputerScore++;
      ComputerScoreDisplay.textContent = `Computer Score : ${ComputerScore}`;
      break;
  }
}


