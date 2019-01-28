const defaultSpace = '&#183;',
      spaces       = document.getElementsByClassName("space"),
      score        = {x: 0, o: 0},
      blankSpace   = '&nbsp;',
      winLogic     = [[0,1,2],
                      [3,4,5],
                      [6,7,8],
                      [0,3,6],
                      [1,4,7],
                      [2,5,8],
                      [0,4,8],
                      [2,4,6]];
let   turn         = true; // True is for X, False is for O

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
}

function onClick () {
  if (this.innerHTML === 'X' || this.innerHTML === 'O') {
    document.getElementById("messages").innerHTML = 'That is an invalid move. Please try another space.';
  } else {
    placeInSpace(this);
    changeTurn();
  }
}

function resetBoard () {
  document.getElementById("messages").innerHTML = 'It is X\'s turn.';
  turn = true;
  for (let item of spaces) {
    item.innerHTML = defaultSpace;
  }
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
    if (spaces[combo[0]].innerHTML === spaces[combo[1]].innerHTML && spaces[combo[1]].innerHTML === spaces[combo[2]].innerHTML) {
      return true;
    }
  }
  return false;
}

initialize();