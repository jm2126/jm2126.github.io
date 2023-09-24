/*
 Write a JavaScript program where the program takes a random integer between 1 and 10, and the user is then prompted to input a guess number. 
 The program displays a message "Good Work" if the input matches the guess number otherwise "Not matched".
*/

//generate random number between 1 and 10
//math.floor needs to be used with math.random - math.random returns number less than 1
//math.floor needs to be used with math.random
var randomNumber = Math.floor(Math.random() * 10) + 1;//'+ 1' used to make it generate between 1 and 10 

//ask user to enter a number
let userInput = prompt ("Enter a number between 1 and 10");

//display "good work" if random number is equal to user number
if(userInput = randomNumber){
    console.log("Good Work!");
} else {
    console.log("Not Matched!");//else display "not matched"
}
