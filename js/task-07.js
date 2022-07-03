const inputRangeReff = document.querySelector("#font-size-control");

const textReff = document.querySelector("#text");
textReff.style.fontSize = "56px";

inputRangeReff.addEventListener("change", onInputRangeChange);

function onInputRangeChange(event) {
  return (textReff.style.fontSize = `${event.currentTarget.value}px`);
}
