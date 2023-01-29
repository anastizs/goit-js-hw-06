const refs = {
  input: document.querySelector("#name-input"),
  nameLabel: document.querySelector("#name-output"),
};

refs.input.addEventListener("input", onInputChange);
refs.input.addEventListener("blur", onInputBlur);

function onInputChange(event) {
  refs.nameLabel.textContent = event.currentTarget.value;
}

function onInputBlur(event) {
  if (refs.input.value === "") {
    refs.nameLabel.textContent = "Anonymous";
  }
}
