const input = document.querySelector('#validation-input')


input.addEventListener('focus', onInputFocus);
input.addEventListener('blur', onInputBlur);

function onInputFocus() {}

function onInputBlur() {
  if(input.value.length !== 6){
    input.classList.add('invalid');
  } 
    input.classList.add('valid');
}