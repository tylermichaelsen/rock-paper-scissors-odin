function getComputerChoice() {
    let choice = Math.floor(Math.random() * (4 - 1) + 1);   

    switch(choice) {
        case 1: 
            return "Rock";
        case 2:
            return "Paper";
        case 3:
            return "Scissors";
        default:
            return null;
    }
}

function playRound(playerSelection, computerSelection) {
    if(playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
        return `Draw! Both players chose ${playerSelection}!`;
    } else if(playerSelection.toLowerCase() === 'rock' ) {
        if(computerSelection === 'Paper') {
            computerScore++;
            return `You Lose! ${computerSelection} beats ${playerSelection}`;
        } else {
            playerScore++;
            return `You Win! ${playerSelection} beats ${computerSelection}`;
        }
    } else if(playerSelection.toLowerCase() === 'paper') {
        if(computerSelection === 'Scissors') {
            computerScore++;
            return `You Lose! ${computerSelection} beats ${playerSelection}`;
        } else {
            playerScore++;
            return `You Win! ${playerSelection} beats ${computerSelection}`;
        }
    } else {
        if(computerSelection === 'Rock') {
            computerScore++;
            return `You Lose! ${computerSelection} beats ${playerSelection}`
        } else {
            playerScore++;
            return `You Win! ${playerSelection} beats ${computerSelection}`
        }
    }
}



let playerScore = 0;
let computerScore = 0;

function playGame() {   


    console.log(playRound(prompt("Please enter rock, paper, or scissors."), computerSelection));
    console.log(playRound(prompt("Please enter rock, paper, or scissors."), computerSelection));
    console.log(playRound(prompt("Please enter rock, paper, or scissors."), computerSelection));
    console.log(playRound(prompt("Please enter rock, paper, or scissors."), computerSelection));
    console.log(playRound(prompt("Please enter rock, paper, or scissors."), computerSelection));

    if(playerScore > computerScore) {
        console.log(`You beat the computer!`);
    } else if(computerScore > playerScore) {
        console.log(`You lost to the computer!`);
    } else {
        console.log(`You tied with the computer!`);
    }
}