const loginFormReff = document.querySelector(".login-form");

loginFormReff.addEventListener("submit", onLoginFormSubmit);
const submitResult = {};

function onLoginFormSubmit(event) {
  event.preventDefault();
  const emailInputValue = event.currentTarget.elements.email.value;
  const passwordInputValue = event.currentTarget.elements.password.value;
  const messasge = "Please, fill the all fields in a form";
  if (emailInputValue === "" || passwordInputValue === "") {
    alert(messasge);
  } else {
    submitResult[event.currentTarget.elements.email.name] = `${emailInputValue}`;
    submitResult[event.currentTarget.elements.password.name] = `${passwordInputValue}`;
    console.log(submitResult);
  }
  event.currentTarget.reset();
}
