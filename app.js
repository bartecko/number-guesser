// general variables
let minNum = 0,
    maxNum = 10,
    winNum = randomNum(),
    guessesLeft = 3;

//UI elements
const guessInput = document.getElementById('guess-num'),
    gameDiv = document.getElementById('game'),
    minNumSpan = document.querySelector('.min-num'),
    maxNumSpan = document.querySelector('.max-num'),
    submitBtn = document.getElementById('guess-btn');

//event listeners
submitBtn.addEventListener('click', game);
gameDiv.addEventListener('mousedown', function (event) {
    if (event.target.className === 'play-again') {
        window.location.reload();
    }
});
guessInput.addEventListener("keypress", function (event) {
    if (event.which != 8 && event.which != 0 && event.which < 48 || event.which > 57) {
        event.preventDefault();
    }
});

let resultP = document.getElementById('result');
let guess;


minNumSpan.innerText = minNum;
maxNumSpan.innerText = maxNum;

//generate random winning number
function randomNum() {
    return Math.round((Math.random() * 10));
}

function game(event) {
    let guess = parseInt(guessInput.value);

    if (guess == winNum) {
        message(`You guess the number! It was ${winNum}`, 'green');
        submitBtn.value = 'Play again';
        submitBtn.className = 'play-again';
    }
    else if (guessesLeft == 0) {
        message(`You lost! I am sorry :(`, 'red');
        submitBtn.value = 'Play again';
        submitBtn.className = 'play-again';
    }
    else {
        submitBtn.value = `Submit`;
        message(`Try again! Lives remaining: ${guessesLeft}`, 'red');
        guessesLeft--;
    }

}

function message(msg, color) {
    resultP.innerText = msg;
    resultP.style.color = color;
    guessInput.style.borderColor = color;
}




