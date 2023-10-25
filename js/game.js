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
    return "Tie! Both players picked " + playerChoice.toUpperCase();
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
      playerChoice.toUpperCase()
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
      computerChoice.toUpperCase()
    );
  }

  return -1;
}

function game(playerPlay) {
  const POINTS_TO_WIN = 5;
  let p1Points = 0;
  let p2Points = 0;
  let play;
  let winner;
  while (p1Points < POINTS_TO_WIN && p2Points < POINTS_TO_WIN) {
    play = playGame(playerPlay);
    winner = play.split("!");

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
  }

  let msg = "FINAL SCORE:\nPLAYER: " + p1Points + " - COMPUTER: " + p2Points;
  if (p1Points > p2Points) {
    msg += "\nYOU'RE WINNER.";
  } else {
    msg += "\nYOU'RE LOSER, Computer wins.";
  }
  return msg;
}
