function getComputerChoice() {


    let randomInRange = (Math.random() * 3) + 1

    let number = parseInt(randomInRange)

    if (number == 1) {
        return "Rock"
    }

    else if (number == 2) {
        return "Paper"
    }
    else if (number == 3) {
        return "Scissor"
    }


}