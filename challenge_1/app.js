const defaultSpace = '&#183;',
      spaces       = document.getElementsByClassName("space"),
      score        = {X: 0, O: 0},
      blankSpace   = '&nbsp;',
      winLogic     = [[0,1,2],
                      [3,4,5],
                      [6,7,8],
                      [0,3,6],
                      [1,4,7],
                      [2,5,8],
                      [0,4,8],
                      [2,4,6]];
let   turn         = true, // True is for X, False is for O
      gameOver     = false,
      turnNumber   = 1;

function initialize () {
  for (let item of spaces) {
    item.addEventListener("click", onClick);
  }
  document.getElementById("reset-board").addEventListener("click", resetBoard);
}

function placeInSpace (location) {
  location.innerHTML = (turn) ? 'X' : 'O';
}

function changeTurn () {
  turn = !turn;
  document.getElementById("messages").innerHTML = (turn) ? 'It is X\'s turn.' : 'It is O\'s turn.';
  turnNumber++;
  if (turnNumber === 10) {
    document.getElementById("messages").innerHTML = 'It\'s a tie! Game over.';
    gameOver = true;
  }
}

function onWin (player) {
  document.getElementById("messages").innerHTML = `${player} has won!`;
  score[player]++;
  if (player === 'X') {
    document.getElementById("x-score").innerHTML = `${score[player]}`;
  } else {
    document.getElementById("o-score").innerHTML = `${score[player]}`;
  }
  gameOver = true;
}

function onClick () {
  if (gameOver) {
    document.getElementById("messages").innerHTML = 'The game is over, please reset the board to play again.'
  } else if (this.innerHTML === 'X' || this.innerHTML === 'O') {
    document.getElementById("messages").innerHTML = 'That is an invalid move. Please try another space.';
  } else {
    placeInSpace(this);
    let winStatus = checkForWin();
    if (winStatus[0]) {
      onWin(winStatus[1]);
    } else {
      changeTurn();
    }
  }
}

function resetBoard () {
  document.getElementById("messages").innerHTML = 'It is X\'s turn.';
  turn = true;
  for (let item of spaces) {
    item.innerHTML = defaultSpace;
  }
  gameOver = false;
  turnNumber = 1;
}

function makeBoardArray () {
  const boardArray = [];
  for (let item of spaces) {
    boardArray.push(item.innerHTML);
  }
  return boardArray;
}

function checkForWin () {
  const boardArray = makeBoardArray();
  for (let combo of winLogic) {
    if (boardArray[combo[0]] === boardArray[combo[1]] && boardArray[combo[1]] === boardArray[combo[2]] && boardArray[combo[0]] !== '·') {
      return [true, boardArray[combo[0]]];
    }
  }
  return [false];
}

initialize();
