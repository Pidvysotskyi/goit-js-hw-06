const categoriesReff = document.querySelector("#categories");

const numberOfCategories = categoriesReff.children.length;

console.log(`Number of categories: ${numberOfCategories}`);

for (const category of categoriesReff.children) {
  const categoryName = category.querySelector("h2").textContent;
  const categoryElements = category.querySelectorAll("li");

  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${categoryElements.length}`);
}
