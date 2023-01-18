const menuItemsmenuRaf = document.querySelectorAll(".item");
console.log("Number of categories: ", menuItemsmenuRaf.length);


for(const list of menuItemsmenuRaf){
const titleRaf = list.querySelector("h2");
console.log('Category: ', titleRaf.textContent);

const listItemsRaf = list.querySelectorAll("li");
console.log('Elements: ', listItemsRaf.length);
};
