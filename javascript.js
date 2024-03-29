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


const computerSelection = getComputerChoice();
let playerScore = 0;
let computerScore = 0;

function playGame() {   
    let playerSelection = prompt("Please enter rock, paper, or scissors.");

    console.log(playRound(playerSelection, computerSelection));
    console.log(playRound(playerSelection, computerSelection));
    console.log(playRound(playerSelection, computerSelection));
    console.log(playRound(playerSelection, computerSelection));
    console.log(playRound(playerSelection, computerSelection));

}