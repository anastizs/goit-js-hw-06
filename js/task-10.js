const refs = {
  input: document.querySelector('input'),
  buttonCreate: document.querySelector('[data-create]'),
  buttonDestroy: document.querySelector('[data-destroy]'),
  boxed: document.querySelector('#boxes'),
};

refs.buttonCreate.addEventListener('click', createBoxes);
refs.buttonDestroy.addEventListener('click', destroyBoxes);



function createBoxes(){
const numberInputValue = Number(refs.input.value);
  for (let i = 1; i <= numberInputValue; i+=1) {
	const div = document.createElement('div');
	div.style.width = '30px';
  div.style.height = '30px';
  div.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  
	refs.boxed.append(div);
 
}
};

function getRandomHexColor(event) {
  const colorRandom = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function destroyBoxes(event){
  refs.boxed.remove(document.querySelector('div'));
}
