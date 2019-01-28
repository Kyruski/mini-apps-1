const spaces = document.getElementsByClassName('space');
const winLogic = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
const player1 = { name: '', score: 0, playerNumber: 1 };
const player2 = { name: '', score: 0, playerNumber: 2 };
let turn = true;// True is for X, False is for O
let gameOver = false;
let turnNumber = 1;
let x = player1;
let o = player2;

function promptPlayers () {
  const player1 = prompt('Player 1, please enter your name: ');
  alert(`${player1} has joined`);
  const player2 = prompt('Player 2, please enter your name: ');
  alert(`${player2} has joined`);
  return [player1, player2];
}

function writeMessage(text) {
  document.getElementById('messages').innerHTML = text;
}

function initialize() {
  [player1.name, player2.name] = promptPlayers();
  document.getElementById('player1').innerHTML = `${player1.name}`;
  document.getElementById('player2').innerHTML = `${player2.name}`;
  writeMessage(`It is ${player1.name}'s turn.`);
  for (const item of spaces) {
    item.addEventListener('click', onClick);
  }
  document.getElementById('reset-board').addEventListener('click', resetBoard);
}

function swapPlayers () {
  let temp = x;
  x = o;
  o = temp;
}

function placeInSpace(location) {
  location.innerHTML = (turn) ? 'X' : 'O';
}

function changeTurn() {
  if (turnNumber === 9) {
    writeMessage('It\'s a tie! Game over.');
    gameOver = true;
  } else {
    turnNumber++;
    turn = !turn;
    const text = (turn) ? `It is ${x.name}'s turn.` : `It is ${o.name}'s turn.`;
    writeMessage(text);
  }
}

function onWin(player) {
  const winner = (player === 'X') ? x : o;
  writeMessage(`${winner.name} has won!`);
  winner.score++;
  if (winner.playerNumber === 1) {
    document.getElementById('player1-score').innerHTML = `${winner.score}`;
  } else {
    document.getElementById('player2-score').innerHTML = `${winner.score}`;
  }
  gameOver = true;
  if (player === 'O') {
    swapPlayers();
  }
}

function onClick() {
  if (gameOver) {
    writeMessage('The game is over, please reset the board to play again.');
  } else if (this.innerHTML !== '') {
    writeMessage('That is an invalid move. Please try another space.');
  } else {
    placeInSpace(this);
    const winStatus = checkForWin();
    if (winStatus[0]) {
      onWin(winStatus[1]);
    } else {
      changeTurn();
    }
  }
}

function resetBoard() {
  writeMessage(`It is ${x.name}'s turn.`);
  turn = true;
  for (const item of spaces) {
    item.innerHTML = '';
  }
  gameOver = false;
  turnNumber = 1;
}

function makeBoardArray() {
  const boardArray = [];
  for (const item of spaces) {
    boardArray.push(item.innerHTML);
  }
  return boardArray;
}

function checkForWin() {
  const boardArray = makeBoardArray();
  for (const combo of winLogic) {
    if (boardArray[combo[0]] === boardArray[combo[1]] && boardArray[combo[1]] === boardArray[combo[2]] && boardArray[combo[0]] !== '') {
      return [true, boardArray[combo[0]]];
    }
  }
  return [false];
}

initialize();
