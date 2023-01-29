const refs = {
  body: document.querySelector("body"),
  spanColor: document.querySelector(".color"),
  buttonChange: document.querySelector(".change-color"),
};

refs.buttonChange.addEventListener("click", getRandomHexColor);

function getRandomHexColor(event) {
  const colorRandom = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  refs.spanColor.textContent = colorRandom;
  refs.body.style.backgroundColor = colorRandom;
}
