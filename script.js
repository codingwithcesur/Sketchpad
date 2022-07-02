// function hover(event) {
//   event.target.style.backgroundColor = "blue";

//   setTimeout(function () {
//     event.target.style.backgroundColor = "blue";
//   }, 50);
// }
const container = document.querySelector(".grid-container");
const whiteBtn = document.querySelector(".white-btn");
const blackBtn = document.querySelector(".black-btn");
const resetBtn = document.querySelector(".reset-btn");
let nodesToRemove = container.getElementsByClassName("grid");
function clearNodes() {
  for (let i = nodesToRemove.length - 1; i >= 0; i--) {
    let singleNode = nodesToRemove[i];
    container.removeChild(singleNode);
  }
}
let currentColor;
let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);
whiteBtn.addEventListener("click", () => {
  currentColor = "white";
  if (nodesToRemove.length < 50) {
    addDivs(50);
  }
});
blackBtn.addEventListener("click", () => {
  currentColor = "black";
  if (nodesToRemove.length < 50) {
    addDivs(50);
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
function addDivs(divNumber) {
  let styleSheet = document.styleSheets[0];
  let divNeeded = divNumber * divNumber;
  let sizeCalc = `${650 / divNumber}`;
  styleSheet.insertRule(`.grid {height:${sizeCalc}px;}`, 0);
  styleSheet.insertRule(`.grid {width:${sizeCalc}px;}`, 0);
  for (let i = 0; i < divNeeded; i++) {
    let div = document.createElement("div");
    div.classList.add("grid");
    // div.addEventListener("mouseover", hover);
    div.addEventListener("mouseover", colorPicker);
    div.addEventListener("mousedown", colorPicker);
    container.appendChild(div);
  }
}
