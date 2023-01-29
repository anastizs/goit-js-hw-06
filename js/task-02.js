const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const list = document.querySelector("#ingredients");

const listEl = (ingredients) => {
  return ingredients.map((ingredient) => {
    const itemEl = document.createElement("li");
    itemEl.classList.add("item");
    itemEl.textContent = ingredient;

    return itemEl;
  });
};

const elements = listEl(ingredients);
list.append(...elements);
