const defaultSpace = '&#183;',
      spaces       = document.getElementsByClassName("space"),
      score        = {x: 0, o: 0};

function initialize () {
  for (let item of spaces) {
    item.addEventListener("click", onClick);
  }
  
  document.getElementById("reset-board").addEventListener("click", resetBoard);
}

function placeInSpace (location, player) {
  location.innerHTML = player;
}

function onClick () {
  if (this.value === 'X' || this.value === 'O') {
    document.getElementById("messages").innerHTML = 'That is an invalid move. Please try another space.';
  } else {
    document.getElementById("messages").innerHTML = 'I got clicked';
  }
}

function resetBoard () {
  for (let item of spaces) {
    item.innerHTML = defaultSpace;
    console.log('set space: ', item, ' to ', defaultSpace);
  }
}

initialize();