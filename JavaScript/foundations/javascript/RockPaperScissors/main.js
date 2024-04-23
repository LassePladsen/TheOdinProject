let computerScore = 0;
let humanScore = 0;

const scores = document.querySelector("#scores");

const humanScoreParagraph = document.createElement("p");
const computerScoreParagraph = document.createElement("p");
humanScoreParagraph.style.marginBottom = "0px";
computerScoreParagraph.style.marginTop = "0px";

const result = document.querySelector("#result");
result.setAttribute("style", "white-space: pre;");
const resultMsg = document.querySelector("#resultMsg");

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
  getHumanChoice();
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
  };

  humanChoice = humanChoice.toLowerCase();

  // Print choices
  result.textContent =
    `You chose ${humanChoice}` + `\nComputer chose ${computerChoice}`;

  // Convert to int
  humanChoice = Choices[humanChoice];
  computerChoice = Choices[computerChoice];

  let diff = computerChoice - humanChoice;

  if (Logic.WIN.includes(diff)) {
    humanScore++;
    resultMsg.textContent = "You win!";
    resultMsg.style.color = "green";
  } else if (Logic.LOSE.includes(diff)) {
    computerScore++;
    resultMsg.textContent = "You lose!";
    resultMsg.style.color = "red";
  } else {
    resultMsg.textContent = "Tie!";
    resultMsg.style.color = "black";
  }
  showScore();
}

// Add human choice buttons
const choiceButtons = document.querySelectorAll("button.choice");
choiceButtons.forEach((button) => {
  button.addEventListener("click", () =>
    playRound(getComputerChoice(), button.textContent.toLowerCase())
  );
});

function showScore() {
  // Show scores
  humanScoreParagraph.textContent = `Your wins: ${humanScore}`;
  computerScoreParagraph.textContent = `Computer's wins: ${computerScore}`;

  // Color lead as green
  if (humanScore > computerScore) {
    humanScoreParagraph.style.color = "green";
    computerScoreParagraph.style.color = "black";
  } else if (humanScore < computerScore) {
    humanScoreParagraph.style.color = "black";
    computerScoreParagraph.style.color = "green";
  } else {
    humanScoreParagraph.style.color = "black";
    computerScoreParagraph.style.color = "black";
  }

  scores.appendChild(humanScoreParagraph);
  scores.appendChild(computerScoreParagraph);
}

showScore();
