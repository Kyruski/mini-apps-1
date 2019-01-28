



function placeInSpace (location, player) {
  location.value = player;
}

function onClick () {
  if (this.value === 'X' || this.value === 'O') {
    document.getElementsByID("messages").value = 'That is an invalid move. Please try another space.';
  }
}