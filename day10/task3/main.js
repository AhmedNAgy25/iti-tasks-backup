const box1 = document.getElementById("box1");
const box2 = document.getElementById("box2");

let draggedItem = null;
//
//* enable drag box1
box1.querySelectorAll(".item").forEach((item) => {
  item.addEventListener("dragstart", () => {
    draggedItem = item;
    //let
  });
});

//* enable drop box2
box2.addEventListener("dragover", (e) => {
  e.preventDefault();
});

box2.addEventListener("drop", (e) => {
  e.preventDefault();
  if (draggedItem && draggedItem.parentElement === box1) {
    //* set at top
    box2.prepend(draggedItem, box2.firstChild);
  }
  draggedItem = null;
});
