const counterValue = function ({
  rootSelector,
  initialValue = 0,
  step = 1,
  onUpdate = () => null,
} = {}) {
  this._value = initialValue;
  this._step = step;
  this._refs = this._getRefs(rootSelector);

  this.onUpdate = onUpdate;

  this._bindEvents();
  this.updateValueUI();
};

counterValue.prototype._getRefs = function (rootSelector) {
  const refs = {};
  refs.container = document.querySelector(rootSelector);
  refs.incrementBtn = refs.container.querySelector('[data-action="increment"]');
  refs.decrementBtn = refs.container.querySelector('[data-action="decrement"]');
  refs.value = refs.container.querySelector('#value');
    
  return refs;
};

counterValue.prototype._bindEvents = function () {
  this._refs.incrementBtn.addEventListener('click', () => {
    console.log('counterValue.prototype._bindEvents -> this', this);
    this.increment();
    this.updateValueUI();
  });

  this._refs.decrementBtn.addEventListener('click', () => {
    console.log('counterValue.prototype._bindEvents -> this', this);
    this.decrement();
    this.updateValueUI();
  });
};

counterValue.prototype.updateValueUI = function () {
  this._refs.value.textContent = this._value;

  this.onUpdate();
};

counterValue.prototype.increment = function () {
  this._value += this._step;
};

counterValue.prototype.decrement = function () {
  this._value -= this._step;
};

new counterValue({
  rootSelector: '#counter',
  step: 1,
  initialValue: 0,
});

