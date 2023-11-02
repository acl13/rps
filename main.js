

const getUserInput = function() {
    var userInput = prompt("Choose your weapon: rock, paper, or scissors?")
userInput = userInput.toLowerCase();

 if(userInput === "rock" || userInput === "paper" || userInput === "scissors" || userInput === "bomb") {
    return userInput;
 } else {
    console.log("Error. Please choose either rock, paper, or scissors and try again");
 }
}



const getComputerChoice = function() {
    const randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber == 0) {
        console.log("Computer chooses rock")
        return "rock";
    } else if (randomNumber == 1) {
        console.log("Computer chooses paper");
        return "paper";
    } else if (randomNumber == 2) {
        console.log("Computer chooses scissors");
        return "scissors";
    } else {
        console.log("Oops, something went wrong");
    }
}





const determineWinner = function(userInput, computerChoice) {
    if (userInput == "bomb") {
        console.log("You win!");
    }else if (userInput == computerChoice) {
        console.log("It's a tie");
    } else if (userInput == "rock") {
        if (computerChoice == "paper") {
            console.log("The computer wins");
        } else {
            console.log("You win!");
        }
    } else if (userInput == "paper") {
        if (computerChoice == "scissors") {
            console.log("The computer wins");
        } else {
            console.log("You win!");
        }
    } else if (userInput == "scissors") {
        if (computerChoice == "rock") {
            console.log("The computer wins");
        } else {
            console.log("You win!");
        }
    } else {
        console.log("Oops, something went wrong...");
    }
}

const playGame = function() {
   var userChoice =  getUserInput();
  var computerChoice = getComputerChoice();
 
  determineWinner(userChoice, computerChoice);

}

playGame();
