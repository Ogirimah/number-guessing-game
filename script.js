// let username = prompt("Please input your username: ");

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

let b = predictor(1, 5)
console.log(b);