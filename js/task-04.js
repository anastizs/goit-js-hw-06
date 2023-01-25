const counterValue = function ({} = {}) {
  this._value = 0;
  this._step = 1;
  this._refs = this._getRefs();

  this._bindEvents();
  this.updateValueUI();
};

counterValue.prototype._getRefs = function () {
  const refs = {};
  refs.container = document.querySelector('#counter');
  refs.incrementBtn = refs.container.querySelector('button[data-action="increment"]');
  refs.decrementBtn = refs.container.querySelector('button[data-action="decrement"]');
  refs.value = refs.container.querySelector("#value");
    
  return refs;
};

counterValue.prototype._bindEvents = function () {
  this._refs.incrementBtn.addEventListener('click', () => {
    this.increment();
    this.updateValueUI();
  });

  this._refs.decrementBtn.addEventListener('click', () => {
    this.decrement();
    this.updateValueUI();
  });
};

counterValue.prototype.updateValueUI = function () {
  this._refs.value.textContent = this._value;
};

counterValue.prototype.increment = function () {
  this._value += this._step;
};

counterValue.prototype.decrement = function () {
  this._value -= this._step;
};

new counterValue({});

