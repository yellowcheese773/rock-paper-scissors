function getComputerChoice() {


    let randomInRange = (Math.random() * 3) + 1

    let number = parseInt(randomInRange)

    if (number == 1) {
        console.log("rock")
        return "rock"
    }

    else if (number == 2) {
        console.log("paper")
        return "paper"
    }
    else if (number == 3) {
        console.log("scissor")
        return "scissor"
    }


}


function playRound(playerSelection, computerSelection) {

    if (playerSelection == computerSelection) {
        return "nobody wins"
    }

    if (playerSelection == "rock" && computerSelection == "paper") {
        return "computer wins"
    }

    if (playerSelection == "paper" && computerSelection == "scissor") {
        return "computer wins"
    }

    if (playerSelection == "scissor" && computerSelection == "rock") {
        return "computer wins"
    }

    else {
        return "user wins"
    }




}