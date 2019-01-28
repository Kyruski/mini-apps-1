const defaultSpace = '&#183;',
      spaces       = document.getElementsByClassName("space"),
      score        = {x: 0, o: 0},
      blankSpace   = '&nbsp;';
let turn = true; // True is for X, False is for O

function initialize () {
  for (let item of spaces) {
    item.addEventListener("click", onClick);
  }
  document.getElementById("reset-board").addEventListener("click", resetBoard);
}

function placeInSpace (location) {
  location.innerHTML = (turn) ? 'X' : 'O';
}

function onClick () {
  if (this.innerHTML === 'X' || this.innerHTML === 'O') {
    document.getElementById("messages").innerHTML = 'That is an invalid move. Please try another space.';
  } else {
    placeInSpace(this);
    turn = !turn;
    document.getElementById("messages").innerHTML = (turn) ? 'It is X\'s turn.' : 'It is O\'s turn.';
  }
}

function resetBoard () {
  document.getElementById("messages").innerHTML = 'It is X\'s turn.';
  turn = true;
  for (let item of spaces) {
    item.innerHTML = defaultSpace;
  }
}

initialize();