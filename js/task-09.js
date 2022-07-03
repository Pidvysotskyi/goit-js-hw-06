function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorButtonReff = document.querySelector(".change-color");

const bodyReff = document.querySelector("body");
bodyReff.style.backgroundColor = "transparent";

const colorSpanReff = document.querySelector(".color");

changeColorButtonReff.addEventListener("click", onChangeColorButtonClick);

function onChangeColorButtonClick() {
  bodyReff.style.backgroundColor = `${getRandomHexColor()}`;
  colorSpanReff.textContent = `${getRandomHexColor()}`;
}
