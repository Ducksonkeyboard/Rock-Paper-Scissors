let humanScore = 0;
let computerScore = 0;

console.log("hello world")
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
   
   if (human == computerChoice){
    console.log("It's a stalemate! None wins!")

   } else if (human == "rock") {
    if (computerChoice == "scissors"){
        console.log("User Wins! "+ human +" beats "+ computerChoice)
        humanScore ++;
    }
    if (computerChoice == "paper"){
        console.log("Computer wins!"+ computerChoice + " beats " + human)
        computerScore ++;
    }
    
   } else if (human == "paper"){
    if (computerChoice == "rock"){
        console.log("User wins!" + human + " beats " + computerChoice)
        humanScore ++;
    }
    if (computerChoice ==  "scissors"){
        console.log("Computer wins!" + computerChoice + " beats " + human)
        computerScore ++;
    }

   } else if (human == "scissors"){
    if (computerChoice == "rock"){
        console.log("Computer Wins!"+ computerChoice + " beats " + human)
        computerScore ++;
    }
    if (computerChoice == "paper"){
        console.log("User wins!" + human + " beats " + computerChoice)
        humanScore ++;
    }
   }

}

let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();
playRound(humanSelection, computerSelection);
console.log ("The final score is " + humanScore + " for the user and " + computerScore + " for the computer.")