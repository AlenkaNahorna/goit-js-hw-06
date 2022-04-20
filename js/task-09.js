function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector("body");
const buttonEl = document.querySelector(".change-color");
const changeColor = document.querySelector(".color");

buttonEl.addEventListener("click", onChangeColor);

function onChangeColor() {
  const color = getRandomHexColor();
  body.style.backgroundColor = color;
  changeColor.textContent = color;
}
