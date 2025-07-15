const canvas = document.getElementById("elcanvas");
const ctx = canvas.getContext("2d");
const colorPicker = document.getElementById("colorPicker");

const drawCircles = () => {
  const selectedColor = colorPicker.value;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.strokeStyle = selectedColor;

  for (let i = 0; i < 40; i++) {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const radius = 20;

    ctx.beginPath(); //need some explain
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.stroke();
  }
};
drawCircles();
