//DOM Elements
let kgInput = document.querySelector('#kgInput');
let gOutput = document.querySelector('#gOutput');
let pOutput = document.getElementById('pOutput');
let zOutput = document.getElementById('zOutput');
//Listening to events
kgInput.addEventListener('input', event => {
    let kg = event.target.value;
    gOutput.innerHTML = `${kg * 1000} g`;
    pOutput.innerHTML = `${kg * 2.20462262} lb`;
    zOutput.innerHTML = `${kg * 35.2739619} oz`;
});