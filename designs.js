//User input variable
const inputHeight = document.getElementById("inputHeight");
const inputWidth = document.getElementById("inputWidth");
const colorPicker = document.getElementById("colorPicker");
const button = document.getElementById("button");

//Grid variable
const pixelCanvas = document.getElementById("pixelCanvas");

//Making grid function
function makeGrid() {
  //Reseting grid
  pixelCanvas.innerHTML = "";
  //Creating grid loop
  for (let i = 0; i < inputHeight.value; i++) {
    let gridRow = document.createElement("tr");
    pixelCanvas.appendChild(gridRow);
    for (let j = 0; j < inputWidth.value; j++) {
      let gridCell = document.createElement("td");
      gridRow.appendChild(gridCell);
      //Coloring logic
      gridCell.addEventListener("click", function (e) {
        console.log(`pointer event x${e.x} y${e.y}`);
        console.log(colorPicker.value);
        if (gridCell.hasAttribute("style")) {
          e.target.removeAttribute("style");
        } else {
          e.target.style.backgroundColor = colorPicker.value;
        }
      });
    }
  }
  console.log(`creating grid`);
}

//submit button click event listener
button.addEventListener("click", function (click) {
  click.preventDefault();
  makeGrid();
  colorPicker.value = "#000000";
  button.value = "Reset";
});
