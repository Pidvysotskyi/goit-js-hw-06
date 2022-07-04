function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputReff = document.querySelector("input");
const createButtonReff = document.querySelector("[data-create]");
const destriyButtonReff = document.querySelector("[data-destroy]");
const boxesDivReff = document.querySelector("#boxes");
let inputValue = 0;

inputReff.addEventListener("change", onInputChange);
createButtonReff.addEventListener("click", onCreateButtonClick);
destriyButtonReff.addEventListener("click", onDestroyButtonClick);

function onInputChange(event) {
  inputValue = Number(event.currentTarget.value);
}

function onCreateButtonClick() {
  function createBoxes(amount) {
    const BoxesArray = [];
    let widthValue = 30;
    for (let i = 1; i <= amount; i += 1) {
      const boxMarkupElement = document.createElement("div");
      boxMarkupElement.style.width = `${widthValue}px`;
      boxMarkupElement.style.height = `${widthValue}px`;
      boxMarkupElement.style.backgroundColor = `${getRandomHexColor()}`;
      BoxesArray.push(boxMarkupElement);
      widthValue += 10;
    }

    boxesDivReff.append(...BoxesArray);
  }
  return createBoxes(inputValue);
}

function onDestroyButtonClick() {
  boxesDivReff.innerHTML = "";
}
