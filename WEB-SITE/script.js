const display = document.getElementById('display');

function appendValue(value) {
  if (display.value === 'Error') {
    display.value = '';
  }

  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    if (display.value.trim() === '') return;

    const expression = display.value;

    if (!/^[0-9+\-*/.() ]+$/.test(expression)) {
      display.value = 'Error';
      setTimeout(clearDisplay, 1500);
      return;
    }

    display.value = Function('"use strict"; return (' + expression + ')')();
  } catch {
    display.value = 'Error';
    setTimeout(clearDisplay, 1500);
  }
}