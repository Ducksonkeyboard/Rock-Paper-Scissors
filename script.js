console.log("hello world")
function getComputerChoice (){
    // Math.random will generate a floating number (0-1) and 
    // then be multiped by 3 and then rounded down
    // Can return either 0, 1, or 2. 
    let num = Math.floor(Math.random() * 3);
    /*
    When number is 0 then
        rock
    When number is 1 then 
        paper
    when number is 2 then
        scissors
    end
    */
    if (num == 0){
        return "rock"
    } else if(num == 1){
        return "paper"
    } else {
        return "scissors"
    }
}
console.log(getComputerChoice())