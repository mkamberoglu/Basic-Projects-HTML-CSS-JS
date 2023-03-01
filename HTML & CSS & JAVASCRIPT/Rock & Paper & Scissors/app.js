const generateBtn = document.getElementById("generate-btn");
const rockChoice = document.getElementById("rock");
const paperChoice = document.getElementById("paper");
const scissorsChoice = document.getElementById("scissors");
const computerResult = document.getElementById("computer");
const resetBtn = document.getElementById("reset");
const resultBox = document.getElementById("box");
const title = document.getElementById("result-title")

const options = [rockChoice, paperChoice, scissorsChoice];


let playerStatus = {
    rockChoice: "",
    paperChoice: "",
    scissorsChoice: ""
}


let computerStatus = {
    result: ""
}


const computerChoice = function() {
    const randomNumber = Math.random();

    if (clickedStatus === undefined) {
        return;
    } else {
        if (randomNumber <= 0.34) {
            computerResult.innerHTML = rockChoice.innerHTML;
            computerStatus.result = "ROCK";
        } else if (randomNumber <= 0.67) {
            computerResult.innerHTML = paperChoice.innerHTML;
            computerStatus.result = "PAPER";
        } else {
            computerResult.innerHTML = scissorsChoice.innerHTML;
            computerStatus.result = "SCISSORS";
        }
        getWinner();  
    }
     
}

const getWinner = function() {
    if (computerStatus.result === "ROCK" && playerStatus.rockChoice === "ACTIVE" || computerStatus.result === "PAPER" && playerStatus.paperChoice === "ACTIVE" || computerStatus.result === "SCISSORS" && playerStatus.scissorsChoice === "ACTIVE") {
        title.innerText = "DRAW!";
        resultBox.classList.remove("visible");
    } else if (computerStatus.result === "ROCK" && playerStatus.paperChoice === "ACTIVE" || computerStatus.result === "PAPER" && playerStatus.scissorsChoice === "ACTIVE" || computerStatus.result === "SCISSORS" && playerStatus.rockChoice === "ACTIVE") {
        title.innerText = "YOU WON!";
        resultBox.classList.remove("visible");
    } else if (computerStatus.result === "ROCK" && playerStatus.scissorsChoice === "ACTIVE" || computerStatus.result === "PAPER" && playerStatus.rockChoice === "ACTIVE" || computerStatus.result === "SCISSORS" && playerStatus.paperChoice === "ACTIVE") {
        title.innerText = "THE COMPUTER WON!";
        resultBox.classList.remove("visible");
    } 
    
}


const resetHandler = function() {
    
    playerChoiceHandler();
    computerResult.innerHTML = "";
    title.innerText = "";
    resultBox.classList.add("visible");
}

const playerChoiceHandler = function() {
    for (let item of options) {
        if (item.classList.value.includes("bg")) {
            item.classList.remove("bg");
        }
    }
    playerStatus.paperChoice = "";
    playerStatus.rockChoice = "";
    playerStatus.scissorsChoice = "";
    console.log(playerStatus)
    
}

let clickedStatus;

const playerChoice = function(chosen) {
    const clicked = chosen.target.parentElement.classList;

    playerChoiceHandler();
  
    if (!(clicked[0] === "rock" || clicked[0] === "paper" || clicked[0] === "scissors")) {
        return;
    } else {
        if (clicked[0] === "rock") {
            rockChoice.classList.add("bg");
            playerStatus.rockChoice = "ACTIVE";
            clickedStatus = "ACTIVE";
        } else if (clicked[0] === "paper") {
            paperChoice.classList.add("bg");
            playerStatus.paperChoice = "ACTIVE";
            clickedStatus = "ACTIVE";
        } else if (clicked[0] === "scissors") {
            scissorsChoice.classList.add("bg");
            playerStatus.scissorsChoice = "ACTIVE";
            clickedStatus = "ACTIVE";
        }
    }
}


rockChoice.addEventListener("click", playerChoice);
paperChoice.addEventListener("click", playerChoice);
scissorsChoice.addEventListener("click", playerChoice);
generateBtn.addEventListener("click", computerChoice);
resetBtn.addEventListener("click", resetHandler);