const inputEl = document.querySelector("#validation-input");
const inputElDataLenght = parseInt(inputEl.getAttribute("data-length"));

const inputCheck = (event) => {
  if (event.currentTarget.value.length === inputElDataLenght) {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
  } else {
    inputEl.classList.add("invalid");
    inputEl.classList.remove("valid");
  }
};

inputEl.addEventListener("blur", inputCheck);
