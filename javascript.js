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
    if(playerSelection === computerSelection) {
        return `Draw! Both players chose ${playerSelection}!`;
    } else if(playerSelection.toLowerCase() === 'rock' ) {
        if(computerSelection === 'Paper') {
            return `You Lose! ${computerSelection} beats ${playerSelection}`;
        } else {
            return `You Win! ${playerSelection} beats ${computerSelection}`;
        }
    } else if(playerSelection.toLowerCase() === 'paper') {
        if(computerSelection === 'Scissors') {
            return `You Lose! ${computerSelection} beats ${playerSelection}`;
        } else {
            return `You Win! ${playerSelection} beats ${computerSelection}`;
        }
    } else {
        if(computerSelection === 'Rock') {
            return `You Lose! ${computerSelection} beats ${playerSelection}`
        } else {
            return `You Win! ${playerSelection} beats ${computerSelection}`
        }
    }
}

const playerSelection = prompt("Please enter rock, paper, or scissors.");
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));