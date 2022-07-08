let board = document.querySelector(".board");
board.getElementsByClassName.gridTemplateColumns = "repeat(16, 1fr)";
board.getElementsByClassName.gridTemplateRows = "repeat(16, 1fr)";

for (let i = 0; i < 256; i++) {
  let square = document.createElement("div");
  square.style.backgroundColor = "pink";
  board.insertAdjacentElement("beforeend", square);
}
