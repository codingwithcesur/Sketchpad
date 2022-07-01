// Add function that takes input, creates ${input} number of divs inside the container.
// All the divs should share same space filling the container fully.
function hover(event) {
  event.target.style.backgroundColor = "blue";

  setTimeout(function () {
    event.target.style.backgroundColor = "";
  }, 150);
}
// function colorPicker(event) {
//   event.classList.add("grid-blue");
// }
// div.addEventListener("click"), colorPicker;
function addDivs(divNumber) {
  const container = document.querySelector(".container");
  let styleSheet = document.styleSheets[0];
  let divNeeded = divNumber * divNumber;
  let sizeCalc = `${650 / divNumber}`;

  styleSheet.insertRule(`.grid {height:${sizeCalc}px;}`, 0);
  styleSheet.insertRule(`.grid {width:${sizeCalc}px;}`, 0);

  for (let i = 0; i < divNeeded; i++) {
    let div = document.createElement("div");
    container.appendChild(div);
    div.classList.add("grid");
    div.addEventListener("mouseover", hover);
  }
}
addDivs(40);
