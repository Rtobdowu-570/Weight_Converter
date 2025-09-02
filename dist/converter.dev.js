"use strict";

var poundsInput = document.getElementById('numberInput');
var gramsOutput = document.getElementById('gramsOutput');
var kgOutput = document.getElementById('kgOutput');
var ouncesOutput = document.getElementById('ozOutput');
document.querySelector('.output').style.visibility = 'hidden';
poundsInput.addEventListener('input', calculate);

function calculate(e) {
  document.querySelector('.output').style.visibility = 'visible';
  var pounds = e.target.value;
  gramsOutput.innerHTML = pounds * 453.592;
  kgOutput.innerHTML = pounds / 2.205;
  ouncesOutput.innerHTML = pounds * 16;
}
//# sourceMappingURL=converter.dev.js.map
