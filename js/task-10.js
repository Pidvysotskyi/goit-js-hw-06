function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputReff = document.querySelector("input");
const createButtonReff = document.querySelector("[data-create]");
const destriyButtonReff = document.querySelector("[data-destroy]");
let inputValue = 0;

inputReff.addEventListener("change", onInputChange);
createButtonReff.addEventListener("click", onCreateButtonClick);
destriyButtonReff.addEventListener("click", onDestroyButtonClick);

function onInputChange(event) {
  inputValue = Number(event.currentTarget.value);
}

function onCreateButtonClick() {
  function createBoxes(amount) {
    console.log(amount);
  }

  return createBoxes(inputValue);
}

function onDestroyButtonClick() {
  console.log(inputValue);
}
