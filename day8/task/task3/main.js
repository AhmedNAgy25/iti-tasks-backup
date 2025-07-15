const imges = [
  "../images/image1.jpg",
  "../images/image2.jpg",
  "../images/image3.jpg",
  "../images/image4.jpg",
];
let index = 0;
let timer;
const img = document.getElementById("slider");

const change = function (action) {
  if (action === "next" && index < imges.length - 1) {
    index++;
  } else if (action === "previous" && index > 0) {
    index--;
  } else if (action === "slideshow") {
    clearInterval(timer);
    timer = setInterval(() => {
      index = (index + 1) % imges.length;
      img.src = imges[index];
    }, 2000);
    return;
  } else if (action === "stop") {
    clearInterval(timer);
    return;
  }
  img.src = imges[index];
};
