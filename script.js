function getUserInput() {
  let userInput = prompt("enter snake, water or gun").toLowerCase();
  if (userInput === "snake" || userInput === "water" || userInput === "gun") {
    return userInput;
  } else {
    alert("invalid input, please enter snake, gun or water.");
    return getUserInput();
  }
}

function getComputerInput() {
  let choices = ["snake", "water", "gun"];
  let randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "it is a tie";
  }

  if (userChoice === "snake") {
    return computerChoice === "water" ? "you won the game" : "you lose";
  }
  if (userChoice === "water") {
    return computerChoice === "gun" ? "you won the game" : "you lose";
  }
  if (userChoice === "gun") {
    return computerChoice === "snake" ? "you won the game" : "you lose";
  }
}

function playGame() {
  let userChoice = getUserInput();
  let computerChoice = getComputerInput();
  alert("You chose: " + userChoice);
  alert("computer chose: " + computerChoice);
  alert(determineWinner(userChoice, computerChoice));
}

playGame();
