
//will return either rock, paper, or scissors.
function getComputerChoice (){
    /* 
    Math.random will generate a floating number (0-1) and 
    then be multiped by 3 and then rounded down
    Can return either 0, 1, or 2. 
    */
    let num = Math.floor(Math.random() * 3);

    if (num == 0){
        return "rock"
    } else if(num == 1){
        return "paper"
    } else {
        return "scissors"
    }
}
//Returns the user's input for RPS
function getHumanChoice(){
    return prompt("Pick either rock, paper or scissors.")
}
function playRound(humanChoice, computerChoice){
  // Changes any characters to lowercase
   let human = humanChoice.toLowerCase()
   let humanWin;
   
   if (human == computerChoice){
    console.log("It's a stalemate! None wins!")

   } else if (human == "rock") {
    if (computerChoice == "scissors"){
        console.log("User Wins! "+ human +" beats "+ computerChoice)
        humanWin = true;
    }
    if (computerChoice == "paper"){
        console.log("Computer wins! "+ computerChoice + " beats " + human)
        humanWin = false;
    }
    
   } else if (human == "paper"){
    if (computerChoice == "rock"){
        console.log("User wins! " + human + " beats " + computerChoice)
        humanWin = true;
    }
    if (computerChoice ==  "scissors"){
        console.log("Computer wins! " + computerChoice + " beats " + human)
        humanWin = false;
    }

   } else if (human == "scissors"){
    if (computerChoice == "rock"){
        console.log("Computer Wins! "+ computerChoice + " beats " + human)
        humanWin = false;
    }
    if (computerChoice == "paper"){
        console.log("User wins! " + human + " beats " + computerChoice)
        humanWin = true;
    }
   }
   return humanWin;
}

function playGame(){
    let humanScore = 0;
    let computerScore = 0;
    let gameRounds = 5;

    let humanSelection;
    let computerSelection;
    //play the rounds
    for (let i=0; i < gameRounds; i++) {
        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice();
        let result = playRound(humanSelection, computerSelection); 
        if (result == true){
            humanScore ++;
        } else if (result == false){
            computerScore ++;
        }
        console.log("Human has " + humanScore + " while the computer has " + computerScore)
    }
    //Final score
    if (humanScore == computerScore){
        console.log ("After 5 rounds it's a stalemate!None wins!")
    } else if (humanScore > computerScore){
        console.log ("After 5 rounds the human has came out victorious! With a score of " + humanScore +" to " + computerScore)
    } else {
        console.log ("After 5 rounds the computer has came out victorious! With a score of " + computerScore +" to " + humanScore)
    }
}

playGame()