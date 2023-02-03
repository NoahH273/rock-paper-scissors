let getComputerChoice = (num) => {
    if (num === 1) return "rock";
    else if (num === 2) return "scissors";
    else return "paper";
}

let getRandomInRange = (num) => {
    return Math.floor(Math.random() * num) + 1;
}


let getWinStatus = (playerChoice, computerChoice) => {
    playerChoice = playerChoice.toLowerCase();
    if(playerChoice === computerChoice){
        return "draw";
    }
    else if(
        (playerChoice == "scissors" && computerChoice == "paper") ||
        (playerChoice == "rock" && computerChoice == "scissors") ||
        (playerChoice == "paper" && computerChoice == "rock")){
            return "win";
    }
    else{
        return "lose";
    }
    
}
let getWinMessage = (result, playerChoice, computerChoice) => {
    playerChoice = capitalizeFirstLetter(playerChoice);
    if(result == "win"){
        return `You win! ${playerChoice} beats ${computerChoice}!`;
    }
    else if(result == "lose"){
        return `You lose! ${playerChoice} loses to ${computerChoice}!`;
    }
    else{
        return `Draw! ${playerChoice} draws ${computerChoice}.`;
    }
}

function playRound (e) {
    let playerChoice = e.target.id;
    let computerChoice = getComputerChoice(getRandomInRange(3));
    let winStatus = getWinStatus(playerChoice, computerChoice);
    let winMessage = getWinMessage(winStatus, playerChoice, computerChoice);
    setGameText(winMessage);
    changeStats(winStatus, playerChoice, computerChoice);
}

function setGameText(winMessage) {
    const winPara = document.querySelector(".output");
    winPara.textContent = winMessage;
}

function changeStats(winStatus, playerChoice, computerChoice) {
    setPreviousChoices(playerChoice, computerChoice);
    if(winStatus == "draw"){
        setDrawText();
    }
    else changeWins(winStatus);
}

function setDrawText () {
    const playerDraws = document.querySelector(".player-draws");
    const computerDraws = document.querySelector(".computer-draws");
    let drawsText = playerDraws.textContent.trim();
    let currentDraws = parseInt(drawsText.substring(6));
    let newDrawsText = `Draws: ${currentDraws + 1}`;
    playerDraws.textContent = newDrawsText;
    computerDraws.textContent = newDrawsText;
}

function setPreviousChoices (playerChoice, computerChoice) {
    const playerPreviousChoice = document.querySelector(".player-previous-choice");
    const computerPreviousChoice = document.querySelector(".computer-previous-choice");
    playerPreviousChoice.textContent = `Previous choice: ${playerChoice}`;
    computerPreviousChoice.textContent = `Previous choice: ${computerChoice}`;
}

function changeWins (winStatus) {
    if (winStatus == "win") {
        const playerWins = document.querySelector(".player-wins");
        const computerLosses = document.querySelector(".computer-losses");
        let playerWinsText =  playerWins.textContent.trim();
        let computerLossesText = computerLosses.textContent.trim();
        let playerCurrentWins = parseInt(playerWinsText.substring(5));
        let computerCurrentLosses = parseInt(computerLossesText.substring(7));
        playerWins.textContent = `Wins: ${playerCurrentWins + 1}`;
        computerLosses.textContent = `Losses: ${computerCurrentLosses + 1}`
    }
    else {
        const playerLosses = document.querySelector(".player-losses");
        const computerWins = document.querySelector(".computer-wins");
        let playerLossesText =  playerLosses.textContent.trim();
        let computerWinsText = computerWins.textContent.trim();
        let playerCurrentLosses = parseInt(playerLossesText.substring(7));
        let computerCurrentWins = parseInt(computerWinsText.substring(5));
        playerLosses.textContent = `Losses: ${playerCurrentLosses + 1}`;
        computerWins.textContent = `Wins: ${computerCurrentWins + 1}`
    }
}

function capitalizeFirstLetter (word) {
    let firstLetter = word.charAt(0);
    let restOfWord = word.substring(1);
    firstLetter = firstLetter.toUpperCase();
    word = firstLetter + restOfWord;
    return word;
}






const buttons = document.querySelectorAll(".buttons");
buttons.forEach(button => {
    button.addEventListener("click", playRound);
}) 



