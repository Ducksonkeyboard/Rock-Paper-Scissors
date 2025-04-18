console.log("hello world")
function getComputerChoice (){
    // Math.random will generate a floating number (0-1) and 
    // then be multiped by 3 and then rounded down
    // Can return either 0, 1, or 2. 
    return Math.floor(Math.random() * 3);
}
console.log(getComputerChoice())