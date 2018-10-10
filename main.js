//DOM Elements
let kgInput = document.querySelector('#kgInput');
let gOutput = document.querySelector('#gOutput');
let pOutput = document.getElementById('pOutput');
let zOutput = document.getElementById('zOutput');
let output = document.getElementById('output');

output.style.visibility = 'hidden';

//Listening to events
kgInput.addEventListener('input', event => {
    let kg = event.target.value;
    
    if (kg === '0'){
        output.style.visibility = 'hidden';
    } else {
        output.style.visibility = 'visible';
    }
    gOutput.innerHTML = `${kg * 1000} g`;
    pOutput.innerHTML = `${kg * 2.20462262} lb`;
    zOutput.innerHTML = `${kg * 35.2739619} oz`;
});