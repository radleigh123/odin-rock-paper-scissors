var getComputerChoice = () => {
    let n = Math.floor(Math.random() * 3) + 1;

    switch (n) {
        case 1:
            return "Rock";
        case 2:
            return "Paper";
        case 3:
            return "Scissors";
        default:
            break;
    }
};

var score = 0;
var playRound = (playerSelection, computerSelection) => {
    if (playerSelection == "Rock" && computerSelection == "Scissors") {
        score++;
        return "You Win! Rock beats Scissors";
    }
    else if (playerSelection == "Paper" && computerSelection == "Rock") {
        score++;
        return "You Win! Paper beats Rock";
    }
    else if (playerSelection == "Scissors" && computerSelection == "Paper") {
        score++;
        return "You Win! Scissors beats Paper";
    }
    else if (playerSelection == computerSelection)
        return "It's a Draw";
    else
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
};

var playerInput;
function playGame() {
    for (let i = 0; i < 5; i++) {
        playerInput = prompt("Enter your weapon");
        let res = playRound(playerInput.toLowerCase(), getComputerChoice().toLowerCase());

        if (res == "It's a Draw") i--;
    }

    console.log(score >= 3 ? "You're the winner" : "You Lost");
}

playGame();