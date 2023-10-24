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

function game() {
  const NUMBER_O_GAMES = 5;
  let p1Points = 0;
  let p2Points = 0;
  let play;
  let whoWon;
  for (let i = 0; i < NUMBER_O_GAMES; i += 1) {
    let playerPlay = prompt("What do you play?");
    play = playGame(playerPlay);
    whoWon = play.split("!");

    console.log(play);

    switch (whoWon[0]) {
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
  console.log(msg);
}

function runTest() {
  for (let i = 0; i < 10; i += 1) {
    let game = playGame(getComputerPlay());
    console.log(game);
  }
}
