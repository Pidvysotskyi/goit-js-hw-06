const nameInputReff = document.querySelector("#name-input");
const nameOutputReff = document.querySelector("#name-output");

nameInputReff.addEventListener("input", onInputChange);

function onInputChange(event) {
  if (event.currentTarget.value === "") {
    return (nameOutputReff.textContent = "Anonymous");
  }

  return (nameOutputReff.textContent = event.currentTarget.value);
}
