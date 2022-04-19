const btnDecrement = document.querySelector('[data-action="decrement"]');
const btnIncrement = document.querySelector('[data-action="increment"]');
const value = document.querySelector("#value");

let counterValue = 0;

function updateValue() {
  value.textContent = counterValue;
}

btnDecrement.addEventListener("click", () => {
  counterValue -= 1;
  updateValue();
});
btnIncrement.addEventListener("click", () => {
  counterValue += 1;
  updateValue();
});
