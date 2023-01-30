const categoriesAll = document.querySelectorAll(".item");
console.log("Number of categories: ", categoriesAll.length);

for (const category of categoriesAll) {
  const h2 = category.querySelector("h2");
  console.log("Category: ", h2.textContent);
  const li = category.querySelectorAll("li");
  console.log("Elements: ", li.length);
}
