function clearDisplay() {
  document.calc.display.value = "";
}

function deleteLast() {
  var value = document.calc.display.value;
  document.calc.display.value = value.substr(0, value.length - 1);
}

function appendCharacter(character) {
  document.calc.display.value += character;
}

function calculateResult() {
  try {
    document.calc.display.value = eval(document.calc.display.value);
  } catch (e) {
    alert("Invalid expression");
  }
}
