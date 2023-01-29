let getComputerChoice = (num) => {
    if (num === 1) return "rock";
    else if (num === 2) return "scissors";
    else return "paper";
}
let getRandomInRange = (num) => {
    return Math.floor(Math.random() * num) + 1;
}
//Determines the winner of a rock paper scissors game given a player and computer choice, returns win on player win, lose on computer win, and draw on draw
let playRound = (playerChoice, computerChoice) => {
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
let game = () => {
    let playerWins = 0;
    let computerWins = 0;
    for(let i = 0; i < 5; i++){
        let playerChoice = prompt("Enter rock, paper, or scissors");
        let computerChoice = getComputerChoice(getRandomInRange(3));
        let result = playRound(playerChoice, computerChoice);
        if(result == "win"){
            console.log(`You win! ${playerChoice} beats ${computerChoice}!`);
            playerWins++;
        }
        else if(result == "lose"){
            console.log(`You lose! ${playerChoice} loses to ${computerChoice}!`)
            computerWins++;
        }
        else{
            console.log(`Draw! ${playerChoice} draws ${computerChoice}`);
        }
    }
    let winsText = `You had ${playerWins} wins, the computer had ${computerWins} wins.`;
    if(playerWins > computerWins){
        console.log(`You win! ${winsText}`);
    }
    else if (playerWins < computerWins){
        console.log(`You lost! ${winsText}`)
    }
    else {
        console.log(`Draw! ${winsText}`)
    }
}
game();