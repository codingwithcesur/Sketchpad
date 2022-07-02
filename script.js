// function hover(event) {
//   event.target.style.backgroundColor = "blue";

//   setTimeout(function () {
//     event.target.style.backgroundColor = "blue";
//   }, 50);
// }
let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);
function colorPicker(event) {
  if (event.type === "mouseover" && !mouseDown) {
    return;
  } else {
    event.target.style.backgroundColor = "green";
  }
}
function addDivs(divNumber) {
  const container = document.querySelector(".container");

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
addDivs(50);
