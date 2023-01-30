const input = document.querySelector("#validation-input");
const inputLength = Number(input.getAttribute("data-length"));

// input.addEventListener("blur", onInputBlur);

// function onInputBlur() {
//   if (input.value.length === inputLength) {
//     input.classList.remove("invalid");
//     return input.classList.add("valid");
//   }
//   return input.classList.add("invalid");
// }


input.addEventListener("blur", onInputBlur);
function onInputBlur() { 
  input.classList.remove('valid', 'invalid');
  if (input.value.length === inputLength) { 
    input.classList.add("valid"); 
 } else{
  input.classList.add("invalid")};
}