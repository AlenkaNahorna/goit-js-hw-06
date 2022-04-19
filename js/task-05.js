const nameInputValue = document.querySelector("#name-input");
const nameOutputValue = document.querySelector("#name-output");

const onInputChange = (event) => {
  if (event.currentTarget.value === "") {
    nameOutputValue.textContent = "Anonymus";
  }
  nameOutputValue.textContent = event.currentTarget.value;
};

nameInputValue.addEventListener("input", onInputChange);
