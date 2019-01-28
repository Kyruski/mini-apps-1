const defaultSpace = '&#183;';


const spaces = document.getElementsByClassName("space")
for (let item of spaces) {
  item.addEventListener("click", onClick);
}

document.getElementById("reset-board").addEventListener("click", resetBoard);

function placeInSpace (location, player) {
  location.value = player;
}

function onClick () {
  if (this.value === 'X' || this.value === 'O') {
    document.getElementsByID("messages").value = 'That is an invalid move. Please try another space.';
  } else {
    console.log('I got clicked');
  }
}

function resetBoard () {
  for (let item of spaces) {
    item.value = 'defaultSpace';
    console.log('set space: ', item, ' to ', defaultSpace);
  }
}