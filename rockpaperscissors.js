function computerPlay() {
  return items[Math.floor(Math.random() * items.length)];
}

let items = ["rock", "paper", "scissors"];
console.log(computerPlay());

let emptyScore = [0, 0, 0];
function playRound(playerSelection, computerSelection, score) {
  if (playerSelection == computerSelection) {
    return ["You are tied! Try it again!", [score[0], score[1], score[2] + 1]];
  } else if (
    (playerSelection == "scissors" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "rock") ||
    (playerSelection == "rock" && computerSelection == "scissors")
  ) {
    return [
      `You Win! ${playerSelection} beats ${computerSelection}.`,
      [score[0] + 1, score[1], score[2]],
    ];
  } else {
    return [
      `You lose! ${computerSelection} beats ${playerSelection}.`,
      [score[0], score[1] + 1, score[2]],
    ];
  }
}

function sanitizeInput(userInput) {
  if (!items.includes(userInput)) {
    return alert("Please enter a rock, paper, or scissors");
  } else {
    return userInput.toLowerCase().trim();
  }
}

function game() {
  let score = emptyScore;
  for (let i = 0; i < 5; i++) {
    const computerSelection = computerPlay();
    const playerSelection = sanitizeInput(prompt("tell me stuffs"));
    const [gameResult, newScore] = playRound(
      playerSelection,
      computerSelection,
      score
    );
    score = newScore;
    console.log(gameResult, score);
  }

  if (score[0] > score[1]) {
    console.log(`You won ${score[0]} to ${score[1]}!!`);
  } else if (score[0] == score[1]) {
    console.log(`You are tied ${score[0]} to ${score[1]}!!`);
  } else {
    console.log(`You are defeated ${score[1]} to ${score[0]}!!`);
  }
}
game();
