const choices = ['stone', 'paper', 'scissors'];
const buttons = document.querySelectorAll('.choice-btn');     
const resultDiv = document.getElementById('result');
const playerScoreSpan = document.getElementById('player-score');
const computerScoreSpan = document.getElementById('computer-score');

let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random()*choices.length);
  return choices[randomIndex];
}

function determineWinner(player, computer) {
  if (player === computer)    return 'tie';

  if (
    (player === 'stone' && computer === 'scissors') ||
    (player === 'paper' && computer === 'stone') ||
    (player === 'scissors' && computer === 'paper')
  ) {
    return 'player';
  }
  return 'computer';
}

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const playerChoice = button.getAttribute('data-choice');
    const computerChoice = getComputerChoice();
    const winner = determineWinner(playerChoice, computerChoice);

    let message = `You chose ${playerChoice}. Computer chose ${computerChoice}. `;

    if (winner === 'tie') {
      message += "It's a tie.";
    } else if (winner === 'player') {
      message += "You win.";
      playerScore++;
    } else {
      message += "Computer wins.";
      computerScore++;
    }

    resultDiv.textContent = message;
    playerScoreSpan.textContent = playerScore;
    computerScoreSpan.textContent = computerScore;
  });
});
