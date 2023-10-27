function addToDisplay(value) {
  var display = document.querySelector('.display');
  display.innerHTML += value;
}

function clearDisplay() {
  var display = document.querySelector('.display');
  display.innerHTML = '';
}

function calculate() {
  var display = document.querySelector('.display');
  var result = eval(display.innerHTML);
  display.innerHTML = result;
}