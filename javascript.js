const body = document.querySelector('body');
const rockBtn = document.createElement('button');
const paperBtn = document.createElement('button');
const scissorsBtn = document.createElement('button');

let playerSelection = '';
let playerScore = 0;
let computerScore = 0;
let rounds = 5;

rockBtn.textContent = 'Rock';
paperBtn.textContent = 'Paper';
scissorsBtn.textContent = 'Scissors';

const resultsDiv = document.createElement('div');
const roundPlayed = document.createElement('p');
const score = document.createElement('p');


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
        return `Draw! Both players chose ${playerSelection}`;
    } else if(playerSelection === 'Rock') {
        if(computerSelection === 'Paper') {
            computerScore++;
            return `You Lose! ${computerSelection} beats ${playerSelection}`;
        } else {
            playerScore++;
            return `You Win! ${playerSelection} beats ${computerSelection}`;
        }
    } else if(playerSelection === 'Paper') {
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
            return `You Lose! ${computerSelection} beats ${playerSelection}`;
        } else {
            playerScore++;
            return `You Win! ${playerSelection} beats ${computerSelection}`;
        }
    }
    
}


function playGame() {
    for(let i = 1; playerScore < rounds || computerScore < rounds; i++) {
        rockBtn.addEventListener('click', function() {
            roundPlayed.textContent = playRound('Rock', getComputerChoice());
            console.log(`player: ${playerScore} || computer: ${computerScore}`);
        });
        
        paperBtn.addEventListener('click', function() {
            roundPlayed.textContent = playRound('Paper', getComputerChoice());
            console.log(`player: ${playerScore} || computer: ${computerScore}`);
        });
        
        scissorsBtn.addEventListener('click', function() {
            roundPlayed.textContent = playRound('Scissors', getComputerChoice());
            console.log(`player: ${playerScore} || computer: ${computerScore}`);
        });
    }

    if(playerScore === rounds) {
        score.textContent = `You have beaten the computer`;
    } else if (computerScore === rounds) {
        score.textContent = 'You have lost to the computer';
    } else {
        
    }
}

body.appendChild(rockBtn);
body.appendChild(paperBtn);
body.appendChild(scissorsBtn);
body.appendChild(resultsDiv);
resultsDiv.appendChild(roundPlayed);
resultsDiv.appendChild(score);


/*
Old playRound function 

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
    const body = document.querySelector('body');
    const rockBtn = document.createElement('button');
    const paperBtn = document.createElement('button');
    const scissorsBtn = document.createElement('button');

    let playerSelection = '';

    rockBtn.textContent = 'Rock';
    paperBtn.textContent = 'Paper';
    scissorsBtn.textContent = 'Scissors';

    rockBtn.addEventListener('click', function() {
        roundPlayed.textContent = playRound('rock', getComputerChoice());
    });

    paperBtn.addEventListener('click', function() {
        roundPlayed.textContent = playRound('paper', getComputerChoice());
    });

    scissorsBtn.addEventListener('click', function() {
        roundPlayed.textContent = playRound('scissors', getComputerChoice());
    });

    const resultsDiv = document.createElement('div');
    const roundPlayed = document.createElement('p');
    const score = document.createElement('p');

    score.textContent = `Computer: ${computerScore} | Player: ${playerScore}`

    if(playerScore > computerScore) {
        (`You beat the computer!`);
    } else if(computerScore > playerScore) {
        console.log(`You lost to the computer!`);
    } else {
        console.log(`You tied with the computer!`);
    }

    body.appendChild(rockBtn);
    body.appendChild(paperBtn);
    body.appendChild(scissorsBtn);
    body.appendChild(resultsDiv);
    resultsDiv.appendChild(roundPlayed);
    resultsDiv.appendChild(score);
}
*/
