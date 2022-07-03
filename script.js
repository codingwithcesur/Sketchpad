// function hover(event) {
//   event.target.style.backgroundColor = "blue";

//   setTimeout(function () {
//     event.target.style.backgroundColor = "blue";
//   }, 50);
// }
let styleSheet = document.styleSheets[0];
let container = document.querySelector(".grid-container");
const whiteBtn = document.querySelector(".white-btn");
const blackBtn = document.querySelector(".black-btn");
const resetBtn = document.querySelector(".reset-btn");
const gridSizeBtn = document.querySelector(".grid-size-btn");
let nodesToRemove = document.getElementsByClassName("grid");
let currentColor;
let mouseDown = false;
container.onmousedown = () => (mouseDown = true);
container.onmouseup = () => (mouseDown = false);

function generateInput() {
  let getInputSize = document.querySelector(".grid-size-input").value;
  let inputText = document.querySelector(".input-text");
  if (getInputSize >= 2 && getInputSize <= 100) {
    if (nodesToRemove.length > getInputSize * 1) {
      for (let i = nodesToRemove.length - 1; i >= 0; i--) {
        let singleNode = nodesToRemove[i];
        // singleNode.classList.remove("grid");
        container.removeChild(singleNode);
      }
    }
    inputText.textContent = "";
    addDivs(getInputSize);
  } else {
    inputText.textContent =
      "Enter a number between 2 and 100 (2 means 2x2 grid)";
    return (getInputSize = "error");
  }
}
function clearNodes() {
  for (let i = nodesToRemove.length - 1; i >= 0; i--) {
    let singleNode = nodesToRemove[i];
    singleNode.style.backgroundColor = "white";
  }
}
function addDivs(divNumber) {
  let divNeeded = divNumber * divNumber;
  let sizeCalc = `${650 / divNumber}`;

  // styleSheet.insertRule(`.grid {height:${sizeCalc}px;}`, 0);
  // styleSheet.insertRule(`.grid {width:${sizeCalc}px;}`, 0);
  for (let i = 0; i < divNeeded; i++) {
    let div = document.createElement("div");
    div.style.width = `${sizeCalc}px`;
    div.style.height = `${sizeCalc}px`;
    div.classList.add("grid");
    // div.addEventListener("mouseover", hover);
    div.addEventListener("mouseover", colorPicker);
    div.addEventListener("mousedown", colorPicker);
    container.appendChild(div);
  }
}

whiteBtn.addEventListener("click", () => {
  currentColor = "white";
  if (nodesToRemove.length < getInputNumber) {
    addDivs(getInputNumber);
  }
});
blackBtn.addEventListener("click", () => {
  currentColor = "black";
  if (nodesToRemove.length < getInputNumber) {
    addDivs(getInputNumber);
  }
});
resetBtn.addEventListener("click", clearNodes);
function colorPicker(event) {
  if (event.type === "mouseover" && !mouseDown) {
    return;
  } else {
    event.target.style.backgroundColor = currentColor;
  }
}
gridSizeBtn.addEventListener("click", generateInput);
