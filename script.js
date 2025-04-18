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
    /*
    caseSensitive(humanChoice)
    WHEN humanChoice EQUALS computerChoice THEN
        None gets points
        stalemate
    WHEN HumanChoice is rock AND computerChoice is scissors THEN
        Humans wins and increments points by 1
    When humanChoice is rock AND computerChoice is paper THEN
        Computer Wins and increments points by 1
    
    WHEN humanChoice is paper AND computerChoice is scissors THEN
        Computer wins and increments points by 1
    WHen humanChoice is paper AND computerChoice is rock THEN 
        Human wins and increments points by 1
    
    When humanChoice is scissors AND computerChoice is rock THEN
        Computer wins and increments score by 1
    When humanChoice is scissors AND computerChoice is paper THEN
        human wins and increments score by 1

    */
   let human = humanChoice.toLowerCase()
   console.log(human)
}

let humanChoice = getHumanChoice();
let computerChoice = getComputerChoice();
playRound(humanChoice, computerChoice);