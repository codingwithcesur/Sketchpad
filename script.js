// function hover(event) {
//   event.target.style.backgroundColor = "blue";

//   setTimeout(function () {
//     event.target.style.backgroundColor = "blue";
//   }, 50);
// }
const whiteBtn = document.querySelector(".white-btn");
const blackBtn = document.querySelector(".black-btn");
const resetBtn = document.querySelector(".reset-btn");
let currentColor;
let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);
whiteBtn.addEventListener("click", () => {
  currentColor = "white";
  addDivs(50);
});
blackBtn.addEventListener("click", () => {
  currentColor = "black";
  addDivs(50);
});
// resetBtn.addEventListener("click", () => {
//   let divAll = document.querySelectorAll("div");
//   divAll.remove();
//   addDivs(50);
// });
function colorPicker(event) {
  if (event.type === "mouseover" && !mouseDown) {
    return;
  } else {
    event.target.style.backgroundColor = currentColor;
  }
}
function addDivs(divNumber) {
  const container = document.querySelector(".grid-container");
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
