function getComputerChoice() {


    let randomInRange = (Math.random() * 3) + 1

    let number = parseInt(randomInRange)

    if (number == 1) {

        return "rock"
    }

    else if (number == 2) {

        return "paper"
    }
    else if (number == 3) {

        return "scissor"
    }


}


function playRound(playerSelection, computerSelection) {

    if (playerSelection == computerSelection) {
        return "nobody wins"
    }

    else if (playerSelection == "rock" && computerSelection == "paper") {
        return "computer wins"
    }

    else if (playerSelection == "paper" && computerSelection == "scissor") {
        return "computer wins"
    }

    else if (playerSelection == "scissor" && computerSelection == "rock") {
        return "computer wins"
    }

    else {
        return "user wins"
    }

}

function game() {
    let userScore = 0
    let computerScore = 0

    for (let i = 0; i < 5; i++) {


        let userDecision = prompt("hey user, whats your move?")

        let usersChoice = userDecision.toLowerCase()

        let computerChoice = getComputerChoice()

        let winner = playRound(usersChoice, computerChoice)

        if (winner == "user wins") {
            userScore = userScore + 1
        }
        else {
            computerScore = computerScore + 1
        }

        console.log("results from round " + (i + 1) + " score from User: " + userScore + ", score from computer: " + computerScore)
    }

    if (userScore > computerScore) {
        console.log("the winner of five rounds is user")
    }
    else {
        console.log("the winner of 5 rounds is computer")
    }
}