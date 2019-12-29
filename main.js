//make a function

function game() {

    let totalRounds = 0;
    let playerWins = 0;
    let computerWins = 0;
    let tiedRounds = 0;

    while (totalRounds <= 5) {
        const computerSelection = computerPlay()
        const playerSelection = window.prompt('Rock, paper, scissors?');

        function computerPlay() {
            let randomNum = Math.floor(Math.random() * Math.floor(3))
            if (randomNum === 0) {
                return "rock"
            } else if (randomNum === 1) {
                return "paper"
            } else if (randomNum === 2)
                return "scissors"
        }

        //make a loop that will run playRound 5 times, keep and return the score.
        function playRound(playerSelection, computerSelection) {

            console.log('player picked ' + playerSelection)
            console.log('computer picked ' + computerSelection)

            if (playerSelection.toLowerCase() == 'rock' && computerSelection.toLowerCase() == 'scissors') {
                playerWins++;
                return ('You win, rock beats scissors.');
            } else if (playerSelection.toLowerCase() == 'rock' && computerSelection.toLowerCase() == 'paper') {
                computerWins++;
                return ('You lose, Paper beats rock.');
            } else if (playerSelection.toLowerCase() == 'rock' && computerSelection.toLowerCase() == 'rock') {
                tiedRounds++;
                return ('You tied.');
            } else if (playerSelection.toLowerCase() == 'paper' && computerSelection.toLowerCase() == 'rock') {
                playerWins++;
                return ('You win, paper beats rock.');
            } else if (playerSelection.toLowerCase() == 'paper' && computerSelection.toLowerCase() == 'scissors') {
                computerWins++;
                return ('You lose, Scissors beats paper.');
            } else if (playerSelection.toLowerCase() == 'paper' && computerSelection.toLowerCase() == 'paper') {
                tiedRounds++;
                return ('You tied.');
            } else if (playerSelection.toLowerCase() == 'scissors' && computerSelection.toLowerCase() == 'paper') {
                playerWins++;
                return ('You win, scissors beats paper.');
            } else if (playerSelection.toLowerCase() == 'scissors' && computerSelection.toLowerCase() == 'rock') {
                computerWins++;
                return ('You lose, rock beats scissors.');
            } else if (playerSelection.toLowerCase() == 'scissors' && computerSelection.toLowerCase() == 'scissors') {
                tiedRounds++;
                return ('You tied.');
            }
        }
        console.log('--------------------------')
        console.log(playRound(playerSelection, computerSelection))
        totalRounds++;
        console.log('Player: ' + playerWins + '.' + ' // ' + 'Computer: ' + computerWins + '.' +' // '+ 'Tied: ' + tiedRounds + '.'  )
    }
}
game()