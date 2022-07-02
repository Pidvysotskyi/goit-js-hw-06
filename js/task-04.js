const decrementButtonReff = document.querySelector('[data-action="decrement"]');
const incrementButtonReff = document.querySelector('[data-action="increment"]');
const valueReff = document.querySelector("#value");

let counterValue = 0;

decrementButtonReff.addEventListener("click", onDecrementButtonClick);

incrementButtonReff.addEventListener("click", onIncrementButtonClick);

function onDecrementButtonClick() {
  counterValue -= 1;
  return (valueReff.textContent = counterValue);
}
function onIncrementButtonClick() {
  counterValue += 1;
  return (valueReff.textContent = counterValue);
}
