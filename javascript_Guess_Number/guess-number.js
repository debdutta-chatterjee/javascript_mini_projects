// setInterval(function(){
//   console.log(parseInt(Math.random()*100+1))
// },1000)

let num = parseInt(Math.random() * 100 + 1);
console.log(num);
const submit = document.querySelector('#subt');
const input = document.querySelector('#guessField');
const prevGuess = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuesses = [];
let numGuess = 1;
let playgame = true;

if (playgame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(input.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess) || guess > 100 || guess < 1) {
    alert('Please enter valid number!');
  } else {
    prevGuesses.push(guess);
    if (numGuess >= 10) {
      displayGuess(guess);
      displayMessage(`Game over. Random num ${num}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === num) {
    displayMessage('You guessed it right!');
    endGame();
  } else if (guess < num) {
    displayMessage('You guessed it low!');
  } else if (guess > num) {
    displayMessage('You guessed it high!');
  }
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function displayGuess(guess) {
  input.value = '';
  prevGuess.innerHTML = `${prevGuesses}`;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}
function newGame() {
  const newGameBtn = document.querySelector('#newGame');
  newGameBtn.addEventListener('click', function (e) {
    prevGuesses = [];
    numGuess = 1;
    num = parseInt(Math.random() * 100 + 1);
    prevGuess.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess}`;
    input.removeAttribute('disabled');
    startOver.removeChild(p);
    playgame = true;
  });
}
function endGame() {
  input.value = '';
  input.setAttribute('disabled', '');
  prevGuess.innerHTML = '';
  remaining.innerHTML = '';
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start again!</h2>`;
  startOver.appendChild(p);
  playgame = false;
  newGame();
}
