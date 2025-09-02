const poundsInput = document.getElementById('numberInput');
const gramsOutput = document.getElementById('gramsOutput');
const kgOutput = document.getElementById('kgOutput');
const ouncesOutput = document.getElementById('ozOutput');

poundsInput.addEventListener('input', calculate);

function calculate(e) {
    let pounds = e.target.value;
    gramsOutput.innerHTML = pounds * 453.592;
    kgOutput.innerHTML = pounds / 2.205;
    ouncesOutput.innerHTML = pounds * 16;
}