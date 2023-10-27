function getComputerPlay() {
  let menu = Math.floor(Math.random() * 3) + 1;
  switch (menu) {
    case 1:
      return "rock";
    case 2:
      return "paper";
    case 3:
      return "scissors";
  }
}

function playGame(playerChoice, computerChoice = getComputerPlay()) {
  playerChoice = playerChoice.toLowerCase();
  computerChoice = computerChoice.toLowerCase();

  if (playerChoice == computerChoice) {
    return "Tie! Both players picked " + playerChoice.toUpperCase() + ".";
  }

  if (
    (playerChoice == "rock" && computerChoice == "paper") ||
    (playerChoice == "paper" && computerChoice == "scissors") ||
    (playerChoice == "scissors" && computerChoice == "rock")
  ) {
    return (
      "Computer wins! " +
      computerChoice.toUpperCase() +
      " beats " +
      playerChoice.toUpperCase() +
      "."
    );
  }

  if (
    (playerChoice == "paper" && computerChoice == "rock") ||
    (playerChoice == "rock" && computerChoice == "scissors") ||
    (playerChoice == "scissors" && computerChoice == "paper")
  ) {
    return (
      "Player wins! " +
      playerChoice.toUpperCase() +
      " beats " +
      computerChoice.toUpperCase() +
      "."
    );
  }

  return -1;
}

function updatePoints() {
  pointsPlaceholder.textContent =
    "Player " + p1Points + " -- " + p2Points + " Computer";
}

const POINTS_TO_WIN = 5;
const WIN_MSG = "You win fucker, congratulations.";
const LOSE_MSG = "Lol a computer beat you, git gud pussy.";

const playBtns = document.querySelectorAll(".playBtns > button");
const msgPlaceholder = document.querySelector(".gameMsg");
const pointsPlaceholder = document.querySelector("div.points");
const nuGame = document.querySelector("button.nuGame");

let p1Points = 0;
let p2Points = 0;
let newGame = true;

playBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (!newGame) {
      pointsPlaceholder.style.display = "block";

      let play = playGame(btn.value);
      let winner = play.split("!");
      switch (winner[0]) {
        case "Player wins":
          p1Points += 1;
          break;
        case "Computer wins":
          p2Points += 1;
          break;
        default:
          break;
      }

      if (p1Points < POINTS_TO_WIN && p2Points < POINTS_TO_WIN)
        msgPlaceholder.textContent = play;
      else {
        p1Points > p2Points
          ? (msgPlaceholder.textContent = WIN_MSG)
          : (msgPlaceholder.textContent = LOSE_MSG);
        newGame = true;
        nuGame.textContent = "NEW GAME";
      }
      updatePoints();
    }
  });
});

nuGame.addEventListener("click", () => {
  newGame = false;
  p1Points = 0;
  p2Points = 0;
  updatePoints();
  nuGame.textContent = "RESTART";
  msgPlaceholder.textContent = "";
  pointsPlaceholder.style.display = "none";
});
