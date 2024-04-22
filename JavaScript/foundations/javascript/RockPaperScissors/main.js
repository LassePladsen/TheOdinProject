let computerScore = 0;
let humanScore = 0;

function getComputerChoice() {
  const Choices = {
    0: "rock",
    1: "paper",
    2: "scissor",
  };
  let computerChoice = Math.floor(Math.random() * 3);
  return Choices[computerChoice];
}

function getHumanChoice() {
  let humanChoice = prompt("Input your choice (rock/paper/scissor)");
  humanChoice = humanChoice.toLowerCase();
  const validChoices = ["rock", "paper", "scissor"];
  if (validChoices.includes(humanChoice)) {
    return humanChoice;
  }
  console.log("Invalid input! Try again");
}

function playRound(computerChoice, humanChoice) {
  if (typeof humanChoice === "undefined") {
    return;
  }

  const Choices = {
    rock: 0,
    paper: 1,
    scissor: 2,
  };
  const Logic = {
    WIN: [-1, 2],
    LOSE: [-2, 1],
    TIE: 0,
  };

  humanChoice = humanChoice.toLowerCase();

  // Print choices
  console.log(
    `You chose ${humanChoice}` + `\nComputer chose ${computerChoice}`
  );

  // Convert to int
  humanChoice = Choices[humanChoice];
  computerChoice = Choices[computerChoice];

  let diff = computerChoice - humanChoice;

  if (Logic.WIN.includes(diff)) console.log("You win!");
  else if (Logic.LOSE.includes(diff)) console.log("You lose!");
  else if (Logic.TIE === diff) console.log("Its a tie!");
}

playRound(getComputerChoice(), getHumanChoice());
