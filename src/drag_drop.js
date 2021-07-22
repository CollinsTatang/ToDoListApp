/* --- This file contains the functions required to create the Drag&Drop effect    */
let toLiIndex = null;

function allowDrop(e) {
  e.preventDefault();
  toLiIndex = e.currentTarget.id;
}

function drag() {
  // e.dataTransfer.setData("text", e.currentTarget.id);
}

function drop(oldIndex, newIndex) {
  const data = `div${oldIndex}`;
  const oldDiv = global.document.getElementById(data);
  const oldLi = global.document.getElementById(parseInt(oldIndex));
  const newLi = global.document.getElementById(parseInt(newIndex));
  const newDiv = newLi.getElementsByTagName("div")[0];

  const oldDivData = oldIndex;
  const newDivData = newIndex;

  oldDiv.data = parseInt(newDivData);
  newDiv.data = parseInt(oldDivData);
  oldLi.appendChild(newDiv);
  oldLi.removeChild(oldDiv);
  newLi.appendChild(oldDiv);
  global.update();
}

//export { allowDrop, drag, drop };
module.exports = { allowDrop, drag, drop };