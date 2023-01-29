const btnDecrement = document.querySelector("[data-action='decrement']");
const btnIncrement = document.querySelector("[data-action='increment']");
const totalValue = document.querySelector("#value");

let counterValue = 0;

btnDecrement.addEventListener("click", makeClickBtnDecrement);
btnIncrement.addEventListener("click", makeClickBtnIncrement);

function makeClickBtnDecrement() {
  counterValue -= 1;
  return addMarkup(counterValue);
}
function makeClickBtnIncrement() {
  counterValue += 1;
  return addMarkup(counterValue);
}
function addMarkup(value) {
  return (totalValue.innerHTML = `${value}`);
}
