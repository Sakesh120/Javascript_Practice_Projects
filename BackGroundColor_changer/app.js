const bodyColor = document.querySelector("body");
const button = document.querySelector("button");

function random() {
  let colorValue;
  colorValue = Math.floor(Math.random() * 256);
  return colorValue;
}

button.addEventListener("click", () => {
  bodyColor.style.background = `linear-gradient(${random()}deg,  rgb(${random()},${random()},${random()}), rgb(${random()},${random()},${random()}))`;
});
