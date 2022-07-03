const inputFieldReff = document.querySelector("#validation-input");

inputFieldReff.addEventListener("blur", onInputFieldBlur);

function onInputFieldBlur(event) {
  if (event.currentTarget.value.length !== Number(event.currentTarget.getAttribute("data-length"))) {
    event.currentTarget.classList.add("invalid");
  } else {
    event.currentTarget.classList.remove("invalid");
    event.currentTarget.classList.add("valid");
  }
}
