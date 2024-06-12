const score = JSON.parse(localStorage.getItem("gameScore")) || {
  wins: 0,
  losses: 0,
  ties: 0,
};

updateScoreElement();

function updateScoreElement() {
  document.querySelector(
    ".js-score"
  ).innerHTML = `Wins: ${score.wins}. Losses: ${score.losses}. Ties ${score.ties}`;
}

function updateResultAndMoveElement(playerChoice, computerMove, result) {
  document.querySelector(".js-result").innerHTML = result;
  document.querySelector(
    ".js-move"
  ).innerHTML = `You <img src="images/${playerChoice}-emoji.png" alt="${playerChoice} emoji" class="move-icon"/> <img src="images/${computerMove}-emoji.png" alt="${computerMove} emoji" class="move-icon"/> Computer`;
}

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
    } else if (computerMove === "Paper") {
      result = "You lose.";
    } else if (computerMove === "Scissors") {
      result = "You win.";
    }
  } else if (playerChoice === "Paper") {
    if (computerMove === "Rock") {
      result = "You win.";
    } else if (computerMove === "Paper") {
      result = "Tie.";
    } else if (computerMove === "Scissors") {
      result = "You lose.";
    }
  } else if (playerChoice === "Scissors") {
    if (computerMove === "Rock") {
      result = "You lose.";
    } else if (computerMove === "Paper") {
      result = "You win.";
    } else if (computerMove === "Scissors") {
      result = "Tie.";
    }
  }

  if (result === "You win.") {
    score.wins += 1;
  } else if (result === "You lose.") {
    score.losses += 1;
  } else if (result === "Tie.") {
    score.ties += 1;
  }

  const scoreString = JSON.stringify(score);
  localStorage.setItem("gameScore", scoreString);

  updateScoreElement();
  updateResultAndMoveElement(playerChoice, computerMove, result);
}

function resetScore() {
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;
  localStorage.removeItem("gameScore");
  updateScoreElement();
}
