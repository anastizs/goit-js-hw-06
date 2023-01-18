const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.querySelector("#ingredients");
for (const ingredienty of ingredients) {
  const itemEl = document.createElement("li");
  itemEl.classList.add('item');
itemEl.textContent = `${ingredienty}`;
console.log(itemEl);
list.append(itemEl);
}









// const list = document.querySelector("#ingredients");

// const markup = ingredients
//   .map((ingredienty) => `<li class="item">${ingredienty}</li>`)
//   .join("");

// console.log(markup);

// list.innerHTML = markup;
