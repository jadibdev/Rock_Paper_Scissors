/*
  Understanding the problem:

    Create a program that enables a user to play the game
    Rock, Paper, Scissors against a computer

  Game explanation:

    this game comprises of 2 players that simultaneously
    throw their hand by extending towards their opponent
    and expressing either Rock, Paper or Scissors

  Outcomes:

    Same hand expression - Same hand expression => Tie
    Rock - Paper => Paper wins
    Paper - Rock => Rock wins
    Paper - Scissors => Scissors win
    Rock - Scissors => Rock wins


  Program steps:

    Create a function computerPlay that represents the play from the computer
    this function may not have any parameters, it will randomly return the string
    "Rock", "Paper", or "Scissors".

    Write a function playOneRound that plays a single round, it will take 2 parameters and return
    a string declaring a winner.

    Write a function called game that takes one parameter n denoting how many rounds 
    will the game last, keeps the score and returns a winner or loser at the end.
*/

function computerPlay() {
  let choices = ["paper", "rock", "scissors"]
  let random_index = Math.floor(Math.random() * choices.length)
  return choices[random_index]
}

function playOneRound(playerSelection, computerSelection) {
  if (playerSelection.toLowerCase() === computerSelection) {
    return "It is a tie"
  } if (playerSelection.toLowerCase() === "rock" && computerSelection === "paper") {
    return "Computer wins"
  } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "rock") {
    return "Player wins"
  } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "scissors") {
    return "Computer wins"
  } else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "paper") {
    return "Player wins"
  } else if (playerSelection.toLowerCase() === "rock" && computerSelection === "scissors") {
    return "Player wins"
  } else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "rock") {
    return "Computer wins"
  } else {
    return `odd case => computer selection: ${computerSelection} player selection: ${playerSelection}`
  }
}

function game() {
  let playerScore = 0
  let computerScore = 0
  
  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt("Enter your choice: ")
    let computerSelection = computerPlay()

    if (playOneRound(playerSelection, computerSelection) == "It is a tie") {
      playerScore = playerScore
      computerScore = computerScore
      console.log("Computer: ", computerScore, "You: ", playerScore)
    }

    if (playOneRound(playerSelection, computerSelection) == "Player wins") {
      playerScore += 1
      console.log("Computer: ", computerScore, "You: ", playerScore)
    }

    if (playOneRound(playerSelection, computerSelection) == "Computer wins") {
      computerScore += 1
      console.log("Computer: ", computerScore, "You: ", playerScore)
    }

  }

  if (playerScore > computerScore) {
    return "You Win!!!"
  } else if (playerScore == computerScore){
    return "It is a tie!!"
  } else {
    return "Computer Wins!!!"
  }
}

console.log(game())

/* let computerSelection = computerPlay()
let playerSelection = "rock"

console.log(playOneRound(playerSelection, computerSelection)) */