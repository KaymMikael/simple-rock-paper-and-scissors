const score = {
  wins: 0,
  losses: 0,
  ties: 0,
};

function pickComputerMove() {
  const randomNum = Math.random();
  let computerMove = "";

  if (randomNum >= 0 && randomNum < 1 / 3) {
    computerMove = "Rock";
  } else if (randomNum >= 1 / 3 && randomNum < 2 / 3) {
    computerMove = "Paper";
  } else if (randomNum >= 2 / 3 && randomNum < 1) {
    computerMove = "Scissors";
  }
  return computerMove;
}

function playGame(playerChoice) {
  const computerMove = pickComputerMove();
  let result = "";
  if (playerChoice === "Rock") {
    if (computerMove === "Rock") {
      result = "Tie.";
      score.ties += 1;
    } else if (computerMove === "Paper") {
      result = "You lose.";
      score.losses += 1;
    } else if (computerMove === "Scissors") {
      result = "You win.";
      score.wins += 1;
    }
  } else if (playerChoice === "Paper") {
    if (computerMove === "Rock") {
      result = "You win.";
      score.wins += 1;
    } else if (computerMove === "Paper") {
      result = "Tie.";
      score.ties += 1;
    } else if (computerMove === "Scissors") {
      result = "You lose.";
      score.losses += 1;
    }
  } else if (playerChoice === "Scissors") {
    if (computerMove === "Rock") {
      result = "You lose.";
      score.losses += 1;
    } else if (computerMove === "Paper") {
      result = "You win.";
      score.wins += 1;
    } else if (computerMove === "Scissors") {
      result = "Tie.";
      score.ties += 1;
    }
  }
  alert(`You choose ${playerChoice}. Computer choose ${computerMove}. ${result}
Wins: ${score.wins}. Losses: ${score.losses}. Ties ${score.ties}`);
}

function resetScore() {
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;
  alert('Score has been reset')
}
