let continueGame = true;
let min = 1;
let max = 2;

const newUser = new Object();

do {
    newUser.name = prompt("Please input your name: ");
    // newUser.name = "Ameer";
    newUser.score  = 0;
    print(newUser)
    min = 1;
    max = 2;
    i = 0;
    // iterate through numbers 1 upward to be stage and continue to add to score
    for (let i = 0; i < 100; i++) {
        max = 2 + i;
        currentStage = i + 1;
        let generatedNumber = generateRandomNumber(min, max);
        let userNumber = predictor(min, max);
        if (generatedNumber == userNumber) {
            newUser.score = newUser.score + 1;
        }
        else {
            alert(newUser.name + ": Wrong number guesssed. You guessed " + userNumber + " instead of " + generatedNumber + "\n" +
            "Your total score is" + newUser.score);
            newUser.score = 0;
            break;
        }
        

    }
    let decision = prompt("Do you want to continue, Y/N?");
    if (decision == "Y") {
        continue
    }
    else if (decision =="N") {
        continueGame = false
    }
    else {
        decision = prompt("Wrong input, Please type 'Y' fo yes and 'N' for no")
    }
    // On failure print out total score
    // ask if interested in continuing game 
    // if affirmative, continue 
    // else continueGame = false
} while (continueGame == true);

function generateRandomNumber(min, max) {
    let RandomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return RandomNumber;
}

// let a = generateRandomNumber(0, 10);
// console.log(a);

function predictor(min, max) {
    let guessedNumber = undefined;
    do {
        guessedNumber = prompt("Stage " + currentStage +"\n" + 
        "Guess a number between " + min + " and " + max + 
        ".\n" + min + " and " + max + " included");
    } while (min > guessedNumber || guessedNumber > max);
    return guessedNumber;
}

// let b = predictor(1, 5)
// console.log(b);
