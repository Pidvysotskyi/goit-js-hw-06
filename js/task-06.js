const inputFieldReff = document.querySelector("#validation-input");

inputFieldReff.addEventListener("blur", onInputFieldBlur);

function onInputFieldBlur({ currentTarget }) {
  const requiredLength = Number(currentTarget.getAttribute("data-length"));
  if (currentTarget.value.length !== requiredLength) {
    currentTarget.classList.remove("valid");
    currentTarget.classList.add("invalid");
  } else {
    currentTarget.classList.remove("invalid");
    currentTarget.classList.add("valid");
  }
}
