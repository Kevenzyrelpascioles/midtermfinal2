let targetNumber;
let chances = 3;

function startGame() {
    targetNumber = Math.floor(Math.random() * 10) + 1;
    chances = 3;
    document.getElementById('retryButton').disabled = true;
    document.getElementById('feedback').innerText = '';
}

function checkGuess() {
    const userGuessInput = document.getElementById('guess');

    // Check if userGuessInput is defined and not null
    if (!userGuessInput || typeof userGuessInput.value === 'undefined' || userGuessInput.value.trim() === '') {
        alert('Please enter a valid number between 1 and 10.');
        return;
    }

    const userGuess = parseInt(userGuessInput.value);

    // Check if userGuess is a valid number
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 10) {
        alert('Please enter a valid number between 1 and 10.');
        return;
    }

    chances--;

    if (userGuess === targetNumber) {
        document.getElementById('feedback').innerText = 'Congratulations! You guessed the correct number.';
        document.getElementById('retryButton').disabled = false;
    } else if (userGuess < targetNumber) {
        document.getElementById('feedback').innerText = `Wrong guess. Go higher. ${chances} chances remaining.`;
    } else {
        document.getElementById('feedback').innerText = `Wrong guess. Go lower. ${chances} chances remaining.`;
    }

    if (chances === 0) {
        document.getElementById('feedback').innerText = `Sorry, you ran out of chances. The correct number was ${targetNumber}.`;
        document.getElementById('retryButton').disabled = false;
    }
}

function retryGame() {
    startGame();
}
