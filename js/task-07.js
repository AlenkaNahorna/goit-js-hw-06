const inputSizeControl = document.querySelector("#font-size-control");
const textValue = document.querySelector("#text");

inputSizeControl.value = 0;

const textSizeChenge = (event) => {
  textValue.style.fontSize = `${event.currentTarget.value}px`;
};

inputSizeControl.addEventListener("input", textSizeChenge);
