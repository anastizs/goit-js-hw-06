const input = document.querySelector('#validation-input')
const inputLength =  Number(input.getAttribute('data-length'));

input.addEventListener('blur', onInputBlur);

function onInputBlur(){
  input.value.length !== inputLength ? input.classList.add('invalid'):input.classList.add('valid');
}