const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];

const ingridientsList = ingredients.map(ingridient => {
  const ingridientItem = document.createElement("li");
  ingridientItem.textContent = ingridient;
  ingridientItem.classList.add("item");
  return ingridientItem;
});

const ingridientsListMarkup = document.querySelector("#ingredients");

ingridientsListMarkup.append(...ingridientsList);
