
const input = document.querySelector('#validation-input');
  
input.addEventListener('blur', onInputBlur);


function onInputBlur() {
//   console.log('Инпут потерял фокус - событие blur');
  if(input.value.length === 6){
    input.classList.add('#validation-input.valid');

  } else input.classList.add('#validation-input.invalid');
  console.log(input);
}


