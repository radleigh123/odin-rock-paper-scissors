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
var limit = 0;
var playRound = (playerSelection, computerSelection) => {
    if (playerSelection == "rock" && computerSelection == "scissors") {
        score++;
        limit++;
        return "You Win! Rock beats Scissors";
    }
    else if (playerSelection == "paper" && computerSelection == "rock") {
        score++;
        limit++;
        return "You Win! Paper beats Rock";
    }
    else if (playerSelection == "scissors" && computerSelection == "paper") {
        score++;
        limit++;
        return "You Win! Scissors beats Paper";
    }
    else if (playerSelection == computerSelection)
        return "It's a Draw";
    else {
        limit++;
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
};

function playGame(playerInput) {
    if (limit < 5) {
        let res = playRound(playerInput.toLowerCase(), getComputerChoice().toLowerCase());

        div.textContent = res;
        p.textContent = score;

        body.appendChild(div);
        body.appendChild(p);
    } else {
        if (score >= 3) {
            alert("You won");
        } else {
            alert("Game over");
        }
    }
}

const rockBtn = document.createElement("button");
const paperBtn = document.createElement("button");
const scissorsBtn = document.createElement("button");

rockBtn.addEventListener("click", () => playGame(rockBtn.textContent));
paperBtn.addEventListener("click", () => playGame(paperBtn.textContent));
scissorsBtn.addEventListener("click", () => playGame(scissorsBtn.textContent));

const body = document.querySelector("body");
body.appendChild(rockBtn);
body.appendChild(paperBtn);
body.appendChild(scissorsBtn);

rockBtn.textContent = "Rock";
paperBtn.textContent = "Paper";
scissorsBtn.textContent = "Scissors";

const div = document.createElement("div");
const p = document.createElement("p");