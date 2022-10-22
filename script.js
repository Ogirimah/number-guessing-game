// let username = prompt("Please input your username: ");

let score = 0;
let continueGame = true;
let min = 1;
let max = 2;

do {
    // iterate through numbers 1 upward to be stage and continue to add to score
    // On failure print out total score
    // ask if interested in continuing game 
    // if affirmative, continue 
    // else continueGame = false
} while (continueGame == true);

// function generateRandomNumber(min, max) {
//     let RandomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
//     return RandomNumber;
// }

// let a = generateRandomNumber(0, 10);
// console.log(a);

function predictor(min, max) {
    let guessedNumber = undefined;
    do {
        guessedNumber = prompt("Guess a number between " + min + " and " + max + 
        ".\n" + min + " and " + max + " included");
    } while (min > guessedNumber || guessedNumber > max);
    return guessedNumber;
}

// let b = predictor(1, 5)
// console.log(b);
