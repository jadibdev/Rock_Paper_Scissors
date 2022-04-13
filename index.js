

function computerPlay() {
  let choices = ['paper', 'rock', 'scissors'] // array of options
  const randomIndex = Math.floor(Math.random() * choices.length); // random index within the array range
  const item = choices[randomIndex]; // random array item

  return item
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "No one wins, it's a tie"
  }
  if (playerSelection.toLowerCase() === "rock" && computerSelection === "paper") {
    return "You Lose! Paper beats Rock"
  } else {
    return "have not written the code for this case yet"
  }
}

let playerSelection = prompt("Enter a choice")
let computerSelection = computerPlay()

function game() {
    playRound(playerSelection, computerSelection)
}


console.log(game())