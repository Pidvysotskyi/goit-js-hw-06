const categoriesReff = document.querySelectorAll("li.item");

const numberOfCategories = categoriesReff.length;

console.log(`Number of categories: ${numberOfCategories}`);

categoriesReff.forEach(category => {
  const categoryName = category.querySelector("h2").textContent;
  const categoryElementsNumbers = category.querySelectorAll("li").length;

  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${categoryElementsNumbers}`);
});
