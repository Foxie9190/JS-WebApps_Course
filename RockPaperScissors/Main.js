

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});


const GetUserChoice = UserInput => {
    UserInput = UserInput.toLowerCase();
    if (UserInput === "rock" || UserInput === "paper" || UserInput === "scissors") {

    } else {
        console.log("Invalid Choice Please choose again")
        return
    };
};
function getComputerChoice() {
    let NumberChosen = Math.floor(Math.random() * 3)
    console.log(`The Number Chose was ${NumberChosen}`)
    if (NumberChosen === 0) {
        return "Paper";
    } else if (NumberChosen === 1) {
        return "Rock";
    } else if (NumberChosen === 2) {
        return "Scissors";
    }
}

function determineWinner(userChoice, ComputerChoice) {
    if (userChoice === ComputerChoice) {
        return "Game Tie"
    };
    if (userChoice === "rock") {
        if (ComputerChoice === "Paper") {
            return "Computer Wins" + '\n' + "Good Game";
        } else {
            return "You Won Amazing Job"
        }
    };
    if (userChoice === "paper") {
        if (ComputerChoice === "Scissors") {
            return "Computer Wins" + '\n' + "Good Game"; 
        } else {
            return "You Won Amazing Job"
        }
    }
    if (userChoice === "scissors") {
        if (ComputerChoice === "Rock") {
            return "Computer Wins" + '\n' + "Good Game"; 
        } else {
            return "You Won Amazing Job";
        };
    };
};
function playgame() {
    let UserChoice = GetUserChoice('rock');
    console.log(UserChoice);
    let ComputerChoice = getComputerChoice();
    console.log(ComputerChoice)
    determineWinner(UserChoice, ComputerChoice)
}
playgame()