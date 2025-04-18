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

function getHumanChoice(){
    return prompt("Pick either rock, paper or scissors.")
}

console.log(getComputerChoice())
console.log("User picked "+ getHumanChoice())